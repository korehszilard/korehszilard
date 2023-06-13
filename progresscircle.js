function makesvg(percentage, inner_text=""){

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""
  
   var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
       + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
       + '<circle class="circle-chart__circle '+classes+'"'
       + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
       + '<g class="circle-chart__info">'
       + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';
  
    if(inner_text){
      svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
    }
    
    svg += ' </g></svg>';
    
    return svg
  }
  
  (function ($) {
    $.fn.circlechart = function () {
        var targetOffsetTop = 1600;
        var isTriggered = false;

        function processCharts() {
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var isVisible = false;

            this.each(function () {
                var $chart = $(this);
                var offsetTop = $chart.offset().top;

                if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) {
                    isVisible = true;
                }
            });

            if (isVisible && !isTriggered) {
                this.each(function () {
                    var $chart = $(this);
                    var percentage = $chart.data("percentage");
                    var inner_text = $chart.find('.circle-chart__subline').text();
                    if (!inner_text) {
                        inner_text = $chart.text();
                    }
                    $chart.html(makesvg(percentage, inner_text));
                });

                isTriggered = true;
            } else if (!isVisible) {
                isTriggered = false;
            }
        }

        $(window).on('scroll', function () {
            processCharts.call($('.circlechart'));
        });

        return this;
    };
})(jQuery);

$(document).ready(function () {
    $('.circlechart').circlechart();
});
/**
 * Created by sunmy on 16/7/15.
 */

var $body = $('body');
var $win = $(window);

var main = {
    do: function () {
        var _this = this;
        _this.parallaxBar();
    },
    parallaxBar: function () {
        var $bar = $('.js_bar');
        $win.on('scroll', function () {
            var top = $body.scrollTop();
            $bar.css('background-position-y', -top);
        });
    }
};

main.do();
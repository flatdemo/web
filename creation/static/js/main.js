/**
 * Created by sunmy on 16/7/15.
 */

var $body = $('body');
var $win = $(window);

var main = {
    do: function () {
        var _this = this;
        _this.parallaxBar();
        _this.toggleMenu();

        $('.js_intro')[0].addEventListener('webkitAnimationEnd', function () {
            $('.js_arrow_up').show();
        }, false);
    },
    parallaxBar: function () {
        var $bar = $('.js_bar');
        $win.on('scroll', function () {
            var top = $body.scrollTop();
            $bar.css('background-position-y', -top);
        });
    },
    toggleMenu: function () {
        var $btn = $('.js_toggle_menu');
        var $menu = $('.js_menu');
        $btn.on('click', function () {
            $btn.children().toggleClass('btn-close').toggleClass('btn-menu');
            $menu.toggle();
        });
        $menu.on('click', 'a', function () {
            $menu.hide();
        });
    }
};

main.do();
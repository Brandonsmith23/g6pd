/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {

        var lastScrollTop = 0;
        $(window).scroll(function(event){
          console.log('showfooter');
           var st = $(this).scrollTop();
           if (st > lastScrollTop){
             $(".donate-footer").addClass("footer-visible");

           } else {
             $(".donate-footer").removeClass("footer-visible");
           }
           lastScrollTop = st;
        });
        $(function(){ // document ready

        var stickyTop = $('#what-is').offset().top; // returns number
        var windowTop = $(window).scrollTop(); // returns number
        var headerHeight = $('.banner').height();
        var stickyPoint = stickyTop - headerHeight - 32;

        // $(window).scroll(function(){ // scroll event
        //
        //   // console.log($(window).scrollTop());
        //   // console.log(stickyPoint);
        //   // console.log(headerHeight);
        //
        //   if ( stickyPoint < $(window).scrollTop() ) {
        //     $('.sub-menu').css({ position: 'fixed', top: 160, left: 68, width: 285 });
        //     $('.side-content').css({ position: 'fixed', top: 160, right: 18, paddingRight: 45, margin });
        //     $('.margin-fixed').css({ marginLeft: '285px' });
        //   }
        //   else {
        //     $('.sub-menu').css({ position: 'static', top: 0, left: 0, width: '25%' });
        //     $('.side-content').css({ position: 'static', top: 0, right: 0, paddingRight: 0 });
        //     $('.margin-fixed').css({ marginLeft: 0, paddingLeft: 0 });
        //   }
        //
        // });




      });
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

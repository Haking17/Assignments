/* Goal: reveal from the side (CSS: the nav must be set to position:fixed and left:100% for this to work on mobile)
--- mobile breakpoint: 580px */

// 2. on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%


// 3. on resizing of the browser, we want to reset any styles set if we are back on desktop). Look into removeAttr to remove the inline styles that's being added to the nav element
// $(window).on("resize", function(){

// });

function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}();
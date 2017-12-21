var nav    = document.getElementById('pagenav');

if (nav) {

  var navHeight      = nav.offsetHeight;
  var previousDiv = nav.previousElementSibling;
  var height      = previousDiv.offsetHeight;
  var nextDiv      = nav.nextElementSibling;
  var distanceToTop, wholeDistance;

    //if nav exists

      window.addEventListener('scroll', function(ev) {
        //Debounce for performance https://davidwalsh.name/javascript-debounce-function
        // Or library lodash or underscoreJS
        //TODO
        distanceToTop = previousDiv.getBoundingClientRect().top;
        wholeDistance = distanceToTop + height;

        if ( wholeDistance < -100 ) {
          nav.classList.add("page-nav--show");
          nextDiv.setAttribute("style", "margin-top:" + navHeight + "px");
        }

        if ( wholeDistance > -100 ) {
          nav.classList.remove("page-nav--show");
          nextDiv.removeAttribute("style", "margin-top:" + navHeight + "px");
        }
      },
      {
        passive: true
      })
    //end if nav exists
}

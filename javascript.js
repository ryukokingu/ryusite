document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {    document.getElementById("loading").className = "slideDown";
      }, 3800);
    },
    false
  );
  
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {
        document.getElementById("loading-center").className = "zoomOut";
      }, 3200);
    },
    false
  );
  
  
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(function() {
        document.getElementById("block-1").className = "slideInUp";
      }, 3800);
    },
    false
  );


  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
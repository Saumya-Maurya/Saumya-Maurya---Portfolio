/*
* Template Name: MyPortfolio
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* License: https://bootstrapmade.com/license/
*/

(function ($) {
  "use strict";

  var burgerMenu = function() {
	  $('.burger').click(function(e) {
	  	$(window).scrollTop(0);
	    if(!$('.burger').hasClass('active'))
	      $('.burger').addClass('active');
	    else
	      $('.burger').removeClass('active');
	  });
  }
  burgerMenu();

  var siteIstotope = function() {
	  var $container = $('#portfolio-grid').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	  $('#filters').on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters a').removeClass('active');
	    $(this).addClass('active');
	  });
  }
  $(window).on('load', function () {
    siteIstotope();
  });


  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});

// Code Updates
 // Function to load the navbar
 function loadNavbar() {
	const navbarContainer = document.getElementById('navbar-placeholder');
	fetch('Navbar.html')
	  .then(response => response.text())
	  .then(data => {
		navbarContainer.innerHTML = data;
	  })
	  .catch(error => console.log('Error loading navbar:', error));
  }

  // Function to load the footer
  function loadFooter() {
	const footerContainer = document.getElementById('footer-placeholder');
	fetch('footer.html')
	  .then(response => response.text())
	  .then(data => {
		footerContainer.innerHTML = data;
	  })
	  .catch(error => console.log('Error loading footer:', error));
  }

  // Load navbar and footer when page loads
  window.onload = function() {
	loadNavbar();
	loadFooter();
  };
  
  // Custom navigation behavior for the Graphic Design link
  document.querySelector('#graphic-design-link').addEventListener('click', function(e) {
	window.location.href = 'graphic-design.html'; // Navigate to graphic-design.html
  });

  // Handle filtering logic for the other links
  const filterLinks = document.querySelectorAll('.filters a');
  filterLinks.forEach(link => {
	link.addEventListener('click', function(event) {
	  if (this.id !== 'graphic-design-link') { // Only prevent default if it's not the "Graphic Design" link
		event.preventDefault();
		const filter = this.getAttribute('data-filter');
		console.log('Apply filter:', filter);
		// Implement your filter functionality here
	  }
	});
  });
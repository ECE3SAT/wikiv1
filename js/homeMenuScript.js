

	// Change style of navbar on scroll
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var navbar = document.getElementById("myNavbar");
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			navbar.className = "v1-bar" + " v1-card-2" + " v1-animate-top" + " v1-white";
		} else {
			navbar.className = navbar.className.replace(" v1-card-2 v1-animate-top v1-white", "");
		}
	}

	// Used to toggle the menu on small screens when clicking on the menu button
	function toggleFunction() {
		var x = document.getElementById("navDemo");
		if (x.className.indexOf("v1-show") == -1) {
			x.className += " v1-show";
		} else {
			x.className = x.className.replace(" v1-show", "");
		}
	}

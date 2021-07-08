$(document).ready(function () {
  $("p").click(function () {
    if ($(".typeabout").hasClass("hidden")) {
      $(".typeabout").removeClass("hidden");
    } else {
      $(".typeabout").addClass("hidden");
    }
  });
});

// particle.min.js hosted on GitHub (https://github.com/JulianLaval/canvas-particle-network)

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#000000',
	background: '#ffffff',
 
  interactive: true,
  speed: 'slow',
  density: 'medium'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
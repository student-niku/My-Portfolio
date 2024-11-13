

var typed = new Typed('#element', {
  strings: ['Web Developer', 'Web Designer','Web AI Developer','AI Ms-Office'],
  typeSpeed: 100,
  loop:true,
  showCursor: true,
});// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP animation for all images
gsap.utils.toArray(".scroll-image").forEach((image, i) => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image.closest(".image-row"), // Each row of images as trigger
      start: "top center", // Start animation when top of row reaches center of viewport
      end: "bottom center", // End when bottom of row reaches center of viewport
      scrub: 1, // Smooth scrolling effect
    },
    scale: 0.5, // Shrink the image to 50% of its original size
    y: i % 2 === 0 ? -100 : 100, // Alternate vertical movement (up or down)
    ease: "power1.inOut", // Smooth easing effect
  });
});






// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




VanillaTilt.init(document.querySelector(".tilt-box"), {
  max: 25,     // maximum tilt angle
  speed: 300,  // animation speed
  glare: true, // glare effect
  "max-glare": 0.5 // max glare opacity
});
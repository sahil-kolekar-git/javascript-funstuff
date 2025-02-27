//^ we will do animation on the basis of scrolling
//^ for that we will use ScrollTrigger

gsap.from("#page1 div", {
  scale: 0,
  duration: 1,
  delay: 0.5,
  rotate: 360,
  opacity: 0,
});

gsap.from("#page2 div", {
  scale: 0,
  duration: 1,
  delay: 0.5,
  rotate: 360,
  opacity: 0,
  scrollTrigger: "#page2 #circle",
});
gsap.from("#page3 div", {
  scale: 0,
  duration: 1,
  delay: 0.5,
  rotate: 360,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3 #circle", //~ it will trigger that element
    scroller: "body",
    markers: true, //~ add scroller start and end text
    start: "top 60%",
    //scrub: true,
    scrub: 5,
  },
});

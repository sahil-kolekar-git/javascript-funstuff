gsap.to("#page2 h1", {
  transform: "translateX(-60%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: "true",
    scrub: 4, //~ to make animation smooth
    pin: true,
    start: "top 0",
    end: "top -100%",
  },
});

//~ stagger : it is used to set delay to all h3, each will appear after delay given in stagger
let tl = gsap.timeline();
tl.from("#nav h3", {
  y: -50,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.6,
  stagger: 0.4,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
  stagger: 0.5,
});

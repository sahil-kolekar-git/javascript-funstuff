//^ GSAP - GreenSock Animation Platform, it is opensource
//^ connect by using  gsap cdn
//~ initial to final animation
//! 1st
/*
gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 90,
  backgroundColor: "orange",
});
*/
//~ final to initial
/*
gsap.from("#box", {
  x: 1000,
  duration: 4,
  delay: 3,
  rotate: 360,
  backgroundColor: "red",
});
*/

//! 2nd
//~ without using timeline
/*
gsap.to("#box1", {
  x: 1200,
  duration: 3,
  rotate: 360,
  scale: 0.5,
  delay: 1,
});
gsap.to("#box2", {
  x: 1200,
  duration: 3,
  rotate: 360,
  scale: 0.5,

  delay: 4,
});
gsap.to("#box3", {
  x: 1200,
  duration: 3,
  rotate: 360,
  scale: 0.5,
  delay: 7,
});
*/
//& timeline
//~ with using timeline
/*
let tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,

  duration: 4,
  rotate: 90,
  backgroundColor: "rgb(240, 87, 11)",
});
tl.to("#box2", {
  x: 1000,

  duration: 4,
  rotate: 90,
  backgroundColor: "white",
});
tl.to("#box3", {
  x: 1000,

  duration: 4,
  rotate: 90,
  backgroundColor: "green",
});
*/

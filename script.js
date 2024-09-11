let tl = gsap.timeline();

tl.to(".dog1", {
  duration: 2,
  x: 200,
  ease: "elastic.out",
});
tl.to("body", { duration: 2, backgroundColor: "black" });

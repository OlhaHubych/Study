
gsap.to(".header_img", {
    duration: 1,
    scale: 0.001,
    y: 40,
    ease: "none",
    yoyo: true,
    repeat: -1,
    stagger: {
      grid: [4, 8],
      from: "end",
      axis: "null",
      amount: 1
    }
  }); 
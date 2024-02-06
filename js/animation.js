gsap.registerPlugin(ScrollTrigger);

let squareMove = gsap.timeline({
  scrollTrigger: {
    trigger: '.word_wrap', // 객체기준범위
    start: "0% 30%", // 시작 지점
    end: "100% 80%", // 끝 지점
    // end: "+=500", // 시작 부분부터 500px까지 스크롤 한 후 종료
    scrub: 1, // 부드러운 스크러빙
  },
  // y: "-300%",
});
console.log(squareMove.scrollTrigger);

squareMove.to(".square", {
  y: "-100 / 1920 * 100vw",
});

let largeSquareMove = gsap.timeline({
  scrollTrigger: {
    trigger: '.animation_view', // 객체기준범위
    start: "0% 0%", // 시작 지점
    end: "100% 100%", // 끝 지점
    // end: "+=500", // 시작 부분부터 500px까지 스크롤 한 후 종료
    scrub: 1, // 부드러운 스크러빙
    markers: true,
  },
});

largeSquareMove.to(".large_square", {
  x: "-100 / 1920 * 100vw",
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true,
  smoothMobile: true, 
  getSpeed: true,
  multiplier: 0.5,
  lerp: 0.05, 
  repeat: true, 
  markers: true,
});

document.body.style.height = height + "px";

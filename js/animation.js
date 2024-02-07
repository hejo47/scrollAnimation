const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true,
  // multiplier: 0.5,
  // lerp: 0.05, 
  smoothMobile: true, // 모바일에서 부드러운 스크롤 적용
});

gsap.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".c-scrollbar", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector(".c-scrollbar").style.transform
    ? "transform"
    : "fixed"
});

// scroll.on("scroll", function() {
//   console.log(scroll.scroll.instance.scroll.y);
// });
ScrollTrigger.defaults({
  scroller: ".c-scrollbar"
});

let squareMove = gsap.timeline({
  scrollTrigger: {
    trigger: '.word_wrap', // 객체기준범위
    start: "0% 30%", // 시작 지점
    end: "100% 80%", // 끝 지점
    scrub: 1, // 부드러운 스크러빙
  },
  // y: "-300%",
});

squareMove.to(".square", {
  y: "-100 / 1920 * 100vw",
});

let largeSquareMove = gsap.timeline({
  scrollTrigger: {
    trigger: '.animation_view', // 객체기준범위
    start: "0% 0%", // 시작 지점
    end: "100% 100%", // 끝 지점
    scrub: 1, // 부드러운 스크러빙
  },
});

largeSquareMove.to(".large_square", {
  x: "-100 / 1920 * 100vw",
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());

// ScrollTrigger.refresh();


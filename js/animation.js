gsap.registerPlugin(ScrollTrigger);

let squareMove = gsap.timeline({
    scrollTrigger: {
        trigger: '.word_wrap', // 객체기준범위
        start: "0% 30%", // 시작 지점
        end: "100% 80%", // 끝 지점
        // end: "+=500", // 시작 부분부터 500px까지 스크롤 한 후 종료
        scrub: 1, // 부드러운 스크러빙
        markers: true, // 개발 가이드선
    },
    // y: "-300%",
});

squareMove.to(".square", {
    y: "-100 / 1920 * 100vw",
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true,
    smoothMobile: true, // 모바일에서 부드러운 스크롤 적용 여부
    getSpeed: true, // 사용자 정의 스크롤 속도 함수 활성화
    multiplier: 0.5, // 스크롤 속도에 곱해지는 상수 값
    lerp: 0.06, // 스크롤 위치를 보간하는 정도 (0에 가까울수록 부드럽게 이동)
    class: 'is-inview', // 활성화된 요소에 추가되는 클래스 이름
    repeat: true, // 요소에 대한 애니메이션을 반복할지 여부
    // 다른 옵션들...
});

console.log(scroll.options);
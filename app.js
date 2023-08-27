function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

const circleFollowsMouse = () => {
  window.addEventListener("mousemove", (details) => {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
  });
};

init();

circleFollowsMouse();

let rolltl = gsap.timeline();

rolltl
  .from("#roll-up", {
    opacity: 1,
    y: "0%",
  })
  .to("#roll-up", {
    opacity: 1,
    y: "-100%",
    duration: 1,
  });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 13%",
    end: "top 50%",
    scrub: 3,
  },
});

let tl2 = gsap.timeline();

tl2
  .from("#page1>h1", {
    y: 200,
    opacity: 0,
    duration: 2,
  })
  .to("#page1>h1", {
    y: -100,
    opacity: 1,
    ease: "Power4.easeOut",
  })
  .from("#page1>h3", {
    y: 200,
    opacity: 0,
  })
  .to("#page1>h3", {
    y: 0,
    opacity: 1,
  })
  .from("#page1 h2", {
    y: 100,
    opacity: 0,
  })
  .to("#page1 h2", {
    y: 0,
    opacity: 1,
  })
  .from("#page1 #img-container>img", {
    y: 200,
    opacity: 0,
  })
  .to("#page1 #img-container>img", {
    y: 0,
    opacity: 1,
    ease: "Power4.easeOut",
  });

tl.to("#page1 #img-container>img", {
  scale: 1.05,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2 #p2-content h1",
    scroller: "#main",
    // markers: true,
    start: "top 103%",
    end: "top 50%",
    scrub: 3,
  },
});

tl3
  .from("#page2 #p2-content h1", {
    opacity: 0,
    y: 200,
  })
  .to("#page2 #p2-content h1", {
    opacity: 1,
    y: 0,
  })
  .from("#page2 #drag-div", {
    opacity: 0,
    x: 200,
  })
  .to("#page2 #drag-div", {
    opacity: 1,
    x: 0,
  });

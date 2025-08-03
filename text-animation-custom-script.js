/**
 * Script Purpose: Text Animations (Free Version - No SplitText)
 * Author: Rakesh Kumar (Modified)
 * Version: 1.3
 * Created: 10 Nov 2024
 * Last Updated: 3 Aug 2025
 */

console.log("Text Animations version 1.3 (No SplitText)");

const fadeStart = window.innerWidth < 768 ? "top 100%" : "top 85%";
const fadeEnd = window.innerWidth < 768 ? "top 60%" : "bottom 75%";
const fadeEnd2 = window.innerWidth < 768 ? "top 50%" : "bottom 75%";
const animationStagger = { chars: 0.05, words: 0.1, lines: 0.15 };
const debounceTimeout = 150;

gsap.registerPlugin(ScrollTrigger);

function textAnimations() {
  const animatedElements = document.querySelectorAll("[data-text-animate]");
  animatedElements.forEach((el) => el.setAttribute("aria-label", el.textContent));

  fadeElements();
  fadeList();
  slideUp();
  slideDown();
  slideFromLeft();
  slideFromRight();
  scaleIn();
  rotateIn();
  expandSpacing();
  skewText();
  flipText();
  fadeInOut();
  blurIn();
  bounceIn();
  shakeText();
  flashText();
  tiltText();
  neonText();
}

function getScrubValue(el) {
  return el.getAttribute("data-text-scrub") === "true" ? true : undefined;
}

function fadeElements() {
  gsap.utils.toArray("[data-text-animate='element']").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 0 });
    gsap.to(el, {
      opacity: 1,
      ease: "power2.inOut",
      y: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "top 60%",
        scrub: getScrubValue(el),
      },
    });
  });
}

function fadeList() {
  gsap.utils.toArray("[data-text-animate='list']").forEach((list) => {
    const items = gsap.utils.toArray(list.querySelectorAll("li"));
    if (!items.length) return;
    gsap.set(items, { opacity: 0 });
    gsap.to(items, {
      opacity: 1,
      stagger: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: list,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(list),
      },
    });
  });
}

function slideUp() {
  gsap.utils.toArray("[data-text-animate='slide-up']").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function slideDown() {
  gsap.utils.toArray("[data-text-animate='slide-down']").forEach((el) => {
    gsap.set(el, { opacity: 0, y: -50 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function slideFromLeft() {
  gsap.utils.toArray("[data-text-animate='slide-left']").forEach((el) => {
    gsap.set(el, { opacity: 0, x: -50 });
    gsap.to(el, {
      opacity: 1,
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function slideFromRight() {
  gsap.utils.toArray("[data-text-animate='slide-right']").forEach((el) => {
    gsap.set(el, { opacity: 0, x: 50 });
    gsap.to(el, {
      opacity: 1,
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function scaleIn() {
  gsap.utils.toArray("[data-text-animate='scale-in']").forEach((el) => {
    gsap.set(el, { opacity: 0, scale: 0.8 });
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function rotateIn() {
  gsap.utils.toArray("[data-text-animate='rotate-in']").forEach((el) => {
    gsap.set(el, { opacity: 0, rotate: -15 });
    gsap.to(el, {
      opacity: 1,
      rotate: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function expandSpacing() {
  gsap.utils.toArray("[data-text-animate='expand-spacing']").forEach((el) => {
    gsap.set(el, { opacity: 0, letterSpacing: "-2px" });
    gsap.to(el, {
      opacity: 1,
      letterSpacing: "normal",
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function skewText() {
  gsap.utils.toArray("[data-text-animate='skew']").forEach((el) => {
    gsap.set(el, { opacity: 0, skewX: "15deg" });
    gsap.to(el, {
      opacity: 1,
      skewX: "0deg",
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function flipText() {
  gsap.utils.toArray("[data-text-animate='flip']").forEach((el) => {
    gsap.set(el, { opacity: 0, rotateX: -90 });
    gsap.to(el, {
      opacity: 1,
      rotateX: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function fadeInOut() {
  gsap.utils.toArray("[data-text-animate='fade-in-out']").forEach((el) => {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, {
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function blurIn() {
  gsap.utils.toArray("[data-text-animate='blur-in']").forEach((el) => {
    gsap.set(el, { opacity: 0, filter: "blur(10px)" });
    gsap.to(el, {
      opacity: 1,
      filter: "blur(0px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function bounceIn() {
  gsap.utils.toArray("[data-text-animate='bounce-in']").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function shakeText() {
  gsap.utils.toArray("[data-text-animate='shake']").forEach((el) => {
    gsap.set(el, { x: 0 });
    gsap.to(el, {
      x: "+=10",
      repeat: 5,
      yoyo: true,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

function flashText() {
  gsap.utils.toArray("[data-text-animate='flash']").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  });
}

function neonText() {
  gsap.utils.toArray("[data-text-animate='neon']").forEach((el) => {
    gsap.fromTo(
      el,
      { textShadow: "0px 0px 5px #fff, 0px 0px 10px #09F", opacity: 0.5 },
      {
        textShadow: "0px 0px 10px #fff, 0px 0px 20px #09F",
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        ease: "power2.inOut",
      }
    );
  });
}

function tiltText() {
  gsap.utils.toArray("[data-text-animate='tilt']").forEach((el) => {
    gsap.set(el, { rotateY: 90, opacity: 0 });
    gsap.to(el, {
      rotateY: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: fadeStart,
        end: fadeEnd,
        scrub: getScrubValue(el),
      },
    });
  });
}

document.fonts.ready
  .then(() => {
    console.log("Fonts loaded successfully");
    textAnimations();
  })
  .catch(() => console.error("Font loading error"));

function debounce(func) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, debounceTimeout, event);
  };
}

function handleResize() {
  console.log("Window resized, refreshing animations");
  ScrollTrigger.refresh();
  textAnimations();
}

function addResizeListener() {
  window.addEventListener("resize", debounce(handleResize));
}

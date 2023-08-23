import { gsap } from "gsap";

// animate text function
export function animateText(element, duration) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const elementText = element.innerText;
  element.onmouseover = (e) => {
    let inter = 0;
    let int = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, i) => {
          if (i < inter) {
            return (letter = elementText[i]);
          }
          return (letter = letters[Math.floor(Math.random() * 26)]);
        })
        .join("");
      if (inter >= elementText.length) clearInterval(int);
      inter += 1 / 3;
    }, duration);
  };
}

export function handleTagsAnimation(e, direction) {
  const tagsTl = gsap.timeline();
  tagsTl
    .to(e, {
      x: direction,
      duration: 0.8,
      delay: 1,
    })
    .to(e, {
      x: 0,
      duration: 0.1,
      ease: "none",
    });
}

// gsap functions
export function gsapSelected(sectionRef, bigScreen) {
  const tl = gsap.timeline();

  // First animation
  gsap.fromTo(sectionRef.current, { x: "0" }, { x: "0", duration: 0.1 });
  tl.fromTo(
    sectionRef.current,
    { x: "0" },
    {
      x: bigScreen ? "-50%" : "0",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "45% 80%",
        end: "10% 60%",
      },
    }
  );

  // Second animation
  tl.fromTo(
    sectionRef.current,
    { x: bigScreen ? "-50%" : "0" },
    {
      x: "0",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "80% 80%",
        end: "40% 60%",
      },
    }
  );
}

export function gsapFadeIn(element) {
  const opacityTl = gsap.timeline();
  opacityTl.from(element.current, {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: element.current,
      start: "bottom 90%",
      scrub: 1,
    },
  });
}

export function gsapMoveRight(element) {
  gsap.fromTo(
    element.current,
    { x: 0 },
    {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: element.current,
        start: "top bottom",
        end: "bottom 0",
        scrub: 1,
      },
    }
  );
}

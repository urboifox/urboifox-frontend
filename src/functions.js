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

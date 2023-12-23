import { gsap } from "gsap";

export function handleTagsAnimation(e, direction) {
  const tagsTl = gsap.timeline();
  tagsTl
    .to(e, {
      x: direction,
      duration: 0.8,
      delay: 1.5,
    })
    .to(e, {
      x: 0,
      duration: 0.1,
      ease: "none",
    });
}

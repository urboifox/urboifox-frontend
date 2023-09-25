import { useEffect, useRef } from "react";
import { PrimaryButton } from "../";
import gsap, { Circ } from "gsap";
export default function ThankYouModal({ setIsOpen }) {
  const handleClick = () => {
    setIsOpen(false);
  };
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contactModal > *",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: Circ.easeOut,
          stagger: 0.1,
          delay: 0.3,
        }
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={scope}
      className="contactModal flex items-center justify-center flex-col w-full h-full"
    >
      <h2 className="mb-10 uppercase tracking-widest text-lg md:text-4xl lg:text-5xl font-light">
        I got your message!
      </h2>
      <p className="font-extralight mb-10 text-xs max-w-lg text-center md:text-base tracking-wide">
        Thank you for reaching out, I will make sure i respond ASAP.
      </p>
      <div onClick={() => handleClick()}>
        <PrimaryButton text={"Close"} />
      </div>
    </div>
  );
}

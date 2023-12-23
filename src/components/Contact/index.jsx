import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./style.scss";
import { Download, Facebook, Github, Instagram, Linkedin, Pin } from "../Icons";
import { Link } from "react-router-dom";
import ThankYouModal from "./components/ThankYouModal";
export default function Contact() {
  const form = useRef(null);
  const initialData = {
    name: "",
    email: "",
    message: "",
  };
  const initialValidation = {
    name: false,
    email: false,
    message: false,
  };

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [validInputs, setValidInputs] = useState(initialValidation);
  const [formIsValid, setFormIsValid] = useState(false);
  const [data, setData] = useState(initialData);

  // validation functions
  const validateText = (value) => {
    return value.trim() !== ""; // Check if the name is not empty
  };
  const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleValidate = (e) => {
    const elName = e.name;
    const elValue = e.value;
    if (elName === "name" || elName === "message") {
      const isValid = validateText(elValue);
      setValidInputs((prev) => ({
        ...prev,
        [elName]: isValid,
      }));
      return isValid;
    } else if (elName === "email") {
      const isValid = validateEmail(elValue);

      setValidInputs((prev) => ({
        ...prev,
        [elName]: isValid,
      }));
      return isValid;
    }
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("active");
  };

  const handleBlur = (e) => {
    if (e.target.value.trim().length === 0) {
      e.target.parentNode.classList.remove("active");
    }
    if (handleValidate(e.target)) {
      e.target.parentNode.classList.remove("invalid");
    } else {
      e.target.parentNode.classList.add("invalid");
    }
  };

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_ox9qmkf",
        "template_95f69me",
        form.current,
        "P1q-yQ-U0NpRjft9y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setData(initialData);
        setValidInputs(initialValidation);
        const inputs = form.current.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
          input.parentNode.classList.remove("active");
        });
        setLoading(false);
        setModalOpen(true);
      });
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    if (e.target.parentNode.classList.contains("invalid")) {
      if (handleValidate(e.target)) {
        e.target.parentNode.classList.remove("invalid");
      } else {
        e.target.parentNode.classList.add("invalid");
      }
    }
    setFormIsValid(Object.values(validInputs).every((val) => val === true));
  };
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid) {
      sendEmail();
    }
  };

  const handleClick = () => {
    const inputs = form.current.querySelectorAll("input, textarea");
    let num = 0;
    inputs.forEach((input) => {
      if (!handleValidate(input)) {
        input.parentNode.classList.add("invalid");
      } else {
        num += 1;
      }
    });
    if (num === 3) {
      sendEmail();
    }
  };
  return (
    <div className="cont mx-auto pt-20 md:pt-32">
      <div className="cont mx-auto relative aboutHeading">
        <div
          className={`sectionHeading fadeIn text-[var(--main-color-dimmed)] block md:self-start max-w-[80rem] tracking-wide w-full font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
        >
          <h2 className="w-max">Let&apos;s Work Together</h2>
        </div>
      </div>
      <div className="flex flex-col-reverse mb-20 lg:mb-0 lg:flex-row px-4 md:px-6 gap-10 contact mt-10 md:mt-14">
        <form
          ref={form}
          onSubmit={(e) => handleSubmit(e)}
          className="flex-1 flex  flex-col gap-5 md:gap-10"
        >
          <div className="link">
            <input
              required
              value={data.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleFocus(e)}
              autoComplete="false"
              autoCorrect="false"
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="link">
            <input
              value={data.email}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleFocus(e)}
              autoComplete="false"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="link">
            <textarea
              value={data.message}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleFocus(e)}
              autoComplete="false"
              className="resize-none overflow-scroll"
              name="message"
              id="message"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className="lg:w-max">
            <button
              disabled={loading}
              onClick={() => handleClick()}
              className={` text-light border-light before:bg-light md:hover:text-dark hover:border-ligh cursor-none py-4 px-12 uppercase border-[1px] font-extralight transition-all text-base duration-300 relative hover:before:origin-left hover:before:scale-x-100 primary-btn`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <div className="z-[10] lg:w-1/3 flex flex-col py-10 border border-dimmed px-4 md:px-10">
          <h3 className="text-center uppercase text-dimmed tracking-widest text-base md:text-xl font-extralight">
            More Info!
          </h3>
          <div className="flex-1 lg:mt-12 flex flex-col items-center">
            <div className="socialLinks justify-center mt-10 flex gap-4 flex-wrap">
              <motion.a
                aria-label="Go to my Facebook"
                href="https://www.facebook.com/profile.php?id=100008910966277"
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className={`fill-[var(--main-color-dimmed)] md:hover:fill-[var(--main-color)]`}
              >
                <Facebook />
              </motion.a>
              <motion.a
                aria-label="Go to my Facebook"
                href="https://www.instagram.com/_urboifox/"
                target="_blank"
                whileTap={{ scale: 0.9 }}
              >
                <Instagram
                  className={`fill-[var(--main-color-dimmed)] md:hover:fill-[var(--main-color)]`}
                />
              </motion.a>
              <motion.a
                aria-label="Go to my Github"
                href="https://github.com/urboifox"
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className="group"
              >
                <Github
                  className={`fill-[var(--main-color-dimmed)] md:group-hover:fill-[var(--main-color)] w-full h-full transition-colors delay-0 duration-300`}
                />
              </motion.a>
              <motion.a
                aria-label="Go to my Linkedin"
                href="https://www.linkedin.com/in/urboifox/"
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className="group"
              >
                <Linkedin
                  className={`fill-[var(--main-color-dimmed)] md:group-hover:fill-[var(--main-color)] transition-colors duration-300`}
                />
              </motion.a>
            </div>
            <div className=" mt-7 flex flex-col gap-4">
              <Link
                to={
                  "https://www.google.com/maps/place/%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.2241109,29.9548859,12z/data=!3m1!4b1!4m6!3m5!1s0x14f5c49126710fd3:0xb4e0cda629ee6bb9!8m2!3d31.2000924!4d29.9187387!16zL20vMDEzZzM?entry=ttu"
                }
                target="_blank"
                className="py-1  flex items-center gap-3 group hover:text-light transition-colors duration-300 text-dimmed font-light"
              >
                <Pin
                  className={
                    "w-5 group-hover:stroke-[var(--main-color)] stroke-[var(--main-color-dimmed)] transition-colors duration-300"
                  }
                />
                Alexandria, Egypt
              </Link>
              <div>
                <a
                  href="/Mohamed Ashraf - Frontend Developer.pdf"
                  download
                  className="group py-1 tracking-wide font-light gap-2 transition-colors duration-300 hover:text-primary-100 justify-center flex items-center"
                >
                  <Download
                    className={
                      "fill-light w-6 transition-colors duration-300 group-hover:fill-primary-100"
                    }
                  />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 md:px-10 fixed w-full h-full left-0 top-0 bg-opacity-90 bg-bg z-40"
          >
            <ThankYouModal setIsOpen={setModalOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

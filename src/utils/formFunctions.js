const handleFocus = (e) => {
  e.target.parentNode.classList.add("active");
};
const handleBlur = (e) => {
  if (e.target.value.trim().length === 0) {
    e.target.parentNode.classList.remove("active");
  }
};

export { handleFocus, handleBlur };

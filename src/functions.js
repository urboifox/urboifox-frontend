// animate text function
export function animateText(word, duration) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const wordText = word.innerText;
  word.onmouseover = (e) => {
    let inter = 0;
    let int = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, i) => {
          if (i < inter) {
            return (letter = wordText[i]);
          }
          return (letter = letters[Math.floor(Math.random() * 26)]);
        })
        .join("");
      if (inter >= wordText.length) clearInterval(int);
      inter += 1 / 3;
    }, duration);
  };
}

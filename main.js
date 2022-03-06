// Declare our variables
const adviceId = document.querySelector(".advice-tag");
const adviceQuote = document.querySelector(".advice-quote");
const btn = document.querySelector(".btn");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      adviceId.innerHTML = `advice # ${dataId}`;
      adviceQuote.innerHTML = dataAdvice;
    });
}

// When button is clicked, run the generateAdvice function
btn.addEventListener("click", () => {
  generateAdvice();
});

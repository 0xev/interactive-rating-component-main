const cardElement = document.querySelector(".card");
const thankyouElement = document.querySelector(".thank-you");
const submitButtonElement = document.querySelector(".submit-btn");
const span = document.querySelector(".feedback");

const rating = document.querySelectorAll(".btn");

function submitRating() {
  thankyouElement.classList.remove("hidden");
  cardElement.classList.add("hidden");
  //   cardElement.style.display = "none";
}

for (const rate of rating) {
  rate.addEventListener("click", () => {
    span.textContent = rate.innerHTML;
  });
}

submitButtonElement.addEventListener("click", submitRating);

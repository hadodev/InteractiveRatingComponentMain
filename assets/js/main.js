const questionCard = document.querySelector(".question");
const thanksCard = document.querySelector(".thanks");
const rateList = document.querySelectorAll(".card__points input");
const button = document.querySelector(".card__button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    for (let i = 0; i < rateList.length; i++) {
        if (rateList[i].checked) {
            console.log(rateList[i].value);
            result.innerText = rateList[i].value;
        }
    }

    questionCard.classList.toggle("invisible");
    setTimeout(() => {
        thanksCard.classList.toggle("invisible");
    }, 500)
});

const cardText = document.getElementById("card-text");
const cardHolder = document.getElementById("card-holder");

const month = document.querySelector(".month");
const year = document.querySelector(".year");

const cvc = document.getElementById("cvc-text");
const cardNameInput = document.getElementById("card-name");
const cardNumberInput = document.getElementById("card-number");

const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

const submitInput = document.getElementById("submit");
const finalPage = document.querySelector(".final");


function setCardNumber(e) {
    cardText.innerText = format(e.target.value);
}

function setCardName(e) {
    cardHolder.innerText = e.target.value;
}

function setCardMonth(e) {
    month.innerText = e.target.value;
}

function setCardYear(e) {
    year.innerText = e.target.value;
}

function setCardCvc(e) {
    cvc.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}


function callSubmit(e) {
    e.preventDefault();
    if (!cardNameInput.value) {
        cardNameInput.classList.add("error");
        cardNameInput.parentElement.classList.add("error-text");
    } else {
        cardNameInput.classList.remove("error");
        cardNameInput.parentElement.classList.remove("error-text");
    }

    if (!cardNumberInput.value) {
        cardNumberInput.classList.add("error");
        cardNumberInput.parentElement.classList.add("error-text");
    } else {
        cardNumberInput.classList.remove("error");
        cardNumberInput.parentElement.classList.remove("error-text");
    }

    if (!monthInput.value) {
        monthInput.classList.add("error");
        monthInput.parentElement.classList.add("error-text");
    } else {
        monthInput.classList.remove("error");
        monthInput.parentElement.classList.remove("error-text");
    }

    if (!yearInput.value) {
        yearInput.classList.add("error");
        yearInput.parentElement.classList.add("error-text");
    } else {
        yearInput.classList.remove("error");
        yearInput.parentElement.classList.remove("error-text");
    }

    if (!cvcInput.value) {
        cvcInput.classList.add("error");
        cvcInput.parentElement.classList.add("error-text");
    } else {
        cvcInput.classList.remove("error");
        cvcInput.parentElement.classList.remove("error-text");
    }

    if (cardNameInput.value && cardNumberInput.value && monthInput.value && yearInput.value && cvcInput.value) {
        location.href = "../html/second-page.html";
    }

}

// Call the functions
cardNameInput.addEventListener("keyup", setCardName);
cardNumberInput.addEventListener("keyup", setCardNumber);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
submitInput.addEventListener("click", callSubmit)
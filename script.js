const text = document.getElementById("text")
const number = document.getElementById("number")
const check = document.getElementById("check")
const reset = document.getElementById("reset")

function guessNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkNumber(num, submittedNumber) {
    if (submittedNumber > num) {
        text.innerText = 'Go Low ⬇️';
    } else if (submittedNumber == num) {
        text.innerText = 'Correct Guess 🎉';
    } else {
        text.innerText = 'Go High ⬆️';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    num = guessNumber()
});

check.addEventListener("click", ()=>{
    submittedNumber = number.value;
    checkNumber(num, submittedNumber)
})

reset.addEventListener("click", ()=>{
    num = guessNumber()
    number.value = '';
    number.focus()
    text.innerText = 'Guess a number between 1 & 100';
})

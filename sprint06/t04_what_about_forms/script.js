function toCheckQuiz() {
    const radio = document.querySelectorAll("input[type=radio]");
    const div = document.querySelector("#answer");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            if (radio[i].classList.contains("first")) {
                div.innerText = `Shame on you! Go and watch Avengers!`;
            } else if (radio[i].classList.contains("third")) {
                div.innerText = `Shame on you! Go and watch Avengers!`;
            } else if (radio[i].classList.contains("second")) {
                div.innerText = `Good job!`;
            }
        }
    }
}

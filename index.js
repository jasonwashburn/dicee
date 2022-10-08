function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function getDieImagePath(number) {
    return `images/dice${number}.png`;
}

leftDieValue = getRandomNumber();
const leftDie = document.getElementsByClassName("img1");
leftDie[0].src = getDieImagePath(leftDieValue);

rightDieValue = getRandomNumber();
const rightDie = document.getElementsByClassName("img2");
rightDie[0].src = getDieImagePath(rightDieValue);

const text = document.getElementsByTagName("h1")[0];

if (leftDieValue == rightDieValue) {
    text.innerHTML = "Draw!";
} else if (leftDieValue > rightDieValue) {
    text.innerHTML = `🚩Player 1 Wins!`
} else if (rightDieValue > leftDieValue) {
    text.innerHTML = `Player 2 Wins!🚩`
}
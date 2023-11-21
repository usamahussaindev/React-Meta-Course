function HandelClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert('computer Number: $(randomNum), your guess: $(userInput}');
}


export default HandelClick();
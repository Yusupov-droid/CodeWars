function high(x = "") {
    let max = {
        word: "",
        score: 0,
    };

    let words = x.split(" ");

    words.forEach((word) => {
        let value = getWordValue(word);

        if (max.score < value) {
            max.word = word;
            max.score = value;
        }
    });
    console.log(max.word);

    return max.word;
}

function getWordValue(word) {
    let letters = word.split("");
    return letters.reduce((a, b) => {
        return a + b.charCodeAt() - 96;
    }, 0);
}

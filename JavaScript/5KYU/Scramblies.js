function scramble(str1, str2) {
    const letterCounts = Array.prototype.reduce.call(str1, (letterCounts, currentLetter) => {
        letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
        letterCounts[currentLetter]++;
        return letterCounts;
    }, {});

    return Array.prototype.every.call(str2, (currentLetter) => {
        if (letterCounts[currentLetter] > 0) {
            letterCounts[currentLetter]--;
            return true;
        } else {
            return false;
        }
    });
}
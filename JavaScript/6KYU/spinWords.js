function spinWords(string) {
  return string.replace(/\w{5,}/g, (word) => {
    return word.split("").reverse().join("");
  });
}

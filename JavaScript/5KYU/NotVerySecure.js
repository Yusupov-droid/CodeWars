function alphanumeric(string) {
    let match = /[^(0-9|a-z)]/gi
    return string ? !(match.test(string)) : false
}



console.log(alphanumeric());
console.log(alphanumeric("hello world_"));
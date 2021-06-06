function validBraces(braces = '') {

    let regex = /\(\)|\[\]|\{\}/g

    while (regex.test(braces)) {
        braces = braces.replace(regex, "")
    }
    return braces ? false : true

}

console.log(validBraces("()"));
console.log(validBraces("[(])"));
console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("[({})](]"));
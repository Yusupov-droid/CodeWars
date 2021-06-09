function toCamelCase(str) {
    return str.split(/[\_|\-| ]/).map((word, index) => {
       return index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    }).join('')
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
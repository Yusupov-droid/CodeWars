function filter_list(l = []) {
    return l.filter((element) => {
        return typeof element === "number" ? /^(\d+)/g.test(element) : false;
    });
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

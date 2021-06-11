function add(n) {
    const sum = function (y) {
        return add(n + y);
    };

    sum.valueOf = function () {
        return n;
    };

    return sum;
}

console.log(add(1)(2)(3) == 6);
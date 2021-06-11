function add(a, b) {

    let result = []
    let inTheMind = 0;

    if (Number(a) < Number(b)) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = 0; i < a.length; i++) {
        let num_one = Number(a[a.length - 1 - i])
        let num_two = Number(b[b.length - 1 - i]) || 0

        let temp = num_one + num_two + inTheMind

        if (temp >= 10) {
            inTheMind = 1;
            result.push(temp - 10)
        }
        else {
            inTheMind = 0;

            result.push(temp)
        }
    }
    if (inTheMind) result.push(inTheMind)
    return result.reverse().join('')

}
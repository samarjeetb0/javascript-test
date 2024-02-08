

const radius = [3, 4, 5, 6];

const diameter = function (radius) {
    return 2 * radius;
}

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function (arr, logic) {
    const output = [];
    arr.forEach(element => {
        output.push(logic(element))
    });
    // for (let i = 0; i < arr.length; i++) {
    //     output.push(logic(arr[i]))
    // }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

//using map

console.log(radius.map(diameter))
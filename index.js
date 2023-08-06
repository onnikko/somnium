const max = (a, b) => {
    if (a > b) return a;
    return b;
};

const a = 5;
const b = 3;

console.log (`${a}) > ${b}`, max(a, b));
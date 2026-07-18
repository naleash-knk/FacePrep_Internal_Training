const first = [1, 2];

const second = [3, 4];

const all = [...first, ...second];

console.log(all);

function total(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(total(5, 10, 15));
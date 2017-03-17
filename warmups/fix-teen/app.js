


function fixTeen(n) {
    if (n === 15) {
        return n = 15;
    } else if (n === 16) {
        return n = 16;
    } else if (n >= 13) {
        return n = 0;
    } else {
        return n = n;
    }
}

function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a+b+c;
}
console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 15, 14));
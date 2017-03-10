// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

var diff21 = function (n) {
    if (n < 21) {
        return (21 - n);
    } else if (n >= 21) {
        return (n - 21) * 2;
    }
}
diff21(24);

////////////////////////////////////////////

// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.


var noTriples = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1] && nums[i+1] === nums[i+2]) {
            return false;
        }

    }
return true;
}

console.log(noTriples([2, 3, 4, 4, 4, 2, 1, 8]));

/**
Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

Your solution should be a link to a gist on gist.github.com with your implementation.

When writing this code, you can use any language you're comfortable with. The code must be well tested and documented if necessary, and in general please treat the quality of the code as if it was ready to ship to production.

Try to avoid using language defined methods like Ruby's Array#flatten.*
 */
'use strict';

// exam if the array is already flattened
// returns true/false
const isArrayFlattened = function ($array) {
    if (!$array) {
        return true;
    }
    for (const item of $array) {
        if (item instanceof Array) {
            return false;
        }
    }
    return true;
};

// main function to flatten the arrays. The use of Array.prototype.reduce is so that each iteration
// a (potential) layer of square brackets is removed.
// This is ensured by that [1].concat(2).concat(3) returns the same value as
// [1].concat([2, 3]), which is [1, 2, 3] for both
const flatten = function ($array) {
    while (!isArrayFlattened($array)) {
        $array = $array.reduce((previous, item) => {
            return previous.concat(item);
        }, []);
    }
    return $array;
};

console.log(flatten([])); // []
console.log(flatten([1, [2], 3])); // [1, 2, 3]
console.log(flatten([[1, 2], 3])); // [1, 2, 3]
console.log(flatten([[[1], 2], 3])); // [1, 2, 3]
console.log(flatten([[[[1]], 2], 3])); // [1, 2, 3]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [2]], [3]]])); // [1, 2, 3]

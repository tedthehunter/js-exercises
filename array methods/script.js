const camelize = (string) => {
    let splitArray = string.split('-');

    splitArray = splitArray.map(function(item, index) {
            if (index > 0) {
                return item.replace(item[0], item[0].toUpperCase());
            }
            else {
                return item;
            }
        });
    let joinedArray = splitArray.join('');
    
    return joinedArray;
}

const filterRange = (inputArray, lowerNum, higherNum) => {
    return inputArray.filter(item => (item >= lowerNum && item <= higherNum));
}

const filterRangeInPlace = (inputArray, lowerNum, higherNum) => {
    inputArray.map(function(item, index) {
        if (! (item >= lowerNum && item <= higherNum)) {
            inputArray.splice(index, 1);
        }
    })
}

/* ***TEST SUITE*** */

//EXERCISE 1
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

//EXERCISE 2
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)

//EXERCISE 3
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log( arr2 ); // [3, 1]

//EXERCISE 4
let arr4 = [5, 2, 1, -10, 8];

alert( arr4 ); // 8, 5, 2, 1, -10
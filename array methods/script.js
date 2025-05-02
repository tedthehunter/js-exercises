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

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
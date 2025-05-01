const camelize = (string) => {
    let array = string.split('-');
    //transform array
        //loop through array
        array = array.map((item, index) => 
            index !== 0 && item.replace(item[0], item[0].toUpperCase()))
        //skip first index
        //capitalize each item
    //join array
    console.log(array);
    
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
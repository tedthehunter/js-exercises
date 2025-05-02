const camelize = (string) => {
    //SPLIT input string into array
    //MAP function to split array
        //FUNCTION accepts item, index as parameters, implicitly, not explicitly
            //IF index > 0:
            //RETURN item w/first letter capitalized
    //JOIN array back into string
    //RETURN string
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
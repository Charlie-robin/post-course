// How do you check if two strings are a rotation of each other?

const stringRotation = (stringOne, stringTwo) => {
    let result = false;
    if (stringOne.length === stringTwo.length) {
        const concatStringTwo = stringTwo + stringTwo;
        result = concatStringTwo.includes(stringOne);
    }
    return result;
}

console.log(stringRotation("hello" , "elloh"), true)
console.log(stringRotation("hello" , "eoloh"), false)
console.log(stringRotation("123" , "6"), false)

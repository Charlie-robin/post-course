// describe function

// refactor

// bug hunt


function Check(s1, s2) {
    if( typeof s1 === "string") {   
        // if s1 is a string 
        if(typeof s2 ===  'string'){
            //empty array 
            var charArray1=[];
            for(i=0; i<s1.length; i++) {
                // push letter into array
                var c = s1[i]; charArray1.push(c);
            }
            //same as above
            var charArray2=[];
            for(i=0; i<s2.length; i++) {
                var c = s2[i]; charArray2.push(c);
            }

            // sorts them ascending order
            charArray1.sort()
            charArray2.sort()
            // console.log(charArray1, charArray2)

            if (

                // checks each character against the other array
                (charArray1[0] === charArray2[0]) &&
                  (charArray1[1] === charArray2[1]) &&
                (charArray1[2] === charArray2[2]) &&
                (charArray1[3] === charArray2[3]) 
            ) {
                // returns true
                return true;
            }
            else {
                return false;
            };
        }
    else {
        console.log("Invalid Input");
    }}
    else {
        console.log("Invalid Input");
    }
}
// console.log(Check('bobo', 'obob'), 'true');
// console.log(Check('bobo', 'boo4b'), 'false');
// console.log(Check('dog', 'god'), 'true');
// This test case fails
console.log(Check('gabety', 'gabmen'), );

const sortString = (string) => string.toLowerCase().split("").sort().join("");
const checkString = (string) => typeof(string) === "string" ? true : false;

const checkTwoStrings = (stringOne, stringTwo) => {
    if (checkString(stringOne) && checkString(stringTwo)) {
        return sortString(stringOne) === sortString(stringTwo);
    }
    return console.log("Invalid Input")
}



// console.log(toSortedArray("hello"))

console.log(checkTwoStrings('bobo', 'obob'), "twostring");
console.log(checkTwoStrings('bobo', 'boo4b'), "twostring");
console.log(checkTwoStrings('dog', 'god'), "twostring")

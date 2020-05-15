// I want to be able to make Triangles and define the length of each of their sides.
// I want to be able to check whether the triangle is equilateral, isosceles or scalene. 
// Please write the code to allow me to do this.

// HINTS: - equilateral means 3 sides of the same length
//        - isosceles means 2 sides of the same length, and one different
//        - scalene means 3 sides of different length

// STEP 1: write the function. Input 3 numbers, Output a string

const identifyTriangle = (numOne, numTwo, numThree) => {
    let result;
    if (numOne === numTwo && numTwo === numThree) {
        result = "equilateral";
    } else if  (numOne !== numTwo && numTwo !== numThree && numOne !== numThree){
        result = "scalene"
    } else {
        result = "isosceles"
    }
    console.log(`Your triangle is ${result}`);
}

identifyTriangle(
    2,1,6)
    
    // STEP 2: make one Triangle
    
 //\\^
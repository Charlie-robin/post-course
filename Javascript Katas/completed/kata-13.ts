// How do you check if two strings are a rotation of each other?

 export const areRotations = (stringOne, stringTwo) => (stringOne + stringOne).includes(stringTwo);



// export const areRotations = (stringOne, stringTwo) => {
//   let result = false;
//   if (stringOne.length === stringTwo.length) {
//     const concatStringTwo = stringTwo + stringTwo;
//     result = concatStringTwo.includes(stringOne);
//   }
//   return result;
// };

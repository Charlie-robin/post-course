// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

const arrayChecker = (array, character) => array.includes(character);



console.log(arrayDiff([4], [4, 5]));

// const arrayDiff = (arrayOne, arrayTwo) => arrayOne.length > 0?
//   [...arrayOne, ...arrayTwo].filter(
//     (element, index, array) => array.indexOf(element) === array.lastIndexOf(element)) : [];
//   ;

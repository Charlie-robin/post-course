// How do you find the largest and smallest number in an unsorted integer array?

const sortArray = (array) => array.sort((a, b) => a - b); 

const getSmallestHighest = ( array ) => {
    const sortedArray = sortArray(array);
    return `This is the smallest ${ sortedArray[0]}. This is the largest ${sortedArray[sortedArray.length - 1]}.`
}

console.log(getSmallestHighest([1,2,4,8,9,10,21]),"should be 1, 21")
console.log(getSmallestHighest([1,1,1,1,1,1,1,1]),"should be 1, 1")
console.log(getSmallestHighest([0.21,.51,617,189,91,10,1,1]),"should be 0.21, 617")
// 04. How do you remove duplicates from an array in place?

const removeDuplicate = (array) => array.filter((item, index) => array.indexOf(item) === index);

console.log(removeDuplicate([1,1,1,1,1,4,5,6]),"1,4,5,6");
console.log(removeDuplicate(["a","b","d","a"]),"a b d");
console.log(removeDuplicate([1,2,6,7,9,14,15,16]),"1,2,6,7,9,14,15,16");


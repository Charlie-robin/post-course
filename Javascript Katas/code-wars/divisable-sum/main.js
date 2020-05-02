// Create a fucntion that takes an input and shows the total of the numbers that are diviable and 3 and 5
//There should not be any duplicates numbers 

const totalDivisables = (goal) => {
  const divisThree = divNumTotaler(3, goal, []);
  const divisFive = divNumTotaler(5, goal, []);
  const joinedArray = [...divisThree, ...divisFive];
  return joinedArray
    .sort((a, b) => a - b)
    .filter((element, index) => joinedArray.indexOf(element) === index)
    .reduce(((acc, cur) => acc + cur),0);
};

const divNumTotaler = (number, goal, array) => {
  const counter = array.length + 1;
  const total = counter * number;
  if (total < goal) {
    array.push(total);
    divNumTotaler(number, goal, array);
  }
  return array;
};

console.log(totalDivisables(60));

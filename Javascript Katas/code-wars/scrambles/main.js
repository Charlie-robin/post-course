// Scrambles

// Complete the function scramble(str1, str2)
// that returns true if a portion of str1 characters can be rearranged to match str2,
// otherwise returns false.

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (stringOne, stringTwo) => {
  const objOne = objMaker(stringOne);
  const objTwo = objMaker(stringTwo);
  for (key in objTwo) {
    if (!objOne[key] || objOne[key] < objTwo[key]) {
      return false;
    }
  }
  return true;
};

const objMaker = (string) => {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  return obj;
};

console.log(scramble("rkqodlwwwww", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));

// const scramble = (str1, str2) => {
//   const obj1 = {};
//   const obj2 = {};
//   for (let i = 0; i < str1.length; i++) {
//     if (!obj1[str1[i]]) {
//       obj1[str1[i]] = 1;
//     } else {
//       obj1[str1[i]]++;
//     }
//   }
//   for (var j = 0; j < str2.length; j++) {
//     if (!obj2[str2[j]]) {
//       obj2[str2[j]] = 1;
//       console.log(obj2);
//     } else {
//       obj2[str2[j]]++;
//       console.log(obj2);
//     }
//   }
//   for (var key in obj2) {
//     console.log(key, obj1[key]);
//     if (!obj1[key] || obj1[key] < obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const scramble = (stringOne, stringTwo) =>
//   stringTwo
//     .split("")
//     .filter((element) => stringOne.includes(element))
//     .join("").length === stringTwo.length;

// const scramble = (stringOne, stringTwo) => {
//   const stringArr = stringTwo.split("").filter((element) => stringOne.includes(element)).join("")
//   return stringArr.length === stringTwo.length
// };

// const scramble = (stringOne, stringTwo) => {
//   const cleanStringOne = stringOne.split("").sort().join("");
//   const cleanStringTwo = stringOne.split("").sort().join("");

//   let result = [];
//   for (let index = 0; index < cleanStringTwo.length; index++) {
//     const element = cleanStringTwo[index];
//     if (cleanStringOne.includes(element)) {
//       result.push(element);
//     }
//     if (result.length === cleanStringTwo.length) {
//       break;
//     }
//   }
//   return result.length === cleanStringTwo.length;
// };

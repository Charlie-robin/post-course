// Create two functions to encode and then decode a string using the Rail Fence Cipher.
//  This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".
//  First start off moving diagonally and down. When you reach the bottom,
//  reverse direction and move diagonally and up until you reach the top rail.
//  Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C
//     A       I       V       D       E       N
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN

const createRailObj = (string, numberRails) => {
  const stringArray = string.split("");
  let railObj = {};
  let counter = 0;
  let reverse = false;
  for (let index = 0; index < stringArray.length; index++) {
    railObj[counter] === undefined
      ? (railObj[counter] = stringArray[index])
      : (railObj[counter] += stringArray[index]);

    if (counter === numberRails - 1) {
      reverse = true;
    } else if (counter === 0 && reverse) {
      reverse = false;
    }
    reverse ? counter-- : counter++;
  }
  return railObj;
};

const encodeRailFenceCipher = (string, numberRails) =>
  Object.values(createRailObj(string, numberRails)).join("");


const decodeRailFenceCipher = (string, numberRails) => {
  const stringArray = string.split("");
  const railLength = createRailObj(string, numberRails);
  const railFilter = {};
  const railObj = {};
  let startNum = 0;
  let endNum;

  for (let key in railLength) {
    endNum = startNum + railLength[key].length;
    railFilter[key] = [
      ...stringArray.filter(
        (element, index) => index >= startNum && index < endNum
      ),
    ];
    startNum = endNum;
  }

  for (let key in railFilter) {
    const endRail = (numberRails - 1).toString();
    let keyNum = parseInt(key);
    switch (key) {
      case "0": {
        console.log(railFilter[key]);
        railFilter[key].forEach((element, index) => {
          index === 0
            ? (railObj[index] = element)
            : (railObj[index * (numberRails + 1)] = element);
        });
        break;
      }
      case endRail: {
        railFilter[key].forEach((element, index) => {
          index == 0
            ? (railObj[keyNum] = element)
            : (railObj[index * (numberRails + 1) + keyNum] = element);
        });
        break;
      }
      default: {
        railFilter[key].forEach((element, index) => {
          index == 0
            ? (railObj[keyNum] = element)
            : (railObj[index * 2 + keyNum] = element);
        });
        break;
      }
    }
  }

  return Object.values(railObj).join("");
};

console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));
// console.log(encodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));

//WEAREDISCOVEREDFLEEATONCE = 25 * numberofrails

// WECRLTE
// ERDSOEEFEAOC
// AIVDEN

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C
//     A       I       V       D       E       N

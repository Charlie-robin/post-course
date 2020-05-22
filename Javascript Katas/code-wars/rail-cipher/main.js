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

const encodeRailFenceCipher = (string, numberRails) => {
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
  return Object.values(railObj).join("");
};
// console.log(encodeRailFenceCipher("hellohello", 3));
// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// // WECRLTEERDSOEEFEAOCAIVDEN

function decodeRailFenceCipher(string, numberRails) {
  const stringArray = string.split("");
  const value = numberRails * 2 - 3;
  const topValues = Math.ceil(stringArray.length / (value + 1));
  const secondLayer = Math.floor(stringArray.length / (value - 2));
  console.log(secondLayer);
}

console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));

//WEAREDISCOVEREDFLEEATONCE = 25 * numberofrails

// WECRLTE
// ERDSOEEFEAOC
// AIVDEN

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C   a
//     A       I       V       D       E       N

const calcRailWidth = (string, railsNum) => {
  const length = string.length;
  const cycle = railsNum * 2 - 2;
  return Math.floor(length / cycle) * cycle + (len % cycle);
};

const buildRails = (string, railsNum) => {
  const width = calcRailWidth(string, railsNum);
  const rails = [];
  for (let i = 0; i < railsNum; i++) rails.push(Array(width));
  return rails;
};

const decodeRailFenceCipher = (string, railsNum) => {
  const rails = buildRails(string, railsNum);

  // Fill the rails with fake value '-'
  iterateRailsDiagonally(rails, (x, y) => (rails[y][x] = "-"));

  const strArray = Array.from(string);
  iterateRailsValues(rails, (x, y) => (rails[y][x] = strArray.shift()));

  let re = "";
  iterateRailsDiagonally(rails, (x, y, val) => (re += val));
  return re;
};

// For cycle explanation see here:
// https://en.wikipedia.org/wiki/Rail_fence_cipher

/*
 * Iterate the rails diagonally. The order is like below:
 *
 *     1   5   9
 *      2 4 6 8
 *       3   7
 */
function iterateRailsDiagonally(rails, callback) {
  const width = rails[0].length;
  const height = rails.length;

  let x = 0;
  let y = 0;
  let yDir;

  while (x < width) {
    callback(x, y, rails[y][x]);

    x += 1;

    if (!yDir) {
      yDir = 1;
    } else if (y === 0 || y === height - 1) {
      yDir = yDir * -1;
    }
    y += yDir;
  }
}

/*
 * Iterate the rails values. The order is like below:
 *
 *     1   2   3
 *      4 5 6 7
 *       8   9
 */
function iterateRailsValues(rails, callback) {
  for (let y = 0; y < rails.length; y++) {
    for (let x = 0; x < rails[y].length; x++) {
      if (rails[y][x] !== undefined) callback(x, y, rails[y][x]);
    }
  }
}

console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));

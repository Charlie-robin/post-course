class Cube {
  constructor() {}
  colors = [];
  tiles = [];
  faces = [];
  xAxis0 = [];
  xAxis1 = [];
  xAxis2 = [];
  yAxis0 = [];
  yAxis1 = [];
  yAxis2 = [];
  zAxis0 = [];
  zAxis1 = [];
  zAxis2 = [];

  colorCreator = (numNeeded) => {
    for (let index = 0; index < numNeeded; index++) {
      this.colors.push("white", "yellow", "orange", "red", "green", "blue");
    }
  };

  shuffleColors = () => {
    const colors = this.colors;
    for (let index = colors.length - 1; index > 0; index--) {
      const randomNumber = Math.floor(Math.random() * (index + 1));
      [colors[index], colors[randomNumber]] = [
        colors[randomNumber],
        colors[index],
      ];
    }
  };

  createFaces = (numberNeeded) => {
    for (let index = 0; index < numberNeeded; index++) {
      const startNum = index * numberNeeded;
      const endNum = startNum + 9;
      this.faces.push(this.colors.slice(startNum, endNum));
    }
  };

  createXAxisArrays = () => {
    this.faces.forEach((element, index) => {
      if (index <= 3) {
        this.xAxis0.push(...element.filter((element, index) => index <= 2));
        this.xAxis1.push(
          ...element.filter((element, index) => index >= 3 && index <= 5)
        );
        this.xAxis2.push(...element.filter((element, index) => index > 5));
      }
    });
  };

  createYAxisArrays = () => {
    this.faces.forEach((element, index) => {
      const indexNeeded = [1, 3, 4, 5];
      const sliceOne = [0, 3, 6];
      const sliceTwo = [1, 4, 7];
      const sliceThree = [2, 5, 8];
      if (indexNeeded.includes(index)) {
        this.yAxis0.push(
          ...element.filter((element, index) => sliceOne.includes(index))
        );
        this.yAxis1.push(
          ...element.filter((element, index) => sliceTwo.includes(index))
        );
        this.yAxis2.push(
          ...element.filter((element, index) => sliceThree.includes(index))
        );
      }
    });
  };

  createZAxisArrays = () => {
    this.faces.forEach((element, faceIndex) => {
      const indexNeeded = [0, 4, 2, 5];
      let sliceOne, sliceTwo, sliceThree;
      if (indexNeeded.includes(faceIndex)) {
        switch (faceIndex) {
          case 0: {
            sliceOne = [0, 3, 6];
            sliceTwo = [1, 4, 7];
            sliceThree = [2, 5, 8];
            break;
          }
          case 2: {
            sliceOne = [2, 5, 8];
            sliceTwo = [1, 4, 7];
            sliceThree = [2, 5, 8];
            break;
          }
          case 4: {
            sliceOne = [1, 2, 3];
            sliceTwo = [1, 4, 7];
            sliceThree = [2, 5, 8];
            break;
          }
          case 5: {
            sliceOne = [7, 8, 9];
            sliceTwo = [1, 4, 7];
            sliceThree = [2, 5, 8];
            break;
          }
        }
        this.zAxis0.push(
          ...element.filter((element, index) => sliceOne.includes(index))
        );
        this.zAxis1.push(
          ...element.filter((element, index) => sliceTwo.includes(index))
        );
        this.zAxis2.push(
          ...element.filter((element, index) => sliceThree.includes(index))
        );
      }
    });
  };

  init = () => {
    this.colorCreator(9);
    this.shuffleColors();
    this.createFaces(6);
    this.createYAxisArrays();
    this.createXAxisArrays();
  };
}

const test = new Cube();
test.init();

console.log(test);

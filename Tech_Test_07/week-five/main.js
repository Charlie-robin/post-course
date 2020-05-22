class Cube {
  constructor() {}
  colors = [];
  faces = [];
  initFaces = [];
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

  createInitFaces = (numberNeeded) => {
    for (let index = 0; index < numberNeeded; index++) {
      const startNum = index * numberNeeded;
      const endNum = startNum + 9;
      this.initFaces.push(this.colors.slice(startNum, endNum));
    }
  };

  createXAxisArrays = () => {
    this.initFaces.forEach((element, index) => {
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
    this.initFaces.forEach((element, index) => {
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
    this.initFaces.forEach((element, faceIndex) => {
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
            sliceThree = [0, 3, 6];
            break;
          }
          case 4: {
            sliceOne = [0, 1, 2];
            sliceTwo = [3, 4, 5];
            sliceThree = [6, 7, 8];
            break;
          }
          case 5: {
            sliceOne = [6, 7, 8];
            sliceTwo = [3, 4, 5];
            sliceThree = [0, 1, 2];
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

  shiftArray = (arrayToShift) => {
    const arrCopy = [...this[arrayToShift]];
    const firstThree = arrCopy.filter((element, index) => index < 3);
    const restArray = arrCopy.filter((element, index) => index > 2);
    this[arrayToShift] = [...restArray, ...firstThree];
  };

  constructFaces = (numNeeded) => {
    //horizontalchange
    for (let index = 0; index < numNeeded; index++) {
      const startNum = index * 3;
      const endNum = startNum + 3;
      this.faces.push([
        ...this.xAxis0.slice(startNum, endNum),
        ...this.xAxis1.slice(startNum, endNum),
        ...this.xAxis2.slice(startNum, endNum),
        initFaces[]
      ]);

    }
  };

  init = () => {
    this.colorCreator(9);
    this.shuffleColors();
    this.createInitFaces(6);
    this.createYAxisArrays();
    this.createXAxisArrays();
    this.createZAxisArrays();
    this.constructFaces(4);
  };
}

const test = new Cube();
test.init();

// console.log(test);

console.log(test.faces);
console.log(test.xAxis0);

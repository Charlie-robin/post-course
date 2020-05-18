class Cube {
  constructor() {}
  colors = [];
  tiles = [];
  faces = [];
  xAxis0 = [];
  xAxis1 = [];
  xAxis2 = [];
  yAxis0 = [];
  xAxis1 = [];
  xAxis2 = [];

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
        this.xAxis1.push(
          ...element.filter((element, index) => sliceTwo.includes(index))
        );
        this.xAxis2.push(
          ...element.filter((element, index) => sliceThree.includes(index))
        );
      }
    });

    createZAxisArrays = () => {
      this.faces.forEach((element, index) => {
        const indexNeeded = [0, 2, 4, 5];
        const sliceOne = [0, 3, 6];
        const sliceTwo = [1, 4, 7];
        const sliceThree = [2, 5, 8];
        if (indexNeeded.includes(index)) {
          this.yAxis0.push(
            ...element.filter((element, index) => sliceOne.includes(index))
          );
          this.xAxis1.push(
            ...element.filter((element, index) => sliceTwo.includes(index))
          );
          this.xAxis2.push(
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

console.log(test.yAxis0, "topslice");
console.log(test);

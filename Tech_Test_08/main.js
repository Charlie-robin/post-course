class Calculator {
  constructor(value) {
    this.value = value;
  }

  cleanString = (string) => string.replace(/,|\[|\]/g, " ");

  throwMinusError = () => "Negative Numbers are not Supported";

  checkMultiCharDelimiter = () => this.value.includes("[", "]");

  checkFirstCharDelimiter = () =>
    Number.isInteger(parseInt(this.value.charAt(0)));

  calculateCleanString = (cleanString) =>
    cleanString
      .filter((element) => element && element !== " ")
      .reduce((prev, cur) => parseInt(prev) + parseInt(cur));

  getMultiLineDelimiters = () => {
    const valueArr = this.value.split("");
    const lastMultiDelimiter = valueArr.lastIndexOf("]");
    return valueArr
      .slice(0, lastMultiDelimiter)
      .join("")
      .replace(/,|\[|\]/g, "")
      .split("");
  };

  getValuesMinusDelimiters = () => {
    const valueArr = this.value.split("");
    const lastMultiDelimiter = valueArr.lastIndexOf("]") + 1;
    return valueArr.slice(lastMultiDelimiter).join("");
  };

  calculateValue = () => {
    let result;
    let delimiter = this.checkFirstCharDelimiter() ? " " : this.value.charAt(0);
    let valueMinusDelimiters = this.getValuesMinusDelimiters();

    if (this.value.includes("-")) {
      return this.throwMinusError();
    } else if (!parseInt(this.value) && delimiter === " ") {
      return 0;
    } else if (this.checkMultiCharDelimiter()) {
      delimiter = this.getMultiLineDelimiters();
      result = valueMinusDelimiters
        .split("")
        .map((element) => (delimiter.includes(element) ? " " : element))
        .join("")
        .split(" ")
        .filter((element) => element.length < 4);
      return this.calculateCleanString(result);
    } else {
      result = this.cleanString(this.value)
        .split(delimiter)
        .filter((element) => element.length < 4);
      console.log(result);
      return result.length <= 1
        ? parseInt(result)
        : this.calculateCleanString(result);
    }
  };
}

const test = new Calculator("5555 95");
console.log(test.calculateValue());

//How do you print the first non-repeated character from a string?

export const printFirstNonRepeat = (string) =>
  string
    .split("")
    .filter(
      (element, index, array) =>
        array.indexOf(element) === array.lastIndexOf(element)
    )[0];

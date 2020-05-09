// How do you print duplicate characters from a string?

export const findDuplicates = (string) =>
  string
    .split("")
    .filter((element, index, array) => array.indexOf(element) !== index)
    .filter((element, index, array) => array.indexOf(element) === index);

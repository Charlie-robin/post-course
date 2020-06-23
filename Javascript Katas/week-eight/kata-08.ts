// How do you print duplicate characters from a string?

export const findDuplicates = (string) => [
  ...new Set(
    string
      .split("")
      .filter(
        (letter, index, array) =>
          array.lastIndexOf(letter) !== array.indexOf(letter)
      )
  ),
];

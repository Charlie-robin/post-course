// How can a given string be reversed using recursion?


export const reverseWithRecursion = (string) =>
  string === ""
    ? ""
    : reverseWithRecursion(string.substr(1)) + string.charAt(0);

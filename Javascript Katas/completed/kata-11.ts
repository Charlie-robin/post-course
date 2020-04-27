// How do you check if a given string is a palindrome?

const reverseString = (string) =>
  string.split("").reverse().join("");

const cleanString = (string) => {
  const regexPattern =  /[^A-Za-z0-9]/g;
   return string.toLowerCase().replace(regexPattern, "")
}

export const palindrome = (string) => cleanString(string) === reverseString(cleanString(string));




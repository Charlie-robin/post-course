// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//  Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
const punctuation = [".", ",", ":", "!", "?"];

const pigifyWord = (string) => {
  const pigifyWord = string.split("").slice(1);
  pigifyWord.push(string.charAt(0) + "ay");
  return pigifyWord.join("");
};

const pigIt = (string) =>
  string
    .split(" ")
    .map((element) =>
      punctuation.includes(element) ? element : pigifyWord(element)
    )
    .join(" ");

console.log(pigIt("O tempora o mores !"));

// You should 'pig' "O tempora o mores !" - Expected: 'Oay emporatay oay oresmay !', instead got: 'Oay emporatay oay oresmay !ay'

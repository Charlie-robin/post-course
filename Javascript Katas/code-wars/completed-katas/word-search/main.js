// Write a function called wordsearch that takes in two arguments: a sentence and a word.
// The function returns the number of times that word is found in that sentence.
// For example if I used "The cat in the hat" and "the", the function would return 2.

const sentenceToArray = (sentence) => sentence.toLowerCase().split(" ");

const wordSearch = (word, sentence) => sentenceToArray(sentence).filter((element) => element === word).length;
  
console.log(wordSearch("the", "The cat in the hat hat hat hat the the the"));

// Extension: Create another function that returns a summary object for the sentence e.g.

const wordSummary = (sentence) => {
  let sentenceSummaryObj = {};
  sentenceToArray(sentence).forEach((element) => (sentenceSummaryObj[element] = 0));
  sentenceToArray(sentence).forEach((element) => (sentenceSummaryObj[element] += 1));
  return sentenceSummaryObj;
};

console.log(wordSummary("The cat in the hat hat hat hat the the the"));

// How do you find all permutations of a string?

export const allPermutations = (string) => {
    const results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    string.split("")
      .forEach((firstChar, index) => {
        const charsLeft = string.substring(0, index) + string.substring(index + 1);
        
        allPermutations(charsLeft)
          .forEach((permutation) => {
            results.push(firstChar + permutation);
          });
      });

    return results;
}

console.log(allPermutations("abc"));


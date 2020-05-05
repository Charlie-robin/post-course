const list = (names) => {
  const copy = names.map((element) => element.name);
  const slice = [...copy].reverse().slice(0, 2).reverse().join(" & ");
  const restArr = [...copy].reverse().slice(2).reverse();
  return [...restArr, slice].join(", ");
};

const test = list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);

console.log(test);

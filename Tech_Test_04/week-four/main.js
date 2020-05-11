async function fetchList() {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api/list"
  )
    .then((result) => result.json())
    .then((result) => {
      const objArray = displayProducts(result.products);
      document.getElementById("target").innerHTML = cardCreator(objArray).join("");
    })
    .catch((error) => console.log(error));
}

const displayProducts = (productObj) => Object.entries(productObj);
const cardCreator = (productArray) =>
  productArray.map(
    (element) =>
      `<p classname="general-card" onclick='fetchById("${element[0]}")'>${element[1]}</p>`
  );

async function fetchById(id) {
  const query = `/info?id=${id}`;
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api${query}`
  )
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
}

// //  "singletravel": {
//     "name": "Single-Trip Travel Insurance",
//     "description": "Worldwide travel insurance, single-trip",
//     "type": "travel",
//     "suppliers": [
//         "Insuria Travel",
//         "Happy Camper UK Ltd"
//     ]
// }

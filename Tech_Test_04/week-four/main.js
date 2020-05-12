const mockDataList = {
  products: {
    combgap: "Combined GAP",
    smart: "SMART",
    annualtravel: "Annual Multi-Trip Travel Insurance",
    singletravel: "Single-Trip Travel Insurance",
    buildcont: "Buildings & Contents Insurance",
    income: "Income Protection",
    car: "Car Insurance",
  },
};

const mockDataProduct = {
  singletravel: {
    name: "Single-Trip Travel Insurance",
    description: "Worldwide travel insurance, single-trip",
    type: "travel",
    suppliers: ["Insuria Travel", "Happy Camper UK Ltd"],
  },
};

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
      `<div class="general-card"><p onclick='fetchById("${element[0]}")'>${element[1]}</p></div>`
  );

async function fetchById(id) {
  const query = `/info?id=${id}`;
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api${query}`
  )
    .then((result) => result.json())
    .then((result) => {
      loadProductModal(mockDataProduct);
    })
    .catch((error) => console.log(error));
}

const loadProductModal = (obj) => {
  document.getElementById(
    "modal"
  ).innerHTML = `<section class="modal" onclick="clearProductModal()">
<div>
  <h3>${obj.name}</h3>
  <p>${obj.description}</p>
  <p>${obj.suppliers}</p>
</div>
<div id='side'>
  <p>${obj.type}</p>
</div>
</section>`;
};

const clearProductModal = () => (document.getElementById("modal").innerHTML = null);

// MOCK DATA

const mockFetchById = () => loadProductModal(mockDataProduct.singletravel);

const mockCardCreator = (productArray) =>
  productArray.map(
    (element) => `<div class="general-card" onclick='mockFetchById()'><p>${element[1]}</p></div>`
  );

const loadMockData = () => {
  const objArray = displayProducts(mockDataList.products);
  document.getElementById("target").innerHTML = mockCardCreator(objArray).join("");
};

loadMockData();

// //  "singletravel": {
//     "name": "Single-Trip Travel Insurance",
//     "description": "Worldwide travel insurance, single-trip",
//     "type": "travel",
//     "suppliers": [
//         "Insuria Travel",
//         "Happy Camper UK Ltd"
//     ]
// }

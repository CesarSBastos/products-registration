const products = [
  {
    id: 1,
    name: "Laptop",
    description: "This is a laptop",
    price: 1000,
    category: 1,
    promotion: true,
    new: true,
  },
  {
    id: 2,
    name: "Phone",
    description: "This is a phone",
    price: 500,
    category: 2,
    promotion: false,
    new: false,
  },
  {
    id: 3,
    name: "Tablet",
    description: "This is a tablet",
    price: 800,
    category: 1,
    promotion: true,
    new: true,
  },
  {
    id: 4,
    name: "Headphone",
    description: "This is a headphone",
    price: 100,
    category: 3,
    promotion: false,
    new: false,
  },
  {
    id: 5,
    name: "Keyboard",
    description: "This is a keyboard",
    price: 50,
    category: 3,
    promotion: false,
    new: true,
  },
  {
    id: 6,
    name: "Mouse",
    description: "This is a mouse",
    price: 20,
    category: 3,
    promotion: false,
    new: true,
  },
  {
    id: 7,
    name: "Monitor",
    description: "This is a monitor",
    price: 300,
    category: 1,
    promotion: true,
    new: false,
  },
  {
    id: 8,
    name: "Camera",
    description: "This is a camera",
    price: 400,
    category: 4,
    promotion: false,
    new: true,
  },
  {
    id: 9,
    name: "Printer",
    description: "This is a printer",
    price: 200,
    category: 3,
    promotion: true,
    new: false,
  },
  {
    id: 10,
    name: "Scanner",
    description: "This is a scanner",
    price: 150,
    category: 3,
    promotion: false,
    new: true,
  },
  {
    id: 11,
    name: "Speaker",
    description: "This is a speaker",
    price: 80,
    category: 3,
    promotion: false,
    new: true,
  },
];

const categories = [
  {
    id: 1,
    name: "Produção Própria",
  },
  {
    id: 2,
    name: "Nacional",
  },
  {
    id: 3,
    name: "Importado",
  },
];

loadProducts();

function loadProducts() {
  for (let product of products) {
    addNewRow(product);
  }
}

function addNewRow(product) {
  const table = document.getElementById("tableProducts");
  const row = table.insertRow(-1);
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const getCategory = categories.find(
    (category) => category.id === product.category
  );
  const categoryName = getCategory ? getCategory.name : "Unknown";

  const idNode = document.createTextNode(product.id);
  const nameNode = document.createTextNode(product.name);
  const descriptionNode = document.createTextNode(product.description);
  const priceNode = document.createTextNode(formattedPrice);
  const categoryNode = document.createTextNode(categoryName);

  let optionInnerHTML = "";
const badgeTypes = [
    { condition: product.promotion, className: "badge text-bg-success", text: "P" },
    { condition: product.new, className: "badge text-bg-primary", text: "N" },
];

optionInnerHTML = badgeTypes
    .filter(badge => badge.condition)
    .map(badge => `<span class="${badge.className}">${badge.text}</span>`)
    .join(' ');

  row.insertCell().appendChild(idNode);
  row.insertCell().appendChild(nameNode);
  row.insertCell().appendChild(descriptionNode);
  row.insertCell().appendChild(priceNode);
  row.insertCell().appendChild(categoryNode);
  row.insertCell().innerHTML = `${optionInnerHTML}`;  
}

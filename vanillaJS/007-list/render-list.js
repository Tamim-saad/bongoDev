const listContainer = document.getElementById('list');
const showListBtn = document.getElementById('show-list-btn');

const productList = ['pen', 'paper', 'rice', 'soap', 'oil'];

showListBtn.addEventListener('click', () => {
  clearAll();
  renderList();
});

const clearAll = () => {
  listContainer.innerHTML = '';
};

const renderList = () => {
  // productList.forEach((product) => {
  //   const listItem = generateListItem(product);
  //   listContainer.appendChild(listItem);
  // });
  const listItems = productList.map((product, index) =>
    generateListItem(product, index)
  );
  listContainer.append(...listItems);
};

const generateListItem = (product, index) => {
  const listItem = document.createElement('li');

  const productContainer = document.createElement('div');
  productContainer.className =
    'flex border border-green-500 py-4 px-40 justify-center mb-2';

  if (index % 2 === 1) {
    productContainer.classList.add('bg-gray-200');
  }

  productContainer.innerText = product;

  listItem.appendChild(productContainer);

  return listItem;
};

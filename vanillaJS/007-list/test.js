const listContainer = document.getElementById('list');
const showListBtn = document.getElementById('show-list-btn');
const addItemBtn = document.getElementById('add-list-item');
const inputItem = document.getElementById('input-item');

const productList = ['pen', 'paper', 'rice', 'soap', 'oil'];

addItemBtn.addEventListener('click',()=>{
  if(inputItem.value !== '')
  {
    const newItem = inputItem.value;
    const listItem = document.createElement('li');
    productList.push(newItem);
    inputItem.value = '';
    showListBtn.click();

    // listItem.innerText = newItem;
    // listContainer.appendChild(listItem);
  }
});


showListBtn.addEventListener('click', () =>{
  clearAll();
  generateList();
});

const clearAll = () =>{
  listContainer.innerHTML = '';
};

const generateList = () =>{
  // productList.forEach((product) => 
  // {
  //   listItem = createListItem(product);
  //   listContainer.appendChild(listItem);
  // });
  const listItems = productList.map((product,index) => createListItem(product,index));
  listContainer.append(...listItems);
};

const createListItem = (product,index)  =>{
  const listItem= document.createElement('li');
  const productContainer = document.createElement('div');
  productContainer.innerText = product;

  productContainer.className = 'gap-40 flex-center border border-green-500 py-4 px-4 justify-content wd-400';

  if(index%2 === 1)
  {
    productContainer.classList.add('bg-gray-200');
  }

  listItem.appendChild(productContainer);
  return listItem;
}
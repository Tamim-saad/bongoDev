"use strict";
const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://via.placeholder.com/150',
    categories: ['Laptops', 'Gaming'],
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 50,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 100,
    image: 'https://via.placeholder.com/150',
    categories: ['Accessories', 'Peripherals'],
  },
  {
    id: 4,
    name: 'External Hard Drive',
    price: 120,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 5,
    name: 'Graphics Card',
    price: 500,
    image: 'https://via.placeholder.com/150',
    categories: ['Components', 'Gaming'],
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 200,
    image: 'https://via.placeholder.com/150',
    categories: ['Storage', 'Accessories'],
  },
  {
    id: 7,
    name: 'Gaming Monitor',
    price: 300,
    image: 'https://via.placeholder.com/150',
    categories: ['Monitors', 'Gaming'],
  },
  {
    id: 8,
    name: 'All-in-One Printer',
    price: 150,
    image: 'https://via.placeholder.com/150',
    categories: ['Peripherals', 'Printers'],
  },
];

let cart = [];

function getProductImage(product) {
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.classList.add('w-full', 'mb-4');
  return productImage;
}

function getProductName(product) {
  const productName = document.createElement('h1');
  productName.innerText = product.name;
  productName.classList.add('text-lg', 'font-semibold');
  return productName;
}

function getProductPrice(product) {
  const productPrice = document.createElement('p');
  productPrice.textContent = `${product.price}`;
  productPrice.classList.add('text-gray-700');
  return productPrice;
}


function removeProductFromCart(productId) {
  const productIndex = cart.findIndex((product) => product.id === productId);
  cart.splice(productIndex, 1);
  renderCart();
}


function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach((product) => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerText = `${product.name}-$${product.price}x${1}`;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('text-red-500', 'ml-2');
    removeBtn.addEventListener('click', () => {
      removeProductFromCart(product.id);
    });

    cartItemElement.appendChild(removeBtn);
    cartList.appendChild(cartItemElement);
  });
};


function getAddToCartButton(product) {
  const addToCartButton = document.createElement('button');
  addToCartButton.innerText = 'Add to Cart';
  addToCartButton.classList.add(
    'bg-blue-500',
    'hover-bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'mt-2'
  );

  function isProductExistInCart(productId) {
    return (cart.findIndex((product) => product.id === productId)) !== -1;
    //!==1 indicates that the condition in the parenthesis not applicable
  }

  addToCartButton.addEventListener('click', () => {
    if (isProductExistInCart(product.id)) {
      alert('This product is already in the cart');
      return;
    }
    cart.push(product);
    renderCart();
  })
  return addToCartButton;
}



function getProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('bg-red', 'p-4', 'rounded', 'shadow');

  const productImageElement = getProductImage(product);
  card.appendChild(productImageElement);

  const productNameElement = getProductName(product);
  card.appendChild(productNameElement);

  const productPriceElement = getProductPrice(product);
  card.appendChild(productPriceElement);

  const addToCartButton = getAddToCartButton(product);
  card.appendChild(addToCartButton);

  return card;
}

let selectedCategory = null;

function renderProducts() {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = '';

  let categorizedProduct = products;
  if (selectedCategory) {
    categorizedProduct = products.filter((product) => {
      return product.categories.includes(selectedCategory);
    }
    );
  }

  categorizedProduct.forEach((product) => {
    const card = getProductCard(product);
    productContainer.appendChild(card);
  }
  );
}

function getProductCategories() {
  return [...new Set(products.map((product) => product.categories).flat())];
}

function renderCategories() {
  const categoryContainer = document.getElementById('category-filters');
  categoryContainer.innerHTML = '';

  const categories = getProductCategories();
  categories.forEach((category) => {
    const categoryBtn = document.createElement('button');
    categoryBtn.innerText = category;
    categoryBtn.classList.add(
      'bg-gray-200',
      'hover-bg-gray-300',
      'text-gray-800',
      'font-semibold',
      'py-2',
      'px-4',
      'rounded',
      'mt-2'
    );
    categoryBtn.addEventListener('click', () =>{
      selectedCategory = category;
      renderProducts();
    });

    categoryContainer.appendChild(categoryBtn);
  });
}

const clearFilterBtn = document.getElementById('clear-filters-btn');
clearFilterBtn.addEventListener('click', ()=>{
  selectedCategory=null;
  renderProducts();
})


renderCategories();
renderProducts();
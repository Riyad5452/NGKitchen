document.addEventListener('DOMContentLoaded', function () {
  
  document.getElementById('dropdownToggle').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
  });
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  document.querySelectorAll('.cart').forEach(cart => {
    cart.addEventListener('click', () => {
      document.getElementById('cart-hidden').classList.toggle('hidden');
    });
  });

  
  document.body.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('order-btn')) {
      const card = event.target.closest('.swiper-slide, .card-item');
      const title = card.querySelector('h1').textContent;
      const description = card.querySelector('p').textContent;
      const imageSrc = card.querySelector('img').src;

      const newCartItem = createCartItem(title, description, imageSrc);
      const cartItemsContainer = document.getElementById('cart-items');
      cartItemsContainer.appendChild(newCartItem);
      document.getElementById('cart-hidden').classList.remove('hidden'); // Show cart when item is added
    }
  });


  function createCartItem(title, description, imageSrc) {
    const item = document.createElement('div');
    item.className = 'cart-item text-center mt-4 p-4  border rounded-lg shadow-md mb-4';
    item.innerHTML = `
      <img src="${imageSrc}" alt="Order Image" class="mb-4" />
      <h1 class="text-2xl font-bold mb-2">${title}</h1>
      <p class="mb-4">${description}</p>
    `;
    return item;
  }
});



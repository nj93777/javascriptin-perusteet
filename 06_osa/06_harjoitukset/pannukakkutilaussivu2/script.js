document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.form-container');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const typeSelect = document.querySelector('#type');
  const button = document.querySelector('button');
  const orderManager = new OrderManager();

  const updatePriceBanner = () => {
    const totalPriceBanner = document.querySelector('#totalPriceBanner');
    const priceBanner = document.querySelector('.price-banner');

    const selectedType = {
      type: typeSelect.selectedOptions[0].text.split(' - ')[0],
      price: parseInt(typeSelect.value)
    };
    const toppings = [];
    const extras = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const item = {
          name: checkbox.dataset.name,
          price: parseInt(checkbox.value)
        };
        if (checkbox.dataset.category === 'toppings') {
          toppings.push(item);
        } else {
          extras.push(item);
        }
      }
    });

    const order = new Order('', selectedType, toppings, extras);
    const total = order.calculateTotalPrice();

    totalPriceBanner.textContent = `${total}€`;

    priceBanner.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: 'scale(1)' },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  };

  const displayOrder = () => {
    const customerName = document.querySelector('#customerName').value;
    const orderType = document.querySelector('#order_type');
    const orderToppings = document.querySelector('#order_toppings');
    const orderExtras = document.querySelector('#order_extras');
    const orderName = document.querySelector('#order_name');
    const totalPriceElement = document.querySelector('#totalPrice');

    const selectedType = {
      type: typeSelect.selectedOptions[0].text.split(' - ')[0],
      price: parseInt(typeSelect.value)
    };
    const toppings = [];
    const extras = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const item = {
          name: checkbox.dataset.name,
          price: parseInt(checkbox.value)
        };
        if (checkbox.dataset.category === 'toppings') {
          toppings.push(item);
        } else {
          extras.push(item);
        }
      }
    });

    const order = new Order(customerName, selectedType, toppings, extras);
    const total = order.calculateTotalPrice();

    orderType.textContent = order.pancakeType.type;
    orderToppings.textContent = order.toppings.map(t => t.name).join(', ');
    orderExtras.textContent = order.extras.map(e => e.name).join(', ');
    orderName.textContent = order.customerName;
    totalPriceElement.textContent = `${total}€`;

    // Add the order to the OrderManager and update the order list display
    orderManager.addOrder(order);
  };

  form.addEventListener('change', updatePriceBanner);
  button.addEventListener('click', displayOrder);
});

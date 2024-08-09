document.addEventListener('DOMContentLoaded', () => {
    const orderManager = new OrderManager();
    const orderList = document.querySelector('#orderList');
  
    const availableToppings = [
      { name: 'Pähkinät', price: 1 },
      { name: 'Banaani', price: 1 },
      { name: 'Siirappi', price: 1 }
    ];
  
    const availableExtras = [
      { name: 'Kermavaahto', price: 2 },
      { name: 'Jäätelö', price: 3 }
    ];
  
    const displayOrderList = () => {
      orderList.innerHTML = ''; // Clear the current list
  
      orderManager.getOrders().forEach((order, index) => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
          <p>Tilaaja: ${order.customerName}</p>
          <p>Tyyppi: ${order.pancakeType.type}</p>
          <p>Lisukkeet: ${order.toppings.map(t => t.name).join(', ')}</p>
          <p>Extrat: ${order.extras.map(e => e.name).join(', ')}</p>
          <p>Hinta: ${order.calculateTotalPrice()}€</p>
          <p id="order-status-${index}">Tila: ${order.isCompleted ? 'Valmis' : order.isCanceled ? 'Peruutettu' : 'Odottaa'}</p>
          <div class="button-container">
            <button onclick="toggleCompletion(${index})">${order.isCompleted ? 'Merkitse odottavaksi' : 'Merkitse valmiiksi'}</button>
            <button onclick="cancelOrder(${index})">Peruuta</button>
            <button onclick="editOrder(${index})">Muokkaa tilausta</button>
          </div>
          <div id="edit-section-${index}" class="edit-section">
            <h4>Muokkaa tilausta</h4>
            <label>
              Tyyppi:
              <select id="edit-type-${index}">
                <option value="5" ${order.pancakeType.type === 'Klassinen' ? 'selected' : ''}>Klassinen - 5€</option>
                <option value="6" ${order.pancakeType.type === 'Suklaa' ? 'selected' : ''}>Suklaa - 6€</option>
                <option value="7" ${order.pancakeType.type === 'Mustikka' ? 'selected' : ''}>Mustikka - 7€</option>
              </select>
            </label>
            <br>
            <h5>Lisukkeet</h5>
            ${availableToppings.map(t => `<label><input type="checkbox" data-index="${index}" data-category="toppings" data-name="${t.name}" value="${t.price}" ${order.toppings.some(ot => ot.name === t.name) ? 'checked' : ''}> ${t.name}</label>`).join('<br>')}
            <h5>Extrat</h5>
            ${availableExtras.map(e => `<label><input type="checkbox" data-index="${index}" data-category="extras" data-name="${e.name}" value="${e.price}" ${order.extras.some(oe => oe.name === e.name) ? 'checked' : ''}> ${e.name}</label>`).join('<br>')}
            <p id="edit-price-${index}">Uusi hinta: ${order.calculateTotalPrice()}€</p>
            <button onclick="saveEdit(${index})">Tallenna muutokset</button>
          </div>
        `;
        orderList.appendChild(orderItem);
      });
    };
  
    window.toggleCompletion = (index) => {
      orderManager.toggleOrderCompletion(index);
      displayOrderList();
    };
  
    window.cancelOrder = (index) => {
      orderManager.cancelOrder(index);
      displayOrderList();
    };
  
    window.editOrder = (index) => {
      const editSection = document.querySelector(`#edit-section-${index}`);
      editSection.classList.toggle('active');
    };
  
    window.saveEdit = (index) => {
      const checkboxes = document.querySelectorAll(`#edit-section-${index} input[type="checkbox"]`);
      const typeSelect = document.querySelector(`#edit-type-${index}`);
      const selectedType = {
        type: typeSelect.selectedOptions[0].text.split(' - ')[0],
        price: parseInt(typeSelect.value)
      };
      const updatedToppings = [];
      const updatedExtras = [];
  
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          const item = {
            name: checkbox.dataset.name,
            price: parseInt(checkbox.value)
          };
          if (checkbox.dataset.category === 'toppings') {
            updatedToppings.push(item);
          } else {
            updatedExtras.push(item);
          }
        }
      });
  
      const customerName = orderManager.getOrders()[index].customerName;
      const updatedOrder = new Order(customerName, selectedType, updatedToppings, updatedExtras);
      orderManager.updateOrder(index, updatedOrder);
      displayOrderList();
    };
  
    window.clearOrders = () => {
      orderManager.clearOrders();
      displayOrderList();
    };
  
    displayOrderList();
  });
  
  class Order {
    constructor(customerName, pancakeType, toppings, extras) {
      this.customerName = customerName;
      this.pancakeType = pancakeType; // { type: 'Klassinen', price: 5 }
      this.toppings = toppings; // [{ name: 'Pähkinät', price: 1 }]
      this.extras = extras; // [{ name: 'Kermavaahto', price: 2 }]
      this.isCompleted = false;
      this.isCanceled = false;
    }
  
    calculateTotalPrice() {
      let total = this.pancakeType.price;
      this.toppings.forEach(topping => {
        total += topping.price;
      });
      this.extras.forEach(extra => {
        total += extra.price;
      });
      return total;
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    removeTopping(toppingName) {
      this.toppings = this.toppings.filter(topping => topping.name !== toppingName);
    }
  
    addExtra(extra) {
      this.extras.push(extra);
    }
  
    removeExtra(extraName) {
      this.extras = this.extras.filter(extra => extra.name !== extraName);
    }
  
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
    }
  
    cancelOrder() {
      this.isCanceled = true;
    }
  }
  
  class OrderManager {
    constructor() {
      this.orders = this.loadOrders();
    }
  
    saveOrders() {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  
    loadOrders() {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      return orders.map(order => {
        const loadedOrder = new Order(order.customerName, order.pancakeType, order.toppings, order.extras);
        loadedOrder.isCompleted = order.isCompleted; 
        loadedOrder.isCanceled = order.isCanceled; 
        return loadedOrder;
      });
    }
  
    addOrder(order) {
      this.orders.push(order);
      this.saveOrders();
    }
  
    updateOrder(index, order) {
      this.orders[index] = order;
      this.saveOrders();
    }
  
    toggleOrderCompletion(index) {
      this.orders[index].toggleCompletion();
      this.saveOrders();
    }
  
    cancelOrder(index) {
      this.orders[index].cancelOrder();
      this.saveOrders();
    }
  
    clearOrders() {
      this.orders = [];
      this.saveOrders();
    }
  
    getOrders() {
      return this.orders;
    }
  }
  
  // Export OrderManager globally to ensure it is accessible in other scripts
  window.OrderManager = OrderManager;
  window.Order = Order;
  
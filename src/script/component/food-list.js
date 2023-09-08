import './food-item.js';

class FoodList extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = '';
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.food = food;
      this.shadowDom.appendChild(foodItemElement);
    });
  }

  renderError(message) {
    this.shadowDom.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    `;
    this.shadowDom.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('food-list', FoodList);

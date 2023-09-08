class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
            <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            }
            :host {
                display: block;
                margin: 50px 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .food-info {
                padding: 40px;
            }
            .food-pict {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            .food-info p {
                text-align: justify;
                line-height: 2;
            }
            </style>

            <img class="food-pict" src="${this._food.strMealThumb}" alt="Food Pict">
            <div class="food-info">
                <h2>Food Name: ${this._food.strMeal}</h2>
                <p><b>Category:</b> ${this._food.strCategory}</p>
                <p><b>Origin:</b> ${this._food.strArea}</p>
                <p><b>How to make:</b> <br> ${this._food.strInstructions}</p>
            </div>
        `;
  }
}

customElements.define('food-item', FoodItem);

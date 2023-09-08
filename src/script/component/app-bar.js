class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :host {
      display: block;
      margin: 0;
      background-image: url('https://i.ibb.co/0q0kwP3/header-fix.jpg');
      background-size: cover;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    h2 {
      padding: 20px;
      margin-left: 20px;
    }
    .transbox {
      background: rgba(0, 0, 0, 0.6);
    }
    .transbox img {
      width: 35px;
      display: inline-block;
      vertical-align: text-top;
      margin-right: 5px;
    }
    hr {
      border: 0.5px solid white;
      width: 95%;
      margin: auto;
      opacity: 0.3;
    }
    p {
      padding: 20px 100px 150px;
      text-align: justify;
    }
    h3 {
      padding: 100px 50px 0;
      text-align: center;
    }
    @media screen and (max-width: 550px) {
      p {
        padding: 50px;
      }
      hr {
        width: 80%;
      }
    }
    </style>

    <div class="transbox">
      <h2><img src="https://i.ibb.co/xzrtTzy/logo.png" alt="logo" />Laper Banget</h2>
      <hr>
      <h3>Looking for recipe?</h3>
      <p><b>Laper Banget</b> was made for you who are looking for delicious food recipes. Recipes from more than 30 countries are available here. You just need to type in the name of the food you want then click the search button and voilà! The recipe is in your hands. I hope that <b>Laper Banget</b> will improve your cooking experience so you can make delicious meals for everyone. Happy cooking~</p>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);

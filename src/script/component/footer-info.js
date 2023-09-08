class FooterInfo extends HTMLElement {
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
        .about {
            padding: 50px;
            text-align: center;
            background-color: #1a4d2e;
            color: white;
            box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.2);
          }
          
          .about a {
            color: wheat;
          }
          hr {
            width: 50%;
          }
        </style>

        <div class="about">
        <p>
          <b>Laper Banget</b> adalah sebuah aplikasi pencarian resep makanan berbasis web yang dibuat untuk memenuhi submission project pada kelas Belajar Fundamental Front-End Web Development di Dicoding. Aplikasi ini dibangun dengan memanfaatkan
          Web API <a href="https://www.themealdb.com/api.php">TheMealDB</a> dengan menggunakan konsep AJAX dalam menampilkan datanya, serta sudah menggunakan standar sintaks ES6 dalam penulisannya. Selain itu juga sudah menggunakan custom element dan menerapkan shadow
          DOM. Dalam pengembangannya dilakukan dengan bantuan module bundler, yaitu Webpack. Nama <b>Laper Banget</b> terinspirasi dari developer yang sedang kelaparan ketika sedang membangun aplikasi ini.
        </p><hr>
        <br /><br />
        <p>&#169; Created by Nashira Oksani Ardine Santosa</p>
      </div>
        `;
  }
}

customElements.define('footer-info', FooterInfo);

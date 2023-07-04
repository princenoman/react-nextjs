import { products } from "./data.js";

var list = document.getElementById("products");

products.forEach((product) => {
  var entry = document.createElement("div");
  entry.classList.add("card");
  entry.classList.add("g-2");
  entry.style.width = "18rem";
  entry.innerHTML = `
        <div class="card-body">
          <h5 class="card-title product_name">${product.name}</h5>
          <p class="card-text product_price">$${product.price}</p>
          <a href="#" class="btn btn-primary add_to_cart">
            Add to Cart
          </a>
        </div>
  `;

  list.appendChild(entry);
});

import { products } from "./data.js";

//Displaying all products
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
  //   entry.appendChild(document.createTextNode(product));
  return list.appendChild(entry);
});

//Individual Item total price
// var cartItemsTotalPrices =
//   document.getElementsByClassName("cart_items_total")[0];
// var quantityInputs = document.getElementsByClassName("cart_items_quantity");
// var total = 0;
// for (var i = 0; i < quantityInputs.length; i++) {
//   var input = quantityInputs[i];
//   console.log(input.value);
//   total = total + input.value * cartItemsTotalPrices.innerText;
//   cartItemsTotalPrices.innerText = total;
//   input.addEventListener("change", quantityChanged);
// }

{
  /* <button
type="button"
class="btn-close"
data-bs-dismiss="alert"
aria-label="Close"
></button> */
}

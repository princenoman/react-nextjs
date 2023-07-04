//Adding products in the cart

const addToCartBtns = document.getElementsByClassName("add_to_cart");
for (var i = 0; i < addToCartBtns.length; i++) {
  var button = addToCartBtns[i];
  button.addEventListener("click", addToCart);
}
function addToCart(event) {
  var button = event.target;
  var item = button.parentElement;
  var productName = item.getElementsByClassName("product_name")[0].innerText;
  var productPrice = item.getElementsByClassName("product_price")[0].innerText;
  addItemToCart(productName, productPrice);
  updateCartTotal();
}

function addItemToCart(productName, productPrice) {
  var cartRow = document.createElement("div");
  cartRow.innerText = productName;
  var cartItems = document.getElementsByClassName("cart_items")[0];
  var cartItemNames = document.getElementsByClassName("cart_item_name");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == productName) {
      alert("This Product is already added to cart.");
      return;
    }
  }

  var cartRowContents = `
            <div
              class="alert alert-warning alert-dismissible fade show d-flex justify-content-between cart_row"
              role="alert"
            >
              <strong class="cart_item_name">${productName}</strong>
              
              <div class="form-group ms-5 ps-5">
                <input class="form-control w-50 cart_items_quantity" type="number" value="1" />
              </div>
              <p class="card-text cart_price">${productPrice}</p>
              <p class="card-text cart_items_total">${productPrice}</p>
              <a class="remove_cart_item" style="cursor:pointer">X</a>
            
            </div>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("remove_cart_item")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart_items_quantity")[0]
    .addEventListener("change", quantityChanged);
}

//Remove Cart Item
const removeCartItemBtns = document.getElementsByClassName("remove_cart_item");

for (var i = 0; i < removeCartItemBtns.length; i++) {
  var button = removeCartItemBtns[i];
  button.addEventListener("click", removeCartItem);
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

// Update Cart Total Price
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart_items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart_row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart_price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart_items_quantity"
    )[0];

    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total_cart_price")[0].innerText =
    "$" + total;
}

//clearing the cart
const clearCartBtn = document.querySelector(".clear_cart");
clearCartBtn.addEventListener("click", clearCartItems);
function clearCartItems() {
  var cartItemContainer = document.getElementsByClassName("cart_items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart_row");
  var i = 0;
  while (cartRows.length > i) cartRows[i].remove();
  updateCartTotal();
}

//Update price according to quantity
var quantityInputs = document.getElementsByClassName("cart_items_quantity");
var cartItemsTotalPrices = document.getElementsByClassName("cart_items_total");
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  var input = event.target;
  var cartSingleTotalElement =
    input.parentElement.parentElement.getElementsByClassName(
      "cart_items_total"
    )[0];
  var cartSingleTotalPrice = parseFloat(
    cartSingleTotalElement.innerText.replace("$", "")
  );
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  cartSingleTotalElement.innerText = "$" + input.value * cartSingleTotalPrice;
  updateCartTotal();
}

function getMenuCardTemplate(index) {
    return `<div class="menu-card">
                <img src="#" alt="menu">
                <div class="menu-card-information">
                    <div class="menu-card-headline">
                        <p>${menuData[index].name}</p>
                        <p>${menuData[index].ingredients}</p>
                    </div>
                    <div class="menu-card-underline">
                        <p>${euroFormat.format(menuData[index].price)}</p>
                        <button class="menu-card-button" id="addToBasket" onclick="addToBasket(${menuData[index].id})">Add to basket</button>
                    </div>
                </div>
            <div>    
`}

function getBasketTemplate() {
    return `<div class="basket-wrapper">
                    <p class="basket-headline">Your Basket</p>
                    <div class="basket-items" id="basketItems">
                    </div>
                    </div>
                    <div class="basket-subtotal">
                        <p>Subtotal</p>
                        <p id="basket-subtotal"></p>
                    </div>
                    <div class="basket-delivery-fee">
                        <p>Delivery fee</p>
                        <p id="basket-delivery-fee"></p>
                    </div>
                    <div class="basket-total">
                        <p>Total</p>
                        <p id="basket-total"></p>
                    </div>
                    <button class="basket-buy-button" onclick="openOrderConfirmed()">Buy Now (<p id="basket-total-button"></p>)</button>
                </div>
`}

function getBasketMenuCardTemplate(index) {
    return `  <div class="basket-menu-card">
                    <div class="basket-menu-card-headline">
                        <p>${basket[index].name}</p>
                        <button class="trash-all-button" onclick="trashButton(${basket[index].id})">
                        </button>
                    </div>
                    <div class="basket-menu-card-underline">
                        <div class="basket-menu-card-buttons">
                            <button id="basket-menu-card-minus" onclick="minusButton(${basket[index].id})">-</button>
                            <p id="basket-menu-card-amount">${basket[index].quantity}</p>
                            <button id="basket-menu-card-plus" onclick="plusButton(${basket[index].id})">+</button>
                        </div>
                        <p id="basket-menu-card-price">${euroFormat.format(basket[index].price)}</p>
                    </div>
                </div>
`}

function getEmptyBasketTemplate() {
    return `<div class="basket-wrapper">
                <p class="basket-headline">Your Basket</p>
                <div class="basket-empty-text">
                    <p>Nothring here yet.</p>
                    <p>Go ahead and choose something<br>delicious!</p>
                </div>
                <div class="basket-empty-logo">
                    <img src="./assets/icons/basket-empty.png" alt="basket">
                </div>
            </div>
`}
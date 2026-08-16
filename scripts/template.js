function getMenuCardTemplate() {
    return `<div class="menu-card">
                <img src="#" alt="menu">
                <div class="menu-card-information">
                    <div class="menu-card-headline">
                        <p>${menuData.name}</p>
                        <p>${menuData.ingredients}</p>
                    </div>
                    <div class="menu-card-underline">
                        <p>${menuData.price}</p>
                        <button class="menu-card-button" id=${menuData.id}>Add to basket</button>
                    </div>
                </div>
            <div>    
`}

function getBasket() {
    return `<div class="basket-wrapper">
                    <p class="basket-headline">Your Basket</p>
                    <div class="basket-items">
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
                    <button class="basket-buy-button">Buy Now (<p id="basket-total-button"></p>)</button>
                </div>
`}

function getEmptyBasket() {
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
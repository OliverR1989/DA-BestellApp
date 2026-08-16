function renderMenuCard() {
    let menuCardRef = document.getElementById("menuCard");
    menuData.forEach(menu => {
        menuCardRef.innerHTML += getMenuCardTemplate();
    });
}
function renderBasket() {
    let basketRef = document.getElementById("basket");
    if(basket.length === 0) {
        basketRef.innerHTML = getEmptyBasket();
    }
}

function renderDeliveryFee() {
    document.getElementById("basket-delivery-fee").innerText = deliveryFee;
}

function renderBasketTotal() {
    document.getElementById("basket-total").innerHTML = basketTotal;
    document.getElementById("basket-total-button").innerHTML = basketTotal;
}

function init() {
    renderBasket();
    renderMenuCard();
}
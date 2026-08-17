function renderMenuCard() {
    let menuCardRef = document.getElementById("menuCard");
    for (let index = 0; index < menuData.length; index++) {
        menuCardRef.innerHTML += getMenuCardTemplate(index);
    }
}

function renderBasket() {
    let basketRef = document.getElementById("basket");
    if(basket.length === 0) {
        basketRef.innerHTML = getEmptyBasketTemplate();
    } else {
        basketRef.innerHTML = getBasketTemplate();
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
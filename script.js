function renderMenuCard() {
    let menuCardRef = document.getElementById("menuCard");
    for (let index = 0; index < menuData.length; index++) {
        menuCardRef.innerHTML += getMenuCardTemplate(index);
    }
}

function renderBasket() {
    let basketRef = document.getElementById("basket");
    if (basket.length === 0) {
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

function renderStickyBasket() {
    if (basket.length > 0) {
        document.getElementById("sticky-footbar-amount").classList.add("sticky-footbar-amount");
        document.getElementById("sticky-footbar-basket-counter").classList.add("sticky-footbar-basket-amount");
        document.getElementById("sticky-footbar-basket-amount").innerText = basket.length;
    }
}

function openOrderConfirmed() {
    document.getElementById("order-confirmed").showModal();
    setTimeout(closeOrderConfirmed, 2500);
}

function closeOrderConfirmed() {
    document.getElementById("order-confirmed").close();
}

function init() {
    renderBasket();
    console.log(basket.length);
    renderMenuCard();
    renderStickyBasket();
}
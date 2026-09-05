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
        renderBasketItemCard();
        renderStickyBasket();
        renderDeliveryFee();
        calculateSubtotal();
        calculateBasketTotal();
    }
}

function addToBasket(menuID) {
    const searchItem = menuData.find((menu) => menu.id === menuID)
    const existingItem = basket.find((menu) => menu.id === menuID);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        searchItem.quantity = 1;
        basket.push(searchItem);
    }
    renderBasket();
}

function minusButton(menuID) {
    const existingItem = basket.find((menu) => menu.id === menuID);
    const existingItemID = basket.findIndex((menuItemID) => menuItemID.id === menuID);
    if (existingItem.quantity === 1) {
        basket.splice(existingItemID, 1);
    } else {
        existingItem.quantity--;
    }
    renderBasket();
}

function trashButton(menuID) {
    const existingItemID = basket.findIndex((menuItemID) => menuItemID.id === menuID);
    basket.splice(existingItemID, 1);
    renderBasket();
}

function plusButton(menuID) {
    const existingItem = basket.find((menu) => menu.id === menuID);
    existingItem.quantity++;
    renderBasket();
}

function calculateSubtotal() {
    basketSubtotal = 0;
    for (let i = 0; i < basket.length; i++) {
        const subtotal = basket[i];

        basketSubtotal += subtotal.quantity * subtotal.price;
    }
    document.getElementById("basket-subtotal").innerHTML = euroFormat.format(basketSubtotal);
}

function calculateBasketTotal() {
    basketTotal = basketSubtotal + deliveryFee;

    document.getElementById("basket-total").innerHTML = euroFormat.format(basketTotal);
    document.getElementById("basket-total-button").innerHTML = euroFormat.format(basketTotal);
}

function renderBasketItemCard() {
    let basketItemRef = document.getElementById("basketItems")

    for (let index = 0; index < basket.length; index++) {
        basketItemRef.innerHTML += getBasketMenuCardTemplate(index);
    }
}

function renderDeliveryFee() {
    document.getElementById("basket-delivery-fee").innerText = euroFormat.format(deliveryFee);
}

function renderStickyBasket() {
    if (basket.length >= 1) {
        document.getElementById("sticky-footbar-amount").classList.add("sticky-footbar-amount");
        document.getElementById("sticky-footbar-basket-counter").classList.add("sticky-footbar-basket-amount");
        document.getElementById("sticky-footbar-basket-amount").innerText = basket.length;
    } else {
        document.getElementById("sticky-footbar-amount").classList.remove("sticky-footbar-amount");
        document.getElementById("sticky-footbar-basket-counter").classList.remove("sticky-footbar-basket-amount");
    }
}

function openOrderConfirmed() {
    document.getElementById("order-confirmed").showModal();
    document.getElementById("order-confirmed").classList.add("order-confirmed");
    setTimeout(closeOrderConfirmed, 2500);
}

function closeOrderConfirmed() {
    basket.length = 0;
    basketSubtotal = 0;
    document.getElementById("order-confirmed").close();
    document.getElementById("order-confirmed").classList.remove("order-confirmed");

    renderBasket();
    renderStickyBasket();
    renderBasketItemCard();
}

function init() {
    renderBasket();
    renderMenuCard();
    renderStickyBasket();
}
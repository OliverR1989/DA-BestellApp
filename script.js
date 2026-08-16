function renderDeliveryFee() {
    document.getElementById("basket-delivery-fee").innerText = deliveryFee;
}

function renderBasketTotal() {
    document.getElementById("basket-total").innerHTML = basketTotal;
    document.getElementById("basket-total-button").innerHTML = basketTotal;
}

function init() {
    renderDeliveryFee();
    renderBasketTotal();
}
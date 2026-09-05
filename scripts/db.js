const menuData = [
    {
        id: 0,
        category: "Burger",
        name: "Veggie mushroom black burger",
        ingredients: "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        price: 16.90,
        quantity: 0,
        img: "./assets/imgs/menu/burger-0.jpg",
    },
    {
        id: 1,
        category: "Burger",
        name: "All meat burger",
        ingredients: "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        price: 15.90,
        quantity: 0,
        img: "./assets/imgs/menu/burger-1.jpg",
    },
    {
        id: 2,
        category: "Burger",
        name: "Beef red burger",
        ingredients: "Beef, Cheese, Tomatoes, Lettuce, Onion",
        price: 14.90,
        quantity: 0,
        img: "./assets/imgs/menu/burger-2.jpg",
    },
    {
        id: 3,
        category: "Burger",
        name: "Big chicken burger",
        ingredients: "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        price: 15.90,
        quantity: 0,
        img: "./assets/imgs/menu/burger-3.jpg",
    },
    {
        id: 4,
        category: "Pizza",
        name: "Pizza Margherita",
        ingredients: "Tomato Sauce, Mozzarella",
        price: 11.90,
        quantity: 0,
        img: "./assets/imgs/menu/pizza-0.jpg",
    },
    {
        id: 5,
        category: "Pizza",
        name: "Pizza Chorizo",
        ingredients: "Tomato slices, Mozzarella, Chorizo",
        price: 13.90,
        quantity: 0,
        img: "./assets/imgs/menu/pizza-1.jpg",
    },
    {
        id: 6,
        category: "Pizza",
        name: "Funghi",
        ingredients: "Red onion, Olives, Button Mushrooms, Mozzarella",
        price: 12.90,
        quantity: 0,
        img: "./assets/imgs/menu/pizza-2.jpg",
    },
    {
        id: 7,
        category: "Pizza",
        name: "Quattro Formaggi with Chicken",
        ingredients: "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano",
        price: 15.90,
        quantity: 0,
        img: "./assets/imgs/menu/pizza-3.jpg",
    },
    {
        id: 8,
        category: "Salad",
        name: "Warm beef arugula salad",
        ingredients: "TBeef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
        price: 11.90,
        quantity: 0,
        img: "./assets/imgs/menu/salad-0.jpg",
    },
    {
        id: 9,
        category: "Salad",
        name: "Mini green Salad",
        ingredients: "Green salad, Cucumber, Carrots, Parsley, Radishes",
        price: 13.90,
        quantity: 0,
        img: "./assets/imgs/menu/salad-1.jpg",
    },
    {
        id: 10,
        category: "Salad",
        name: "Green Salad with sea food",
        ingredients: "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        price: 12.90,
        quantity: 0,
        img: "./assets/imgs/menu/salad-2.jpg",
    },
    {
        id: 11,
        category: "Salad",
        name: "Vegan green salad with tofu",
        ingredients: "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        price: 15.90,
        quantity: 0,
        img: "./assets/imgs/menu/salad-3.jpg",
    },
]

const euroFormat = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

const deliveryFee = 4.99

const basket = []

let basketSubtotal = 0 

let basketTotal = 0
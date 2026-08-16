const menuData = [
    {
        id: 0,
        category: "Burger",
        name: "Veggie mushroom black burger",
        ingredients: "Mixed green salad, Tomatoes, Edamame, Mushrooms",
        price: 16.90,
        img: "",
    },
    {
        id: 1,
        category: "Burger",
        name: "All meat burger",
        ingredients: "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
        price: 15.90,
        img: "",
    },
    {
        id: 2,
        category: "Burger",
        name: "Beef red burger",
        ingredients: "Beef, Cheese, Tomatoes, Lettuce, Onion",
        price: 14.90,
        img: "",
    },
    {
        id: 3,
        category: "Burger",
        name: "Big chicken burger",
        ingredients: "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
        price: 15.90,
        img: "",
    },
    {
        id: 4,
        category: "Pizza",
        name: "Pizza Margherita",
        ingredients: "Tomato Sauce, Mozzarella",
        price: 11.90,
        img: "",
    },
    {
        id: 5,
        category: "Pizza",
        name: "Pizza Chorizo",
        ingredients: "Tomato slices, Mozzarella, Chorizo",
        price: 13.90,
        img: "",
    },
    {
        id: 6,
        category: "Pizza",
        name: "Funghi",
        ingredients: "Red onion, Olives, Button Mushrooms, Mozzarella",
        price: 12.90,
        img: "",
    },
    {
        id: 7,
        category: "Pizza",
        name: "Quattro Formaggi with Chicken",
        ingredients: "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano",
        price: 15.90,
        img: "",
    },
    {
        id: 8,
        category: "Salad",
        name: "Warm beef arugula salad",
        ingredients: "TBeef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
        price: 11.90,
        img: "",
    },
    {
        id: 9,
        category: "Salad",
        name: "Mini green Salad",
        ingredients: "Green salad, Cucumber, Carrots, Parsley, Radishes",
        price: 13.90,
        img: "",
    },
    {
        id: 10,
        category: "Salad",
        name: "Green Salad with sea food",
        ingredients: "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
        price: 12.90,
        img: "",
    },
    {
        id: 11,
        category: "Salad",
        name: "Vegan green salad with tofu",
        ingredients: "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
        price: 15.90,
        img: "",
    },
]

const deliveryFee = 4.99

let basket = []

let basketSubtotal = []

let basketTotal = deliveryFee + basketSubtotal
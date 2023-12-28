// Meal data arrays:

let arraySides = [
    "Green Beans",
    "Zucchini and Squash",
    "White Rice",
    "Basmati Rice",
    "Couscous",
    "Roasted Potatoes",
    "Fried Rice",
    "Coleslaw",
    "Lo Mein",
    "Mac n Cheese",
    "Stuffed Peppers",
    "Caesar Salad",
    "Sweet Potato Fries",
    "Baked Potato",
    "Wedge Salad",
    "Miso Roasted Carrots",
    "Casserole",
    "Quinoa",
    "Garlic Bread",
    "Creamed Spinach",
    "Cripsy Brussel Sprouts",
    "Roasted Fennel and Apples",
    "Honey Miso Eggplant",
    "Mushroom Risotto",
    "Greek Salad"
];

//console.log(sidesArray.length);

let arrayMains = [
    "Cedar Plank Salmon",
    "Herb Roasted Chicken",
    "Seared Scallops and Brown Butter and Lemon Pan Sauce",
    "Lasagna",
    "Habanero Lime Grilled Shrimp Skewers",
    "Grilled Pork Spareribs",
    "Fish Tacos",
    "Spicy Korean Chicken Breast",
    "Miso Black Cod",
    "Mediterranean Seabass",
    "Pad Thai",
    "Chicken Cordon Bleu",
    "Beef Stew",
    "Pan Seared Ribeye",
    "Spaghetti and Meatballs",
    "Creamy Tuscan Chicken",
    "Honey Garlic Salmon",
    "Pepper Steak Stir Fry",
    "Chicken Fried Steak and Gravy",
    "Steak Fajitas",
    "Shrimp Scampi and Linguini",
    "Cajun Pork Chop",
    "Swedish Meatballs",
    "Smoky Buffalo Wings",
    "Classic Carbonara"
];

//console.log(mainsArray.length);

let arrayDesserts = [
    "Chocolate Mousse",
    "Tiramisu",
    "Almond and Date Cake",
    "Creme Brulee",
    "Lemon Meringue Pie",
    "Banana Split",
    "Amaretto Cheesecake",
    "Affogato",
    "Apple and Custard Crumble",
    "Sticky Toffee Pudding",
    "Banana Pudding",
    "Bananas Foster",
    "Double Fudge Brownies",
    "Fried Oreos",
    "Boston Cream Pie",
    "Peach Cobbler",
    "Strawberry Shortcake",
    "Chocolate Motlen Lava Cake",
    "Bread Pudding",
    "Cannolis",
    "Cinnamon Rolls",
    "Chocolate Eclaires",
    "Chocolate Chip Cookies",
    "Baked Alaska",
    "S'mores"
];

//console.log(dessertsArray.length);

let sideToggle = document.querySelector("#side");
let mainToggle = document.querySelector("#main-dish");
let dessertToggle = document.querySelector("#dessert");
let entireMealToggle = document.querySelector("#entire-meal");
let letsCookButton = document.querySelector("#lets-cook-button");

let mealSuggester = document.querySelector(".meal-suggester");

letsCookButton.addEventListener("click", displayDish);

function getRandomIndex(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start); 
}

function displayDish() {
    if(sideToggle.checked) {

    } else if(mainToggle.checked) {

    } else if(dessertToggle.checked) {

    } else if(entireMealToggle.checked) {

    } else {
        
    }
}







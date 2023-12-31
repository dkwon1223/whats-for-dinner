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
    "Almond & Date Cake",
    "Creme Brulee",
    "Lemon Meringue Pie",
    "Banana Split",
    "Amaretto Cheesecake",
    "Affogato",
    "Apple & Custard Crumble",
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

let sidesToggle = document.querySelector("#side");
let mainsToggle = document.querySelector("#main-dish");
let dessertsToggle = document.querySelector("#dessert");
let entireMealToggle = document.querySelector("#entire-meal");

let letsCookButton = document.querySelector("#lets-cook-button");
let clearButton = document.querySelector("#clear");
let addRecipeButton = document.querySelector("#add-recipe-button");
let addNewRecipeButton = document.querySelector("#add-new-button");

let cookPotIcon = document.querySelector(".cookpot-icon");
let mealOutputSection = document.querySelector(".meal-output-container");
let mealOutputText = document.querySelector("#meal-text");
let addRecipeSection = document.querySelector(".add-recipe-section");

letsCookButton.addEventListener("click", displayDish);
clearButton.addEventListener("click", clearPage);
addRecipeButton.addEventListener("click", displayAddRecipe);

function getRandomIndex(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start); 
}

function displayDish() {
    cookPotIcon.classList.add("hidden");
    mealOutputSection.classList.remove("hidden");
    if(sidesToggle.checked) {
         mealOutputText.innerHTML = arraySides[getRandomIndex(0, (arraySides.length - 1))];
    } else if(mainsToggle.checked) {
        mealOutputText.innerHTML = arrayMains[getRandomIndex(0, (arrayMains.length - 1))];
    } else if(dessertsToggle.checked) {
        mealOutputText.innerHTML = arrayDesserts[getRandomIndex(0, (arrayDesserts.length - 1))];
    } else if(entireMealToggle.checked) {
        mealOutputText.innerHTML = `${arrayMains[getRandomIndex(0, (arrayMains.length - 1))]} with a side of ${arraySides[getRandomIndex(0, (arraySides.length - 1))]} and ${arrayDesserts[getRandomIndex(0, (arrayDesserts.length - 1))]} for dessert!`;
    } else {
        alert("You must select an option to start cooking!");
    }
}

function clearPage() {
    location.reload();
}

function displayAddRecipe() {
    addRecipeSection.classList.remove("hidden");
}











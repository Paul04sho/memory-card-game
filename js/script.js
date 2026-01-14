const container = document.querySelector(".cards-container");

let cards= [
    // Tableau contenant toutes les cartes 
];

let firstCard, secondCard;
let lockboard = false;
let score = 0;
console.log("Le score actuel est de:", score);

document.getElementById("score").textContent = score;

// Pour récupérer les données stockées dans le fichier JSON
fetch('data/cards.json')
.then (response => response.json())
.then(data => {
    // Crée une paire pour chaque image chargée
    cards = [...data, ...data];
    console.log(cards);
    shuffleCards();
    generateCards();
})

// Fonction qui mélange les paires de cartes 
function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;

    // Tant qu'il reste des paires non-mélangées on continue d'exécuter ce code
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

let arr = ["🎄", "❤️", "🎅", "👀", "🙏"];
shuffleCards(arr);
console.log(arr);

function generateCards() {
    const items = document.createElement("div");

    items.classList.add("card");
    container.appendChild(items);
}






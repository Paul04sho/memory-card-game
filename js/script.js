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

// Fonction qui permet d'afficher les différentes cartes à l'écran
function generateCards() {
   for (let card of cards) {
    const cardItem = document.createElement("div");
    cardItem.setAttribute("data-name", "name")
    cardItem.classList.add("card");

    cardItem.innerHTML = `
    <div class="front">
    <img class="front-image" src = ${card.image}></img>
    </div>
    <div class="back"></div>
    `

    container.appendChild(cardItem);
    // Appel de la fonction de retournement
   }
}

// Fonction qui permet de retourner les cartes au clic des utilisateurs 
function flipCard() {
    if(lockboard) return;
    firstCard.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

}








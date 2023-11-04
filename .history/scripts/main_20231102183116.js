// main.js
import { createCard } from './components/card.js';
import { renderCardToDOM } from './util/renderToDom.js';
import firstYearWizards from './data/firstYearWizards.js';

document.getElementById('addCardButton').addEventListener('click', createAndDisplayCard);

// Render existing cards when the page loads
window.addEventListener('DOMContentLoaded', () => {
    renderExistingCards();
});

function renderExistingCards() {
    firstYearWizards.forEach(wizard => {
        const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
        renderCardToDOM(cardElement);
    });
}

function createAndDisplayCard() {
    const studentName = document.getElementById('exampleInput').value;
    const imageURL = document.getElementById('examplePassword').value;

    const cardElement = createCard(studentName, imageURL, getRandomHouse());
    renderCardToDOM(cardElement);
}

function getRandomHouse() {
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    const randomHouseIndex = Math.floor(Math.random() * houses.length);
    return houses[randomHouseIndex];
}

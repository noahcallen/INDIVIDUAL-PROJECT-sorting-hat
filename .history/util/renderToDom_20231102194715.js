import { createCard } from '../components/card.js';

function renderToDOM(petsArray) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    for (const pet of petsArray) {
        const petCard = createCard(pet);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.appendChild(petCard);

        appDiv.appendChild(cardContainer);
    }
}

export { renderToDOM };

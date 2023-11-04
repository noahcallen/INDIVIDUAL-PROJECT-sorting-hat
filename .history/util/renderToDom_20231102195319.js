import { createCard } from '../components/card.js';

function renderToDOM(petsArray) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    for (const pet of petsArray) {
        const petCard = createCard(pet);
        appDiv.appendChild(petCard);
    }
}

export { renderToDOM };

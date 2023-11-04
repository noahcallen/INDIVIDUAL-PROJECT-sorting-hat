import { createCard } from '../components/card.js';

function renderToDOM(petsArray) {
    appDiv.innerHTML = '';

    for (const pet of petsArray) {
        const petCard = createCard(pet);
        appDiv.appendChild(petCard);
    }
}

export { renderToDOM };

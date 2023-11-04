// scripts/main.js
import { createCard } from '../components/card.js';
import { renderCardToDOM } from '../util/renderToDom.js';
import { firstYearWizards } from '../data/firstYearWizards.js';

function getRandomHouse() {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomHouseIndex = Math.floor(Math.random() * houses.length);
  return houses[randomHouseIndex];
}

function createAndDisplayCard() {
  const randomWizard = firstYearWizards[Math.floor(Math.random() * firstYearWizards.length)];
  const { name, imageUrl, house } = randomWizard;

  const house = getRandomHouse();
  const cardElement = createCard(name, imageUrl, house);
  renderCardToDOM(cardElement);
}

document.getElementById('sortButton').addEventListener('click', createAndDisplayCard);

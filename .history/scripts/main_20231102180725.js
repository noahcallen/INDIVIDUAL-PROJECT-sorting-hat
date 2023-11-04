// main.js
import { createCard } from './components/card.js';
import { renderCardToDOM } from './utils/renderToDom.js';

function getRandomHouse() {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomHouseIndex = Math.floor(Math.random() * houses.length);
  return houses[randomHouseIndex];
}

function createAndDisplayCard() {
  const studentName = document.getElementById('exampleInput').value;
  const imageURL = document.getElementById('examplePassword').value;
  const house = getRandomHouse(); // Randomly assigning a house

  const cardElement = createCard(studentName, imageURL, house);
  renderCardToDOM(cardElement, 'cardContainer', house); // Pass the house information
}

document.getElementById('sortButton').addEventListener('click', createAndDisplayCard);

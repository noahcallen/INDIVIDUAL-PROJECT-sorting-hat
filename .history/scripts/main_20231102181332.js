// main.js
import { createCard } from './components/card.js';
import { renderCardToDOM } from './utils/renderToDom.js';

function getRandomHouse() {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomHouseIndex = Math.floor(Math.random() * houses.length);
  return houses[randomHouseIndex];
}

function createAndDisplayCard() {
  console.log('Button Clicked'); // Check if the button click event is firing

  const studentName = document.getElementById('exampleInput').value;
  const imageURL = document.getElementById('examplePassword').value;
  const house = getRandomHouse(); // Randomly assigning a house

  console.log(`Student: ${studentName}, Image URL: ${imageURL}, House: ${house}`); // Check if values are being retrieved

  const cardElement = createCard(studentName, imageURL, house);
  renderCardToDOM(cardElement, 'cardContainer', house); // Pass the house information
}

document.getElementById('sortButton').addEventListener('click', createAndDisplayCard);

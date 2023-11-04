// ... (imports and getRandomHouse function remains the same)

function createAndDisplayCard() {
  console.log('Button Clicked');

  const studentName = document.getElementById('exampleInput').value;
  const imageURL = document.getElementById('examplePassword').value;
  const house = getRandomHouse(); // Randomly assigning a house

  console.log(`Student: ${studentName}, Image URL: ${imageURL}, House: ${house}`);

  const cardElement = createCard(studentName, imageURL, house);
  renderCardToDOM(cardElement, 'cardContainer', house); // Pass the house information
}

document.getElementById('sortButton').addEventListener('click', createAndDisplayCard);

// main.js

// Sample first-year wizards data
const firstYearWizards = [
  { name: 'Harry Potter', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
  // Add more wizard data here if needed
];

// Function to create a card based on student name, image URL, and house
function createCard(studentName, imageUrl, house) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  // Create and append card HTML based on the provided details
  // Replace this with appropriate HTML structure based on your design
  card.innerHTML = `
      <div class="card" style="width: 15rem;">
          <img src="${imageUrl}" class="card-img-top" alt="Student Image">
          <div class="card-body">
              <h5 class="card-title">${studentName}</h5>
              <p class="card-text">House: ${house}</p>
              <button class="btn btn-danger remove-card">Expel</button>
          </div>
      </div>
  `;
  
  return card;
}

// Function to render a card to the DOM
function renderCardToDOM(cardElement) {
  const appDiv = document.getElementById("app");
  appDiv.appendChild(cardElement);
}

// Initial rendering of existing cards
firstYearWizards.forEach(wizard => {
  const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
  renderCardToDOM(cardElement);
});

// Sort (create) a new card on button click
document.getElementById('form-submit').addEventListener('click', () => {
  const studentName = document.getElementById('exampleInput').value;
  const imageURL = document.getElementById('examplePassword').value;

  // Randomly assigning a house for the new card (dummy implementation)
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  const newCard = createCard(studentName, imageURL, randomHouse);
  renderCardToDOM(newCard);
});

// Function to remove a card (event delegation)
document.getElementById('app').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-card')) {
      event.target.closest('.card').remove();
  }
});

// Function to remove a pet and move it to "V Mans army"
appDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-pet")) {
      const id = event.target.dataset.id;
      const index = pets.findIndex((pet) => pet.id.toString() === id);
      if (index !== -1) {
          const expelledPet = pets.splice(index, 1)[0];
          renderToDOM(pets);
          renderExpelledPet(expelledPet);
      }
  }
});

// Function to render expelled pet to the "V Mans army" section
function renderExpelledPet(pet) {
  const vMansArmyDiv = document.querySelector("#vMansArmy");

  const petCard = document.createElement("div");
  petCard.classList.add("card", "expelled-card"); // Add a CSS class for styling
  petCard.innerHTML = `
      <div class="card" style="width: 23rem; height: 30rem">
          <div class="card-header">${pet.name}</div>
          <img src="${pet.imageUrl}" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title">${pet.color}</h5>
              <p class="card-text">${pet.specialSkill}</p>
          </div>
          <ul class="list-group">
              <li class="list-group-item">${pet.type}</li>
          </ul>
      </div>`;

  vMansArmyDiv.appendChild(petCard);
}

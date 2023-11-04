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

// ... [Your existing code]

// Function to render expelled pets to the DOM under "V Mans Army" section
function renderExpelledCards(expelledPetsArray) {
  const expelledSection = document.querySelector('#expelledSection');

  if (!expelledSection) {
      expelledSection = document.createElement('div');
      expelledSection.id = 'expelledSection';
      expelledSection.classList.add('text-center', 'mb-5');
      expelledSection.innerHTML = '<h2>V Man\'s Army</h2>';
      document.body.appendChild(expelledSection);
  } else {
      expelledSection.innerHTML = '<h2>V Man\'s Army</h2>';
  }

  for (const pet of expelledPetsArray) {
      const expelledCard = document.createElement('div');
      expelledCard.classList.add('card', 'expelled-card');
      expelledCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${pet.name}</h5>
              <p class="card-text">${pet.color}</p>
              <p class="card-text">${pet.specialSkill}</p>
              <p class="card-text">${pet.type}</p>
              <img src="${pet.imageUrl}" class="card-img-top">
          </div>
      `;
      expelledSection.appendChild(expelledCard);
  }
}

// Function to move expelled pets to the expelled section
function movePetToExpelled(pet) {
  const index = pets.findIndex((p) => p.id === pet.id);
  if (index !== -1) {
      expelledPets.push(pets[index]);
      pets.splice(index, 1);
      renderToDOM(pets);
      renderExpelledCards(expelledPets);
  }
}

// ... [Your existing code]

// Function to expel a pet
appDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("expel-pet")) {
      const id = event.target.dataset.id;
      const pet = pets.find((p) => p.id.toString() === id);
      if (pet) {
          movePetToExpelled(pet);
      }
  }
});

// ... [Your existing code]

// Initialization
renderToDOM(pets);
const expelledPets = [];

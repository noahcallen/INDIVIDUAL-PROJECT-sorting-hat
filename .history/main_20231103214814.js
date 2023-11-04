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
      moveCardToVManSection(event.target.closest('.card'));
  }
});

function moveCardToVManSection(card) {
  const expelledSection = document.getElementById('expelledSection');
  const cardToMove = card.cloneNode(true);
  cardToMove.classList.add('expelled-card');
  expelledSection.appendChild(cardToMove);
}

// Function to render expelled cards to the "Vmans army" section
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
      <div class="card" style="width: 15rem;">
          <img src="${pet.imageUrl}" class="card-img-top" alt="Student Image">
          <div class="card-body">
              <h5 class="card-title">${pet.name}</h5>
              <p class="card-text">House: ${pet.house}</p>
              <button class="btn btn-danger remove-card">Expel</button>
          </div>
      </div>
    `;
    expelledSection.appendChild(expelledCard);
  }
}

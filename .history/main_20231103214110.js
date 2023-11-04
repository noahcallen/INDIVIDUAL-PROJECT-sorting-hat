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

// Function to move the expelled card to the "V Mans Army" section
function moveCardToVManSection(card) {
  const expelledSection = document.getElementById('expelledSection');
  const cardToMove = card.cloneNode(true);
  cardToMove.classList.add('expelled-card');
  expelledSection.appendChild(cardToMove);
}

// Event listener for the "Expel" button
document.getElementById('app').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-card')) {
    const card = event.target.closest('.card');
    if (card) {
      moveCardToVManSection(card);
      card.remove();
    }
  }
});

// Function to render expelled students to the DOM under "V Mans Army" section
function renderExpelledStudents(expelledStudentsArray) {
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

  expelledStudentsArray.forEach(student => {
    const expelledCard = createCard(student.name, student.imageUrl, student.house);
    expelledCard.classList.add('expelled-card');
    expelledSection.appendChild(expelledCard);
  });
}

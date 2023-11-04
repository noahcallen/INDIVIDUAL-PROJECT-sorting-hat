

const pets = [
    // Your pet data here
];

const appDiv = document.querySelector("#app");

// Function to render pets to the DOM
function renderToDOM(petsArray) {
    appDiv.innerHTML = "";

    // Logic to render cards here
    // ...

    // Updated renderToDOM function logic to render 5 cards in a row
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < petsArray.length; i++) {
        const pet = petsArray[i];

        const petCard = document.createElement("div");
        petCard.classList.add("card", "col-2", "m-3");
        // Card creation logic

        row.appendChild(petCard);

        if ((i + 1) % 5 === 0 || i === petsArray.length - 1) {
            appDiv.appendChild(row);
            row = document.createElement("div");
            row.classList.add("row");
        }
    }
}

// Function to render expelled pets to the DOM under "V Mans Army" section
function renderExpelledCards(expelledPetsArray) {
    let expelledSection = document.querySelector('#expelledSection');

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
        <img src="${imageUrl}" class="card-img-top" alt="Student Image">
        <div class="card-body">
            <h5 class="card-title">${studentName}</h5>
            <p class="card-text">House: ${house}</p>
            <button class="btn btn-danger remove-card">Expel</button>
        </div>
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

// Initialization
renderToDOM(pets);
const expelledPets = [];

document.addEventListener('DOMContentLoaded', function() {
    const firstYearWizards = [
        { name: 'Harry Potter', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
        // Add more wizard data here if needed
    ];

    function createCard(studentName, imageUrl, house) {
        const card = document.createElement("div");
        card.classList.add("card");
        
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

    function renderCardToDOM(cardElement) {
        const appDiv = document.getElementById("app");
        appDiv.appendChild(cardElement);
    }

    firstYearWizards.forEach(wizard => {
        const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
        renderCardToDOM(cardElement);
    });

    document.getElementById('app').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-card')) {
            moveCardToVManSection(event.target.closest('.card'));
        }
    });

    function moveCardToVManSection(card) {
        const expelledSection = document.getElementById('expelledSection');
        if (expelledSection) {
            const cardToMove = card.cloneNode(true);
            cardToMove.classList.add('expelled-card');
            expelledSection.appendChild(cardToMove);
        } else {
            console.error('Expelled section not found.');
        }
    }
});

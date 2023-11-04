function createCard(pet) {
  const petCard = document.createElement('div');
  // Create the structure of the pet card using the passed pet object
  // Example:
  petCard.innerHTML = `
  <div class="card" style="width: 23rem;height: 30rem">
  <div class="card-header">${pet.name}</div>
  <img src="${pet.imageUrl}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${pet.color}</h5>
    <p class="card-text">${pet.specialSkill}</p>
  </div>
  <ul class="list-group">
    <li class="list-group-item">${pet.type}</li>
  </ul>
  <div class="e-grid gap-3">
    <button class="btn btn-primary remove-pet" data-id="${pet.id}">Remove Pet</button>
  </div>
</div>`;
  return petCard;
}

export { createCard };

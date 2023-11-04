function createCard(pet) {
  const petCard = document.createElement("div");
  petCard.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = pet.name;

  const petImage = document.createElement("img");
  petImage.src = pet.imageUrl;
  petImage.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const petColor = document.createElement("h5");
  petColor.classList.add("card-title");
  petColor.textContent = `Color: ${pet.color}`;

  const petSkill = document.createElement("p");
  petSkill.classList.add("card-text");
  petSkill.textContent = `Skill: ${pet.specialSkill}`;

  const petType = document.createElement("ul");
  petType.classList.add("list-group");

  const petTypeItem = document.createElement("li");
  petTypeItem.classList.add("list-group-item");
  petTypeItem.textContent = `Type: ${pet.type}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "btn-primary", "remove-pet");
  removeButton.dataset.id = pet.id;
  removeButton.textContent = "Remove Pet";

  // Append all elements to the card
  petCard.appendChild(cardHeader);
  petCard.appendChild(petImage);
  cardBody.appendChild(petColor);
  cardBody.appendChild(petSkill);
  petType.appendChild(petTypeItem);
  cardBody.appendChild(petType);
  petCard.appendChild(cardBody);
  petCard.appendChild(removeButton);

  return petCard;
}

export { createCard };

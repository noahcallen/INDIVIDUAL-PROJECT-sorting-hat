
export function createCard(studentName, imageURL, house) {
  const petCard = document.createElement("div");
  petCard.classList.add("card");
  petCard.innerHTML = `
    <div class="card" style="width: 15rem; height: 17rem;">
      <img src="${imageURL}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${studentName}</h5>
        <p class="card-text">House: ${house}</p>
        <a href="#" class="btn btn-danger">Expel</a>
      </div>
    </div>
  `;
  return petCard;
}

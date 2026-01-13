

  cards.forEach(card => {
    const model = card.dataset.model;
    card.style.display = model.includes(value) ? "block" : "none";
  });






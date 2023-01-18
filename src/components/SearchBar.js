const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', (e) => {
  removeChildren(mainContainer);
  recipes.forEach((recipe) => {
    const recipeToDisplay = new Recipe(recipe);
    if (recipe.name.toLowerCase().includes(e.target.value.toLowerCase())) {
      recipeToDisplay.createCard();
    }
  });
});

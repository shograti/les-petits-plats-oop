function removeChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getIngredientsList() {
  const ingredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  return [...ingredients];
}

function getAppliancesList() {
  const appliances = new Set();
  recipes.forEach((recipe) => {
    appliances.add(recipe.appliance.toLowerCase());
  });
  return [...appliances];
}

function getUstensilsList() {
  const ustensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.add(ustensil.toLowerCase());
    });
  });
  return [...ustensils];
}

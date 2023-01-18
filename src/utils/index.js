const categoriesFilters = {
  ingredients: [],
  appliances: [],
  ustensils: [],
};

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

function pushToCategoriesFilters(type, name) {
  switch (type) {
    case 'ingredients-filter-list':
      categoriesFilters.ingredients.push(name);
      break;
    case 'appliances-filter-list':
      categoriesFilters.appliances.push(name);
      break;
    case 'ustensils-filter-list':
      categoriesFilters.ustensils.push(name);
      break;
  }
}

function getMatchingRecipe(recipe) {
  let isMatching = true;

  categoriesFilters.ingredients.forEach((filteredIngredient) => {
    if (
      !recipe.ingredients.some(
        (ingredient) =>
          ingredient.ingredient.toLowerCase() === filteredIngredient
      )
    ) {
      isMatching = false;
    }
  });

  categoriesFilters.appliances.forEach((appliance) => {
    if (recipe.appliance.toLowerCase() !== appliance) {
      isMatching = false;
    }
  });

  categoriesFilters.ustensils.forEach((filterdUstensil) => {
    if (
      !recipe.ustensils.some(
        (ustensil) => ustensil.toLowerCase() === filterdUstensil
      )
    ) {
      isMatching = false;
    }
  });

  if (isMatching) {
    return recipe;
  }
}

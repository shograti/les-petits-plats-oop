const mainContainer = document.querySelector('main');



class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.time = recipe.time;
    this.description = recipe.description;
    this.ingredients = recipe.ingredients;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }

  createCard() {
    const card = document.createElement('article');
    const imagePlaceholder = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardHeadRow = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardTimeContainer = document.createElement('div');
    const cardTimeText = document.createElement('p');
    const cardTimeIcon = document.createElement('img');
    const cardIngredients = document.createElement('ul');
    const cardIngredient = document.createElement('li');
    const cardDescription = document.createElement('p');

    cardTitle.textContent = this.name;
    cardTimeIcon.setAttribute('src', 'assets/clock.png');
    cardTimeText.textContent = `${this.time} min`;
    cardDescription.textContent = this.description;

    this.ingredients.forEach((ingredient) => {
      const ingredientContainer = document.createElement('p');
      const ingredientName = document.createElement('span');
      ingredientName.textContent = ingredient.ingredient;
      ingredientContainer.appendChild(ingredientName);
      ingredientContainer.append(
        ` : ${ingredient.quantity ? ingredient.quantity : ''} ${
          ingredient.unit ? ingredient.unit : ''
        }`
      );
      cardIngredient.appendChild(ingredientContainer);
      cardIngredients.appendChild(cardIngredient);
    });

    card.appendChild(imagePlaceholder);
    cardTimeContainer.appendChild(cardTimeText);
    cardTimeContainer.appendChild(cardTimeIcon);
    cardHeadRow.appendChild(cardTitle);
    cardHeadRow.appendChild(cardTimeContainer);
    cardBody.appendChild(cardHeadRow);
    cardBody.appendChild(cardIngredients);
    cardBody.appendChild(cardDescription);
    card.appendChild(cardBody);
    mainContainer.appendChild(card);
  }
}

recipes.forEach((recipe) => {
  const recipeInstance = new Recipe(recipe);
  if (recipe.id < 6) {
    recipeInstance.createCard();
  }
});

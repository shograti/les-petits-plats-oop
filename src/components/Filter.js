class Filter {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  createFilter() {
    const filter = document.createElement('li');
    filter.textContent = this.name;

    filter.addEventListener('click', () => {
      const tagInstance = new Tag(this.name, this.type);
      const tag = tagInstance.createTag();

      tagsContainer.appendChild(tag);
      filter.remove();

      pushToCategoriesFilters(tagInstance.type, tagInstance.name);

      removeChildren(mainContainer);

      recipes.forEach((recipe) => {
        const matchingRecipe = getMatchingRecipe(recipe);
        if (matchingRecipe) {
          const recipeInstance = new Recipe(matchingRecipe);
          recipeInstance.createCard();
        }
      });
    });
    return filter;
  }
}

const tagsContainer = document.getElementById('tags-container');

class Tag {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  createTag() {
    const tag = document.createElement('li');

    switch (this.type) {
      case 'ingredients-filter-list':
        tag.classList.add('tag_blue');
        break;
      case 'appliances-filter-list':
        tag.classList.add('tag_green');
        break;
      case 'ustensils-filter-list':
        tag.classList.add('tag_orange');
        break;
    }

    tag.addEventListener('click', () => {
      const filterInstance = new Filter(this.name, this.type);
      const filter = filterInstance.createFilter();
      switch (this.type) {
        case 'ingredients-filter-list':
          ingredientsFilterList.appendChild(filter);
          break;
        case 'appliances-filter-list':
          appliancesFilterList.appendChild(filter);
          break;
        case 'ustensils-filter-list':
          ustensilsFilterList.appendChild(filter);
          break;
      }
      tag.remove();
    });

    tag.textContent = this.name;
    return tag;
  }
}

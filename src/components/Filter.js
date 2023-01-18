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
    });
    return filter;
  }
}

const ingredientsFilterList = document.getElementById(
  'ingredients-filter-list'
);
const appliancesFilterList = document.getElementById('appliances-filter-list');
const ustensilsFilterList = document.getElementById('ustensils-filter-list');

class FilterList {
  constructor(filterList, target) {
    this.filterList = filterList;
    this.target = target;
  }

  createList() {
    const list = document.createElement('ul');
    this.filterList.forEach((filterName) => {
      if (this.filterList.indexOf(filterName) < 30) {
        const filterInstance = new Filter(filterName, this.target.id);
        const filter = filterInstance.createFilter();
        list.appendChild(filter);
      }
    });
    this.target.appendChild(list);
  }
}

const lists = [
  {
    list: getIngredientsList(),
    target: ingredientsFilterList,
  },
  {
    list: getAppliancesList(),
    target: appliancesFilterList,
  },
  { list: getUstensilsList(), target: ustensilsFilterList },
];

lists.forEach((list) => {
  const filterListInstance = new FilterList(list.list, list.target);
  filterListInstance.createList();
});

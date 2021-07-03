const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector("ul#ingredients");
const listElements = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  return itemEl;
})
ingredientsListEl.append(...listElements);
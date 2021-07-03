const categoriesEl = document.querySelectorAll('li.item');
console.log(`в списке ${categoriesEl.length} категории`);
categoriesEl.forEach((el) =>
  console.log(`категория:${el.firstElementChild.textContent}
количество элементов:${el.querySelectorAll('li').length}`)
);

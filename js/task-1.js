const categoriesList = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;

    const categoryElements = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
});
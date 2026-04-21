const recipesGrid = document.querySelector('.recipes-grid');


// Функция для создания карточки рецепта
function createCard(recipe) {
    return `
    <a href="recipe.html?id=${recipe.id}" class="recipe-link" data-id="${recipe.id}">
        <article class="recipe-card">
            <div class="recipe-img-wrapper">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            </div>

            <div class="recipe-content">
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-description">${recipe.description}</p>

                <div class="recipe-info">
                    <span class="recipe-time">⏱ ${recipe.time}</span>
                    <span class="recipe-author">👨‍🍳 ${recipe.author}</span>
                </div>
            </div>
        </article>
    </a>`;
}


function renderRecipes(recipesArray) {
    if (!recipesGrid) return;
        let html = '';

        recipesArray.forEach(function (recipe) {
            html += createCard(recipe);
        });

        recipesGrid.innerHTML = html;
    
}

renderRecipes(recipes);

const searchInput = document.getElementById('searchInput');
    
    
searchInput.addEventListener('input', () => { 
    let query = searchInput.value.toLowerCase();
    console.log("Користувач друкує:", query);

    let filterRecipes = recipes.filter(function (recipe) {
        return recipe.title.toLowerCase().includes(query);
    });

    renderRecipes(filterRecipes);
    
})
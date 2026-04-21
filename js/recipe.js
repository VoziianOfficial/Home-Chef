function renderRecipePage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    console.log("ID з URL:", id);

    // Знаходимо контейнер
    const container = document.querySelector('.recipe');

    // Тепер return спрацює ідеально, бо він всередині функції!
    if (!container) {
        console.error("Помилка: Не знайдено контейнер для відображення рецепта!");
        return;
    }

    if (!id) {
        container.innerHTML = '<h2 class="error-msg">Помилка: ID рецепта не вказано в URL</h2>';
    } else {
        const recipe = recipes.find(r => r.id === Number(id));
        console.log("Знайдений рецепт:", recipe);

        if (!recipe) {
            container.innerHTML = '<h2 class="error-msg">На жаль, такого рецепта не існує 😢</h2>';
        } else {
            console.log("Все чудово, можна рендерити сторінку!");

            container.innerHTML = `
                <article class="recipe-detail">
                    <h1 class="recipe-detail-title">${recipe.title}</h1>
                    <p class="recipe-detail-description">${recipe.description}</p>

                    <div class="recipe-detail-image-wrap">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-img">
                    </div>

                    <div class="recipe-detail-content">
                        <div class="recipe-detail-section">
                            <h2>Інгредієнти:</h2>
                            <ul class="recipe-ingredients-list">
                                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="recipe-detail-section">
                            <h2>Інструкція приготування:</h2>
                            <div class="recipe-instructions-steps">
                                ${recipe.instructions
                    .split(/(?=\d+\.)/)
                    .filter(step => step.trim() !== '')
                    .map(step => `<p class="instruction-step">${step.trim()}</p>`)
                    .join('')}
                            </div>
                        </div>

                        <div class="recipe-detail-meta">
                            <span class="meta-item">⏱ ${recipe.time}</span>
                            <span class="meta-item">👨‍🍳 ${recipe.author}</span>
                        </div>
                    </div>
                </article>

                <button class="back-button" onclick="history.back()">← Назад до рецептів</button>
            `;
        }
    }
}

renderRecipePage();
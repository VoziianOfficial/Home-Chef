const recipesGrid = document.querySelector('.recipes-grid');

const testCardHTML = `
    <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>

      <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>


      <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>

    <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>

    <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>

    <article class="recipe-card">
        <div class="recipe-img-wrapper">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Смачна страва">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-card-title">Запечена курка з овочами</h3>
            <p class="recipe-card-description">Соковита курка, запечена з ароматними травами та овочами. Ідеальна страва для сімейної вечері.</p>
            <div class="recipe-info">
                <span class="recipe-time">⏱ 45 хв</span>
                <span class="recipe-author">👨‍🍳 Адмін</span>
            </div>
        </div>
    </article>


`;

recipesGrid.innerHTML = testCardHTML;
// Данные приложения - категории и кнопки
const appData = {
    categories: [
        {
            id: 1,
            name: "ПЛАГИНЫ ПАЧКОЙ",
            buttons: [
                { name: "FabFilter - Total Bundle", url: "https://vk.com/doc-84256981_684860959?hash=tcCUycOJAKuykjm86fpsmBXQVZxezYoxtXXxuTBlEpo&dl=ZTXGSzV9zXvh2B0Fgora5uMQ4xxAvsEkeD4vI2QWLEo&api=1&no_preview=1" },
                { name: "Valhalla DSP - Plugins Bundle", url: "https://flstudio12-20.com/valhalla-dsp-plugins-bundle-2024-03.html" },
                { name: "SoundToys - The Ultimate", url: "https://flstudio12-20.com/soundtoys-vst-torrent-v5-0-1-10839.html" },
                { name: "Dada Life- Bundle", url: "https://audiostorrent.com/dada-life-secret-sauce-bundle-free-download/" },
                { name: "Arturia - V Collection X", url: "https://vk.com/doc668047561_685580825?hash=YLYAQv6v70dnkKGQDSvZ5ZsW9BH2xY3kzJi7gY3CPEs&dl=BPPeOl7qazRPUbPuT7bHsoXQgItND3E1jV7FTTUdOKT&api=1&no_preview=1" }
            ]
        },
        {
            id: 2,
            name: "ПЛАГИНЫ ДЛЯ СВИДЕНИЯ",
            buttons: [
                { name: "Oeksound - Soothe2", url: "https://github.com" },
                { name: "iZotope - RX 11", url: "https://stackoverflow.com" },
                { name: "Maag EQ4", url: "https://techcrunch.com" },
                { name: "Oeksound - Spiff", url: "https://wired.com" },
                { name: "Voxengo MSED", url: "https://github.com" },
                { name: "Antares - Auto-Tune Pro", url: "https://stackoverflow.com" },
                { name: "Antares - Auto-Tune Pro X", url: "https://techcrunch.com" },
                { name: "Antares - Auto-Tune EFX+", url: "https://wired.com" },
                { name: "Antares - Auto-Tune Vocal-EQ", url: "https://github.com" },
                { name: "Transient Shaper", url: "https://stackoverflow.com" },
                { name: "UVI - Opal", url: "https://techcrunch.com" },
                { name: "Pulsar Audio - 1178", url: "https://wired.com" },
                { name: "Cytomic - The Glue", url: "https://github.com" },
                { name: "Slate Digital - Fresh Air", url: "https://stackoverflow.com" },
                { name: "Slate Digital - Virtual Mix Rack", url: "https://techcrunch.com" },
                { name: "cramit", url: "https://wired.com" },
            ]
        },
        {
            id: 3,
            name: "ПЛАГИНЫ ДЛЯ МАСТЕРИНГА",
            buttons: [
                { name: "BBC", url: "https://bbc.com" },
                { name: "CNN", url: "https://cnn.com" },
                { name: "Reuters", url: "https://reuters.com" },
                { name: "The Guardian", url: "https://theguardian.com" }
            ]
        },
        {
            id: 4,
            name: "ПЛАГИНЫ АНАЛИЗАТОРЫ",
            buttons: [
                { name: "YouTube", url: "https://youtube.com" },
                { name: "Netflix", url: "https://netflix.com" },
                { name: "Spotify", url: "https://spotify.com" },
                { name: "Twitch", url: "https://twitch.tv" }
            ]
        },
        {
            id: 5,
            name: "ПЛАГИНЫ ЭФФЕКТЫ",
            buttons: [
                { name: "YouTube", url: "https://youtube.com" },
                { name: "Netflix", url: "https://netflix.com" },
                { name: "Spotify", url: "https://spotify.com" },
                { name: "Twitch", url: "https://twitch.tv" }
            ]
        }
    ]
};

// Таблица транслитерации для улучшения поиска
const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
    'я': 'ya'
};

// Функция для транслитерации русского текста
function transliterate(text) {
    return text.toLowerCase().split('').map(char => 
        translitMap[char] || char
    ).join('');
}

// Функция для нормализации поискового запроса
function normalizeSearchQuery(query) {
    return query.toLowerCase().replace(/\s+/g, '');
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupSearch();
});

// Рендер категорий и кнопок
function renderCategories(filterText = '') {
    const categoriesContainer = document.querySelector('.categories-container');
    categoriesContainer.innerHTML = '';

    const normalizedFilter = normalizeSearchQuery(filterText);
    
    appData.categories.forEach(category => {
        // Фильтрация кнопок по тексту поиска
        const filteredButtons = category.buttons.filter(button => {
            // Проверяем все возможные варианты названия
            const nameEn = normalizeSearchQuery(button.name);
            const nameRu = button.nameRu ? normalizeSearchQuery(button.nameRu) : '';
            const translitNameRu = button.nameRu ? transliterate(button.nameRu) : '';
            
            return nameEn.includes(normalizedFilter) || 
                   nameRu.includes(normalizedFilter) ||
                   translitNameRu.includes(normalizedFilter);
        });

        // Показываем категорию только если есть кнопки после фильтрации
        if (filteredButtons.length > 0 || filterText === '') {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.innerHTML = `
                <h2>${category.name}</h2>
                <div class="buttons-container">
                    ${(filterText ? filteredButtons : category.buttons).map(button => `
                        <a href="${button.url}" target="_blank" class="button">${button.name}</a>
                    `).join('')}
                </div>
            `;
            categoriesContainer.appendChild(categoryElement);
        }
    });
}

// Настройка поиска с подсказками
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    // Функция для показа подсказок
    function showSuggestions(query) {
        if (!query) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const normalizedQuery = normalizeSearchQuery(query);
        const allButtons = appData.categories.flatMap(category => category.buttons);
        
        const suggestions = allButtons.filter(button => {
            const nameEn = normalizeSearchQuery(button.name);
            const nameRu = button.nameRu ? normalizeSearchQuery(button.nameRu) : '';
            const translitNameRu = button.nameRu ? transliterate(button.nameRu) : '';
            
            return nameEn.includes(normalizedQuery) || 
                   nameRu.includes(normalizedQuery) ||
                   translitNameRu.includes(normalizedQuery);
        }).slice(0, 5); // Ограничиваем 5 подсказками

        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions.map(button => `
                <div class="suggestion-item" data-name="${button.name}">
                    ${button.name}${button.nameRu ? ` (${button.nameRu})` : ''}
                </div>
            `).join('');
            
            suggestionsContainer.style.display = 'block';
            
            // Добавляем обработчики клика на подсказки
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', function() {
                    searchInput.value = this.getAttribute('data-name');
                    renderCategories(searchInput.value);
                    suggestionsContainer.style.display = 'none';
                });
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    // Поиск при нажатии кнопки
    searchButton.addEventListener('click', function() {
        renderCategories(searchInput.value);
        suggestionsContainer.style.display = 'none';
    });

    // Поиск при нажатии Enter
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            renderCategories(searchInput.value);
            suggestionsContainer.style.display = 'none';
        }
    });

    // Показ подсказок при вводе
    searchInput.addEventListener('input', function() {
        showSuggestions(this.value);
    });

    // Скрытие подсказок при клике вне поля поиска
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) ){
            suggestionsContainer.style.display = 'none';
        }
    });
}
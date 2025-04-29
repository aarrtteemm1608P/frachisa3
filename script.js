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
                { name: "Arturia - V Collection X", url: "https://vk.com/doc668047561_685580825?hash=YLYAQv6v70dnkKGQDSvZ5ZsW9BH2xY3kzJi7gY3CPEs&dl=BPPeOl7qazRPUbPuT7bHsoXQgItND3E1jV7FTTUdOKT&api=1&no_preview=1" },
                { name: "Solid State Logic - SSL Native Plugins", url: "https://vk.com/doc341261876_584408519?hash=xq268v4OQHVL0QnZ5Zh7pPrnnuzzxWKw3wSCdZmg2eL&dl=wrrvacbh1GYp9Qz2AktJalhAnayqctVj8AA3fqjXxO4&api=1&no_preview=1" },
                { name: "uJAM - Finisher Bundle", url: "https://vk.com/s/v1/doc/REtEJ_XMu6tzcQ2f-hmWsWEqMBcwocl4Q5e9NqATomt4zrLeRwY" },
                { name: "McDSP - Plugins Bundle", url: "https://vk.com/s/v1/doc/DXF6gehLzwv3tWdeD9w-bqFfS0wwP1DngFxEboewGH2YL-Eilz8" },
                { name: "IK Multimedia T-RackS 6 MAX", url: "https://vk.com/s/v1/doc/-C9STG3AFhMnVQWjbx_6rEmPTQqXvSf8GrWdcuu683SxK63aX7o" },
                { name: "D16 Group – Bundle", url: "https://vk.com/doc297599203_650696597?hash=zZUetQcz110KDXK3FlOIlTeS5ZpvuR9n8bfbfRlvzmD&dl=6Qg5zd0Jb1FNAHb6ThFCQ363QAZ1OkOl5vZ8xMWUxHs&api=1&no_preview=1" }
            ]
        },
        {
            id: 2,
            name: "ПЛАГИНЫ ДЛЯ СВИДЕНИЯ",
            buttons: [
                { name: "Oeksound - Soothe2", url: "https://vk.com/doc341261876_584405655?hash=z3rmnUbVLDkFP16sXap2MRZptAjfBhoTgLtyAtOR9Yo&dl=DlGzMzzA32HDuMZjM8IQsC9C3iRmssMWFpfceJjNxng&api=1&no_preview=1" },
                { name: "iZotope - RX 11", url: "https://vk.com/doc668047561_684610357?hash=ztBcnxz6Wca0kuraLXEGsxoBkUKtDRNnEdtfzZZbJB8&dl=klpk0ZZYA6auE4ZLXZi1W45mk89IIB8gJcJoGs1SvXk&api=1&no_preview=1" },
                { name: "Maag EQ4", url: "https://flstudio12-20.com/maag-eq4-skachat-torrent-v1-9.html" },
                { name: "Oeksound - Spiff", url: "https://vk.com/doc341261876_584406185?hash=WC3xAurFfKuvPhZ4A3mC3QblIWek7GBOZ2tkYrKguV0&dl=8Xh1ezCikibgFCnzHNo3szg2xZIukMsBOYKbtA0kLlT&api=1&no_preview=1" },
                { name: "Voxengo MSED", url: "https://guitarist1.ru/voxengo-msed-v3-0.html" },
                { name: "Antares - Auto-Tune Pro", url: "https://vk.com/doc668047561_683321360?hash=Dce7FkYaH6BQ406QHYk7Kc1vV8OzT9bw6NMsbz5yQU8&dl=HxrpzXbN29fkZhYaB45orm6OAgOew5Ep97snje7uMqT&api=1&no_preview=1" },
                { name: "Antares - Auto-Tune Pro X", url: "https://flstudio12-20.com/antares-auto-tune-pro-x-v10-1-0-rev2.html" },
                { name: "Antares - Auto-Tune EFX+", url: "https://vk.com/s/v1/doc/qY3l_kD589f6zxyGqrRm3WtkwT4vCA9S_kBwzoKx6idMQpzo1Ko" },
                { name: "Antares - Auto-Tune Vocal-EQ", url: "https://vk.com/s/v1/doc/T1n5WaBbuw6okOC7tX8gmsNn1TWmja16Uwvczw2e99VZcZfJRwg" },
                { name: "Transient Shaper", url: "https://flstudio12-20.com/transient-shaper-v2-5-10.html" },
                { name: "UVI - Opal", url: "https://vk.com/doc297599203_663768644?hash=9yojSbyI2o83Z1iHCW93It3AVZ19cnZS06lgayZXVZk&dl=9TXFUR22YgprZQOWVqksgPApzznigFztwZ2CfyZ1NXL&api=1&no_preview=1" },
                { name: "Pulsar Audio - 1178", url: "https://vk.com/doc341261876_590287262?hash=RnHoWrldPRiXXMUfBQIpmuPKZp1yQc4P3Tmv3jRIYHo&dl=AxCF3aVL1OoD3Ulvg5HuU159uliOwYkwp9tD6M3quKc&api=1&no_preview=1" },
                { name: "Cytomic - The Glue", url: "https://vk.com/doc297599203_654486509?hash=K4jnFsKAiUUOuaMDRFUp74r6nLVF8ZRz4WWT5wyxI0P&dl=fG0Q1OrjE9mIShaw6RiNaAvFqSxeHR58rDJC9EzxXzc&api=1&no_preview=1" },
                { name: "Slate Digital - Fresh Air", url: "https://vk.com/doc289321871_643362431?hash=lBZeM3ZQDuruR04LoeIt8FZB7KPetkLvYKhJN1d4D68&dl=JwnVZKwZeMd75iTZDXZEFUyuqyDaGUiamV5aZ6GDh3w&api=1&no_preview=1" },
                { name: "Slate Digital - Virtual Mix Rack", url: "https://vk.com/doc341261876_612784136?hash=12iN6Apywki9ZRX0N3gJEQhzfnMZaPmYqJfDsGh3IKw&dl=bKGZhg3Jwdw50gxtifvT5BLxwliX5dHzY3rG0QQXFc0&api=1&no_preview=1" },
                { name: "cramit", url: "https://sixthsample.com/cramit/" },
            ]
        },
        {
            id: 3,
            name: "ПЛАГИНЫ ДЛЯ МАСТЕРИНГА",
            buttons: [
                { name: "Shadow Hills Mastering Compressor", url: "https://flstudio12-20.com/shadow-hills-mastering-compressor-v1-5-1.html" },
                { name: "iZotope - Ozone 11", url: "https://vk.com/doc668047561_670795961?hash=JzmFRiHMvn2pWhNqw2u9tThdS3iUVPzJ65iTzEZDd1g&dl=85oRfZPiJvSta0FfTRuq6nkN1jQaaZXCldzarHeKNbc&api=1&no_preview=1" },
                { name: "iZotope - Tonal Balance Control 2", url: "https://vk.com/doc668047561_677386409?hash=uGtQlgP2h5PhzWYGJEXn2Tb7w8NYBi66xoLeNdrMfv4&dl=txxIbflpntvxz4rgDgz4oWJJQi0EAHV10DvNZdbou0D&api=1&no_preview=1" },
                { name: "The Softube - Tube-Tech Equalizers Mk II", url: "https://vk.com/doc341261876_584992956?hash=E0P98Rt78mczSzZM24dic3P19oMriKvAhV0BOsylN9k&dl=qMN4KZJe5jHTtMvYyBzfHzaP3Bm7celZ1PHvWnfR5j4&api=1&no_preview=1" },
                { name: "Sonnox Oxford Inflator", url: "https://guitarist1.ru/oxford-inflator-1-5-1.html" },
                { name: "Newfangled Saturate", url: "https://guitarist1.ru/newfangled-saturate-vst-v1-10-0.html" }
            ]
        },
        {
            id: 4,
            name: "ПЛАГИНЫ АНАЛИЗАТОРЫ",
            buttons: [
                { name: "Voxengo - SPAN Plus", url: "https://vk.com/doc297599203_651926704?hash=BZFMjdh9AShFBJb2jwFNzk2aXAcPwslTHbmsoPz9L0o&dl=ZpJqkAmP5d8Aq8EsXBdv8R7jOlZsMUzdEk5EL4YITjs&api=1&no_preview=1" },
                { name: "A.O.M. Factory - Invisible Limite", url: "https://vk.com/doc46605165_437356507?hash=zWMY6LprMNWETnwgqTtSr0HI1EVUPFWDkE943UTUpeD&dl=ZlswECM9jlOyOjSQQZQ7sVU5DY2JWhdWC2zQ4Vi810w&api=1&no_preview=1" },
                { name: "PeakEater v0.5.1", url: "https://github.com/vvvar/PeakEater/releases/tag/v0.8.2" }
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

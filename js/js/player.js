// Данные об аниме (в будущем это может быть JSON файл)
const animeDatabase = {
    "oshi-no-ko": {
        title: "Звёздное дитя",
        episodes: [
            { id: 1, url: "shttps://www.anilibria.tv/public/iframe.php?id=10089" },
            { id: 2, url: "videos/oshi_ep2.mp4" }
        ]
    },
    "hells-paradise": {
        title: "Адский рай",
        episodes: [
            { id: 1, url: "videos/hell_ep1.mp4" }
        ]
    }
};

// 1. Получаем ID аниме из ссылки
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('anime');
const currentAnime = animeDatabase[animeId];

if (currentAnime) {
    // 2. Ставим заголовок
    document.getElementById('anime-title').innerText = currentAnime.title;

    // 3. Создаем кнопки серий
    const listContainer = document.getElementById('episode-list');
    currentAnime.episodes.forEach(ep => {
        const btn = document.createElement('button');
        btn.className = 'ep-btn';
        btn.innerText = `Серия ${ep.id}`;
        btn.onclick = () => {
            const player = document.getElementById('video-player');
            player.src = ep.url;
            player.play();
        };
        listContainer.appendChild(btn);
    });
} else {
    document.getElementById('anime-title').innerText = "Аниме не найдено";
}
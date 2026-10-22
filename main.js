/*
 * PeliYA - Catálogo de películas
 * Paradigma: programación funcional (map, filter, reduce, actualizaciones inmutables)
 * Estado: arreglo `movies` en memoria (single source of truth), persistido en localStorage.
 * La interfaz se redibuja por completo desde ese estado con render().
 */

const initialMovies = [
    // --- ACCIÓN ---
    {
        id: 1,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        genre: "Acción",
        year: 2008,
        rating: 9.0,
        poster: "img/the-dark-knight.jpg",
        isFavorite: false
    },
    {
        id: 2,
        title: "Gladiador",
        director: "Ridley Scott",
        genre: "Acción",
        year: 2000,
        rating: 8.5,
        poster: "img/gladiador.jpg",
        isFavorite: false
    },
    {
        id: 3,
        title: "Spider-Man: No Way Home",
        director: "Jon Watts",
        genre: "Acción",
        year: 2021,
        rating: 8.2,
        poster: "img/spider-man-no-way-home.jpg",
        isFavorite: false
    },

    // --- CIENCIA FICCIÓN ---
    {
        id: 4,
        title: "Inception (Origen)",
        director: "Christopher Nolan",
        genre: "Ciencia Ficción",
        year: 2010,
        rating: 8.8,
        poster: "img/inception.jpg",
        isFavorite: false
    },
    {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Ciencia Ficción",
        year: 2014,
        rating: 8.7,
        poster: "img/interstellar.jpg",
        isFavorite: false
    },
    {
        id: 6,
        title: "Matrix",
        director: "Lana y Lilly Wachowski",
        genre: "Ciencia Ficción",
        year: 1999,
        rating: 8.7,
        poster: "img/matrix.jpg",
        isFavorite: false
    },

    // --- DRAMA ---
    {
        id: 7,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Drama",
        year: 1994,
        rating: 8.9,
        poster: "img/pulp-fiction.jpg",
        isFavorite: false
    },
    {
        id: 8,
        title: "Oppenheimer",
        director: "Christopher Nolan",
        genre: "Drama",
        year: 2023,
        rating: 8.9,
        poster: "img/oppenheimer.jpg",
        isFavorite: false
    },
    {
        id: 9,
        title: "El Club de la Pelea",
        director: "David Fincher",
        genre: "Drama",
        year: 1999,
        rating: 8.8,
        poster: "img/el-club-de-la-pelea.jpg",
        isFavorite: false
    },

    // --- ANIMACIÓN ---
    {
        id: 10,
        title: "Spider-Man: Across the Spider-Verse",
        director: "Joaquim Dos Santos",
        genre: "Animación",
        year: 2023,
        rating: 8.7,
        poster: "img/spider-verse.jpg",
        isFavorite: false
    },
    {
        id: 11,
        title: "Coco",
        director: "Lee Unkrich",
        genre: "Animación",
        year: 2017,
        rating: 8.4,
        poster: "img/coco.jpg",
        isFavorite: false
    },
    {
        id: 12,
        title: "El Viaje de Chihiro",
        director: "Hayao Miyazaki",
        genre: "Animación",
        year: 2001,
        rating: 8.6,
        poster: "img/chihiro.jpg",
        isFavorite: false
    },

    // --- AVENTURA ---
    {
        id: 13,
        title: "Avatar: El Camino del Agua",
        director: "James Cameron",
        genre: "Aventura",
        year: 2022,
        rating: 7.6,
        poster: "img/avatar.jpg",
        isFavorite: false
    },
    {
        id: 14,
        title: "Jurassic Park",
        director: "Steven Spielberg",
        genre: "Aventura",
        year: 1993,
        rating: 8.2,
        poster: "img/jurassic-park.jpg",
        isFavorite: false
    },
    {
        id: 15,
        title: "El Señor de los Anillos: La Comunidad del Anillo",
        director: "Peter Jackson",
        genre: "Aventura",
        year: 2001,
        rating: 8.8,
        poster: "img/el-senor-de-los-anillos.jpg",
        isFavorite: false
    },

    // --- TERROR ---
    {
        id: 16,
        title: "El Conjuro",
        director: "James Wan",
        genre: "Terror",
        year: 2013,
        rating: 7.5,
        poster: "img/el-conjuro.jpg",
        isFavorite: false
    },
    {
        id: 17,
        title: "It (Eso)",
        director: "Andrés Muschietti",
        genre: "Terror",
        year: 2017,
        rating: 7.3,
        poster: "img/it.jpg",
        isFavorite: false
    },
    {
        id: 18,
        title: "El Resplandor",
        director: "Stanley Kubrick",
        genre: "Terror",
        year: 1980,
        rating: 8.4,
        poster: "img/el-resplandor.jpg",
        isFavorite: false
    },

    // --- COMEDIA ---
    {
        id: 19,
        title: "Shrek 2",
        director: "Andrew Adamson",
        genre: "Comedia",
        year: 2004,
        rating: 7.3,
        poster: "img/shrek-2.jpg",
        isFavorite: false
    },
    {
        id: 20,
        title: "Superbad (Superbandidaje)",
        director: "Greg Mottola",
        genre: "Comedia",
        year: 2007,
        rating: 7.6,
        poster: "img/superbad.jpg",
        isFavorite: false
    },
    {
        id: 21,
        title: "¿Qué pasó ayer? (The Hangover)",
        director: "Todd Phillips",
        genre: "Comedia",
        year: 2009,
        rating: 7.7,
        poster: "img/que-paso-ayer.jpg",
        isFavorite: false
    }
];

// Color de fondo de cada póster según el género
const GENRE_COLORS = {
    "Acción": "#b3261e",
    "Ciencia Ficción": "#1565c0",
    "Drama": "#6a1b9a",
    "Animación": "#ef6c00",
    "Terror": "#263238",
    "Aventura": "#2e7d32",
    "Comedia": "#c77800"
};

// Escapa caracteres especiales para poder usar el texto dentro de un SVG
function escapeXml(text) {
    return text.replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
    }[char]));
}

// Parte el título en líneas cortas para que entre en el póster
function wrapTitle(title, maxChars = 14) {
    const lines = [];
    let current = '';

    title.split(' ').forEach(word => {
        const candidate = current ? `${current} ${word}` : word;
        if (candidate.length > maxChars && current) {
            lines.push(current);
            current = word;
        } else {
            current = candidate;
        }
    });

    if (current) lines.push(current);
    return lines.slice(0, 5);
}

// Genera un póster SVG con el título y el color del género (no depende de internet)
function generatePoster(title, genre) {
    const color = GENRE_COLORS[genre] || "#2b2b2b";
    const lines = wrapTitle(title);
    const startY = 375 - ((lines.length - 1) * 30);

    const titleLines = lines.map((line, i) =>
        `<text x="250" y="${startY + i * 60}" fill="#fff" font-size="46" font-weight="bold" font-family="sans-serif" text-anchor="middle">${escapeXml(line)}</text>`
    ).join('');

    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750">' +
        `<rect width="100%" height="100%" fill="${color}"/>` +
        '<rect x="20" y="20" width="460" height="710" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="4"/>' +
        titleLines +
        `<text x="250" y="690" fill="rgba(255,255,255,0.8)" font-size="28" font-family="sans-serif" text-anchor="middle">${escapeXml(genre)}</text>` +
        '</svg>';

    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Carga el estado guardado; si no existe o está corrupto, usa el catálogo inicial
function loadMovies() {
    try {
        const saved = JSON.parse(localStorage.getItem('peliya_movies'));
        return Array.isArray(saved) ? saved : initialMovies;
    } catch (error) {
        console.warn('⚠️ Datos guardados inválidos, se usa el catálogo inicial.', error);
        return initialMovies;
    }
}

// Estado de la aplicación (single source of truth)
let movies = loadMovies();

// Referencias al DOM
const moviesGrid = document.getElementById('movies-grid');
const inputSearch = document.getElementById('input-search');
const selectGenre = document.getElementById('select-genre');
const selectFilterType = document.getElementById('select-filter-type');
const statTotal = document.getElementById('stat-total');
const statFavs = document.getElementById('stat-favs');
const sectionTitle = document.getElementById('section-title');
const formAddMovie = document.getElementById('form-add-movie');

function saveAndLogState() {
    localStorage.setItem('peliya_movies', JSON.stringify(movies));
    console.log('🎬 Estado de PeliYA actualizado en memoria y LocalStorage:', movies);
}

function addMovie(title, director, year, rating, genre, poster) {
    const hasValidPoster = /^https?:\/\//i.test(poster);

    const newMovie = {
        id: Date.now(),
        title,
        director,
        year: Number(year),
        rating: Number(rating),
        genre,
        poster: hasValidPoster ? poster : "",
        isFavorite: false
    };

    movies = [newMovie, ...movies];
    saveAndLogState();
    render();
}

function deleteMovie(id) {
    movies = movies.filter(movie => movie.id !== id);
    saveAndLogState();
    render();
}

function toggleFavorite(id) {
    movies = movies.map(movie =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    );
    saveAndLogState();
    render();
}

function getFilteredMovies() {
    const query = inputSearch.value.toLowerCase().trim();
    const selectedGenre = selectGenre.value;
    const filterType = selectFilterType.value;

    return movies.filter(movie => {
        const matchesQuery = movie.title.toLowerCase().includes(query) ||
                             movie.director.toLowerCase().includes(query);
        const matchesGenre = selectedGenre === 'Todos' || movie.genre === selectedGenre;
        const matchesFav = filterType === 'todas' || movie.isFavorite;

        return matchesQuery && matchesGenre && matchesFav;
    });
}

function updateStats() {
    const total = movies.length;
    const favsCount = movies.reduce((acc, m) => m.isFavorite ? acc + 1 : acc, 0);

    statTotal.textContent = total;
    statFavs.textContent = favsCount;
}

// Crea la card de una película con textContent (evita inyección de HTML)
function createMovieCard(movie) {
    const card = document.createElement('article');
    card.className = 'movie-card';

    // Póster + calificación
    const posterContainer = document.createElement('div');
    posterContainer.className = 'poster-container';

    const img = document.createElement('img');
    const generatedPoster = generatePoster(movie.title, movie.genre);
    img.src = movie.poster || generatedPoster;
    img.alt = movie.title;
    img.loading = 'lazy';
    img.addEventListener('error', () => { img.src = generatedPoster; }, { once: true });

    const badge = document.createElement('span');
    badge.className = 'badge-rating';
    badge.textContent = `★ ${movie.rating}`;

    posterContainer.append(img, badge);

    // Datos
    const info = document.createElement('div');
    info.className = 'movie-info';

    const text = document.createElement('div');

    const title = document.createElement('h3');
    title.className = 'movie-title';
    title.textContent = movie.title;

    const meta = document.createElement('p');
    meta.className = 'movie-details';
    meta.textContent = `${movie.year} • ${movie.genre}`;

    const director = document.createElement('p');
    director.className = 'movie-details';
    director.textContent = `Dir: ${movie.director}`;

    text.append(title, meta, director);

    // Acciones
    const actions = document.createElement('div');
    actions.className = 'movie-actions';

    const btnFav = document.createElement('button');
    btnFav.className = `btn-fav ${movie.isFavorite ? 'active' : ''}`.trim();
    btnFav.dataset.id = movie.id;
    btnFav.textContent = movie.isFavorite ? '♥ En Favoritos' : '♡ Favoritos';

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.dataset.id = movie.id;
    btnDelete.setAttribute('aria-label', `Eliminar ${movie.title}`);
    btnDelete.textContent = '🗑️';

    actions.append(btnFav, btnDelete);
    info.append(text, actions);
    card.append(posterContainer, info);

    return card;
}

function render() {
    moviesGrid.innerHTML = '';

    const filteredMovies = getFilteredMovies();
    updateStats();

    sectionTitle.textContent = selectFilterType.value === 'favoritas'
        ? '⭐ Mis Películas Favoritas'
        : 'Catálogo Completo';

    if (filteredMovies.length === 0) {
        moviesGrid.innerHTML = `
            <div class="empty-message">
                <p>No se encontraron películas que coincidan con la búsqueda.</p>
            </div>
        `;
        return;
    }

    filteredMovies.forEach(movie => {
        moviesGrid.appendChild(createMovieCard(movie));
    });
}

// Eventos
if (formAddMovie) {
    formAddMovie.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('add-title').value.trim();
        const director = document.getElementById('add-director').value.trim();
        const year = document.getElementById('add-year').value;
        const rating = document.getElementById('add-rating').value;
        const genre = document.getElementById('add-genre').value;
        const poster = document.getElementById('add-poster').value.trim();

        if (title && director) {
            addMovie(title, director, year, rating, genre, poster);
            formAddMovie.reset();
        }
    });
}

inputSearch.addEventListener('input', render);
selectGenre.addEventListener('change', render);
selectFilterType.addEventListener('change', render);

// Delegación de eventos: un solo listener para todos los botones de las cards
moviesGrid.addEventListener('click', (e) => {
    const btnFav = e.target.closest('.btn-fav');
    const btnDelete = e.target.closest('.btn-delete');

    if (btnFav) {
        const id = Number(btnFav.dataset.id);
        toggleFavorite(id);
    }

    if (btnDelete) {
        const id = Number(btnDelete.dataset.id);
        deleteMovie(id);
    }
});

console.log('🚀 PeliYA cargado correctamente con ' + movies.length + ' películas');
render();
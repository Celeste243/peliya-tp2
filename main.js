
const initialMovies = [
  // --- ACCIÓN ---
  {
    id: 1,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Acción",
    year: 2008,
    rating: 9.0,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
    isFavorite: false
  },
  {
    id: 2,
    title: "Gladiador",
    director: "Ridley Scott",
    genre: "Acción",
    year: 2000,
    rating: 8.5,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
    isFavorite: false
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    director: "Jon Watts",
    genre: "Acción",
    year: 2021,
    rating: 8.2,
    poster: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    isFavorite: false
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Ciencia Ficción",
    year: 2014,
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    isFavorite: false
  },
  {
    id: 6,
    title: "Matrix",
    director: "Lana y Lilly Wachowski",
    genre: "Ciencia Ficción",
    year: 1999,
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80",
    isFavorite: false
  },
  {
    id: 8,
    title: "Oppenheimer",
    director: "Christopher Nolan",
    genre: "Drama",
    year: 2023,
    rating: 8.9,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    isFavorite: false
  },
  {
    id: 9,
    title: "El Club de la Pelea",
    director: "David Fincher",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    poster: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80",
    isFavorite: false
  },
  {
    id: 11,
    title: "Coco",
    director: "Lee Unkrich",
    genre: "Animación",
    year: 2017,
    rating: 8.4,
    poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=500&q=80",
    isFavorite: false
  },
  {
    id: 12,
    title: "El Viaje de Chihiro",
    director: "Hayao Miyazaki",
    genre: "Animación",
    year: 2001,
    rating: 8.6,
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    isFavorite: false
  },
  {
    id: 14,
    title: "Jurassic Park",
    director: "Steven Spielberg",
    genre: "Aventura",
    year: 1993,
    rating: 8.2,
    poster: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=500&q=80",
    isFavorite: false
  },
  {
    id: 15,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    genre: "Aventura",
    year: 2001,
    rating: 8.8,
    poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80",
    isFavorite: false
  },
  {
    id: 17,
    title: "It (Eso)",
    director: "Andrés Muschietti",
    genre: "Terror",
    year: 2017,
    rating: 7.3,
    poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&q=80",
    isFavorite: false
  },
  {
    id: 18,
    title: "El Resplandor",
    director: "Stanley Kubrick",
    genre: "Terror",
    year: 1980,
    rating: 8.4,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
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
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80",
    isFavorite: false
  },
  {
    id: 20,
    title: "Superbad (Superbandidaje)",
    director: "Greg Mottola",
    genre: "Comedia",
    year: 2007,
    rating: 7.6,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
    isFavorite: false
  },
  {
    id: 21,
    title: "¿Qué pasó ayer? (The Hangover)",
    director: "Todd Phillips",
    genre: "Comedia",
    year: 2009,
    rating: 7.7,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80",
    isFavorite: false
  }
];


let movies = JSON.parse(localStorage.getItem('peliya_movies')) || initialMovies;

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


function addMovie(title, director, year, rating, genre) {
  const newMovie = {
    id: Date.now(),
    title,
    director,
    year: Number(year),
    rating: Number(rating),
    genre,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
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
    const card = document.createElement('article');
    card.className = 'movie-card';

    card.innerHTML = `
      <div class="poster-container">
        <img src="${movie.poster}" alt="${movie.title}">
        <span class="badge-rating">★ ${movie.rating}</span>
      </div>
      <div class="movie-info">
        <div>
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-details">${movie.year} • ${movie.genre}</p>
          <p class="movie-details">Dir: ${movie.director}</p>
        </div>
        <div class="movie-actions">
          <button class="btn-fav ${movie.isFavorite ? 'active' : ''}" data-id="${movie.id}">
            ${movie.isFavorite ? '♥ En Favoritos' : '♡ Favoritos'}
          </button>
          <button class="btn-delete" data-id="${movie.id}">
            🗑️
          </button>
        </div>
      </div>
    `;

    moviesGrid.appendChild(card);
  });
}


if (formAddMovie) {
  formAddMovie.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('add-title').value.trim();
    const director = document.getElementById('add-director').value.trim();
    const year = document.getElementById('add-year').value;
    const rating = document.getElementById('add-rating').value;
    const genre = document.getElementById('add-genre').value;

    if (title && director) {
      addMovie(title, director, year, rating, genre);
      formAddMovie.reset();
    }
  });
}

inputSearch.addEventListener('input', render);
selectGenre.addEventListener('change', render);
selectFilterType.addEventListener('change', render);

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
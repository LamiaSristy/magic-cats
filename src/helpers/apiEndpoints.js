const apiKey = 'fa8db0e137149da641b63119953e0b8a';

export const catBreedsUrl = `https://api.thecatapi.com/v1/breeds`;

export const catDetailUrl = id => `https://api.thecatapi.com/v1/breeds/${id}`;

export const searchUrl = query => `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

export const catImageUrl = image_id => `https://cdn2.thecatapi.com/images/${image_id}.jpg`;


// export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

// export const movieDetailsUrl = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

// export const movieTrailerUrl = id => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

// export const recommendationsUrl = id => `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;

// export const searchUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`;

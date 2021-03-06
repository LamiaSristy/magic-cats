export const catBreedsUrl = 'https://api.thecatapi.com/v1/breeds';

export const catDetailUrl = id => `https://api.thecatapi.com/v1/breeds/${id}`;

export const searchUrl = query => `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

export const catImageUrl = imageId => `https://cdn2.thecatapi.com/images/${imageId}.jpg`;

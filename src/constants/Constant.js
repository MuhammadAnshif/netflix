export const base_url = 'https://api.themoviedb.org/3';
export const API_KEY = '99de0f25483b2c00f1ec05f7273afe77';
export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const originals = `/discover/tv?api_key=${API_KEY}&page=3&with_networks=213`;
export const popular = `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`;
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const show = `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=2&with_networks=213`;
export const blockBuster = `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28,12`;

export const url = {
  Popular: `${base_url}${popular}`,
  Trending: `${base_url}${trending}`,
  Shows: `${base_url}${show}`,
  Blockbuster: `${base_url}${blockBuster}`,
  Originals: `${base_url}${originals}`,
};
export function filterMovies(movies, searchQuery) {
  const moviesByQuery = movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase();
    const searchStr = searchQuery.toLowerCase().trim();
    return strRu.indexOf(searchStr) !== -1;
  });

  return moviesByQuery;
}

export function filterShortMovies(movies) {
  return movies.filter((item) => {
    return item.duration <= 40;
  });
}

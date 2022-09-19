import React from "react";

export function filterShortMovies(movies) {
  return movies.filter((item) => {
    return item.duration <= 40;
  });
}

export function filterMovies(movies, searchQuery, shortMovies) {
  const moviesByQuery = movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase();
    const searchStr = searchQuery.toLowerCase().trim();
    return strRu.indexOf(searchStr) !== -1;
  });

  if (shortMovies === "on") {
    return filterShortMovies(moviesByQuery);
  }

  return moviesByQuery;
}

export function useWindowWidth() {
  const getWindowWidth = React.useCallback(() => window.innerWidth, []);

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowWidth]);

  return windowWidth;
}

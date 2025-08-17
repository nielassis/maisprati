export class FavoriteMovie {
  constructor(imdbId, Title, Year, Poster) {
    this.imdbId = imdbId;
    this.Title = Title;
    this.Year = Year;
    this.Poster = Poster;
  }

  async addFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    favorites.push(this);
    const response = localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(favorites)
    );
    return response;
  }

  async removeFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const index = favorites.findIndex((movie) => movie.imdbId === this.imdbId);
    if (index !== -1) {
      favorites.splice(index, 1);
      const response = localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(favorites)
      );
      return response;
    }
    return null;
  }

  async getFavorite() {
    const response = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    return response;
  }
}

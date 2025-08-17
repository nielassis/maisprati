export class FavoriteMovie {
  constructor(imdbID, Title, Year, Poster) {
    this.imdbID = imdbID;
    this.Title = Title;
    this.Year = Year;
    this.Poster = Poster;
  }

  async addFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    favorites.push(this);
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }

  async removeFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const index = favorites.findIndex((movie) => movie.imdbID === this.imdbID);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    }
  }

  async getFavorite() {
    return JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  }
}

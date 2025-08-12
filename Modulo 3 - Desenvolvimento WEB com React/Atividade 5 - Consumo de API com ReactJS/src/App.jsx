import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchPage/search-page";
import DetailsPage from "./pages/detailsPage/details-page";
import FavoritesPage from "./pages/favoritesPage/favorites-page";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div id="root" className="app-root">
        <Header />

        <main className="app-container">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/detalhes/:id" element={<DetailsPage />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

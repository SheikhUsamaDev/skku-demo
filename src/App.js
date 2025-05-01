import './App.scss';
import SearchResultPage from './components/SearchResultPage.js';
import './responsive.scss';
import Home from './screens/Home.js';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

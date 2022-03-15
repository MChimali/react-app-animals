import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimalDisplayContainer } from "pods/animal-display";

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AnimalDisplayContainer list="perros" />} />
        <Route
          path="/dogs"
          element={<AnimalDisplayContainer list="perros" />}
        />
        <Route path="/cats" element={<AnimalDisplayContainer list="gatos" />} />
      </Routes>
    </HashRouter>
  );
};

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimalDisplayContainer } from "pods/animal-display";

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AnimalDisplayContainer />} />
        <Route path="/:animal" element={<AnimalDisplayContainer />} />
      </Routes>
    </HashRouter>
  );
};

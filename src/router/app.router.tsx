import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimalDisplayContainer } from "pods/animal-display";
import {Header} from "pods/header-component"

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <div style={{display:"flex", flexDirection:"column"}}>
      <Header/>
      <Routes>
        <Route path="/" element={<AnimalDisplayContainer />} />
        <Route path="/:animal" element={<AnimalDisplayContainer />} />
      </Routes>
      </div>
    </HashRouter>
  );
};

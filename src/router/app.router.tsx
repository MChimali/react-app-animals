import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimalDisplayContainer } from "pods/animal-display";
import { Header } from "pods/header-component";
import {CartContainer} from "pods/shopping-cart";
import { cartFlagContext } from "core/cart-flag.context";

export const AppRouter: React.FC = () => {
  const { cartFlag } = React.useContext(cartFlagContext);
  return (
    <HashRouter>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{display:"flex"}}>
          <Routes>
            <Route path="/" element={<AnimalDisplayContainer />} />
            <Route path="/:animal" element={<AnimalDisplayContainer />} />
          </Routes>
          {cartFlag && <CartContainer/>}
        </div>
      </div>
    </HashRouter>
  );
};

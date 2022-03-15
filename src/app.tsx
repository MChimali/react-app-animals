import React from "react";
import { CartContainer } from "pods/shopping-cart";

import { AppRouter } from "./router/app.router";

export const App = () => {
  return (
    <div>
      <AppRouter />
      <CartContainer />
    </div>
  );
};

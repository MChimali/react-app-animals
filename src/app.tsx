import React from "react";
import { CartContainer } from "pods/shopping-cart";
import { AppRouter } from "./router/app.router";
import { CartListProvider } from "./core/cart-items.context";
import { CartFlagProvider } from "core/cart-flag.context";

export const App = () => {
  return (
    <CartListProvider>
      <CartFlagProvider>
        <AppRouter />
      </CartFlagProvider>
    </CartListProvider>
  );
};

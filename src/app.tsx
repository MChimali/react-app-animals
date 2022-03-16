import React from "react";
import { CartContainer } from "pods/shopping-cart";
import { AppRouter } from "./router/app.router";
import { makeStyles } from "@material-ui/core/styles";
import { CartItemsProvider } from "./core/cart-items.context";

const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  text: { display: "inline-block" },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <CartItemsProvider>
      <div className={classes.flexContainer}>
        <AppRouter />
        <CartContainer />
      </div>
    </CartItemsProvider>
  );
};

import React from "react";
import { CartContainer } from "pods/shopping-cart";
import { AppRouter } from "./router/app.router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  flexContainer: { display: "flex", justifyContent:"space-between", alignItems: "stretch", alignContent: "stretch" },
  text: { display: "inline-block" },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <AppRouter />
      <CartContainer />
    </div>
  );
};

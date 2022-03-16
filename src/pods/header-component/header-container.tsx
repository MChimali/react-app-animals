import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "../../router/routes";
import { cartFlagContext } from "core/cart-flag.context";

const useStyles = makeStyles(() => ({
  link: { margin: "0.8rem" },
  linkHeader: { background: "#CFD5FB", padding: "1em", display: "flex", justifyContent:"space-between" },
}));

export const Header = () => {
  const { cartFlag, setCartFlag } = React.useContext(cartFlagContext);
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = (animal: string) => {
    navigate(linkRoutes.animal(animal));
  };

  return (
    <>
      <div className={classes.linkHeader}>
        <div>
          <button onClick={() => handleNavigate("cats")}>ir a gatitos</button>
          <button onClick={() => handleNavigate("dogs")}>ir a perritos</button>
        </div>
        <div>
          <button onClick={() => setCartFlag(!cartFlag)}>
            {cartFlag ? "hide cart" : "display cart"}
          </button>
        </div>
      </div>
    </>
  );
};

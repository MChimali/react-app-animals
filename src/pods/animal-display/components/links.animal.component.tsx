import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../../router/routes";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "../../../router/routes";

const useStyles = makeStyles(() => ({
  link: { margin: "0.8rem" },
  linkHeader: { background: "#CFD5FB", padding: "1em" },
}));

export const LinkToLists = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = (animal: string) => {
    navigate(linkRoutes.animal(animal));
  };

  return (
    <>
      <div className={classes.linkHeader}>
        <button onClick={()=>handleNavigate("cats")}>ir a gatitos</button>
        <button onClick={()=>handleNavigate("dogs")}>ir a perritos</button>
      </div>
    </>
  );
};

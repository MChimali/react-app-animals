import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../../router/routes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link:{margin:"0.8rem", },
  linkHeader:{background:"#CFD5FB", padding:"1em"}
}));

export const LinkToLists = () => {
    const classes = useStyles();
    
  return (
    <>
      <div className={classes.linkHeader}>
        <Link className={classes.link} to={switchRoutes.cats}>Mostrar gatos</Link>
        <Link to={switchRoutes.dogs}>Mostrar perros</Link>
      </div>
    </>
  );
};

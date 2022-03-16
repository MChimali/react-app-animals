import React from "react";
import { LinkToLists } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { CropLandscapeSharp } from "@material-ui/icons";
interface Props {
  list: any;
}

const useStyles = makeStyles(() => ({
  flexItems: { flexGrow: 2 },
}));

export const AnimalDisplayComponent: React.FC<Props> = (props) => {
  const { list } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexItems}>
        <LinkToLists />
        <h1>{list}</h1>
      </div>
    </>
  );
};

import React from "react";
import { LinkToLists, AnimalOptions } from "./components";
import { makeStyles } from "@material-ui/core/styles";
import { PictureInfo } from "./api/api.model";

interface Props {
  list: PictureInfo[];
}

const useStyles = makeStyles(() => ({
  flexItems: { flexGrow: 2 },
}));

export const AnimalDisplayComponent: React.FC<Props> = (props) => {
  const { list } = props;
  const classes = useStyles();

  return (
    <div className={classes.flexItems}>
      <AnimalOptions list={list} />
    </div>
  );
};

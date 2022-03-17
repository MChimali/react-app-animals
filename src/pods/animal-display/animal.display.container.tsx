import React from "react";
import { AnimalDisplayComponent } from "./animal.display.component";
import { useParams, useLocation } from "react-router-dom";
import { getList } from "./api/api";

interface Props {}
export const AnimalDisplayContainer: React.FC<Props> = (props) => {
  const [list, setList] = React.useState([]);

  const { animal } = useParams();
  const location = useLocation();

  React.useEffect(() => {
    getList(animal).then(setList);
  }, [location.pathname]);

  return <AnimalDisplayComponent list={list} />;
};

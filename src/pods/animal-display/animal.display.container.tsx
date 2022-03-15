import React from "react";
import { AnimalDisplayComponent } from "./animal.display.component";
interface Props {
  list: any;
}
export const AnimalDisplayContainer: React.FC<Props> = (props) => {
  const { list } = props;
  return (
    <>
      <AnimalDisplayComponent list={list} />
    </>
  );
};

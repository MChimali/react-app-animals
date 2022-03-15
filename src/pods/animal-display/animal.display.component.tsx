import React from "react";

interface Props {
  list: any;
}

export const AnimalDisplayComponent: React.FC<Props> = (props) => {
  const { list } = props;
  return (
    <>
      <h1>{list}</h1>
    </>
  );
};
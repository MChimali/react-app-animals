import React from "react";
import { PictureInfo } from "../api/api.model";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox } from "./input.checkbox.animal";
import { cartFlagContext } from "../../../core/cart-items.context";

const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  card: {
    background: "#cfd5fb",
    padding: "3em",
    margin: "2em",
  },
}));
interface Props {
  list: PictureInfo[];
}

export const AnimalOptions: React.FC<Props> = (props) => {
  const { cartList, setCartList } = React.useContext(cartFlagContext);
  const { list } = props;
  const classes = useStyles();
  console.log(cartList)

  return (
    <>
      <div className={classes.flexContainer}>
        {list.map((item) => (
          <div className={classes.card} key={item.id}>
            <img src={item.picUrl} style={{ width: "7rem" }} />
            <div>{item.title}</div>
            <CheckBox key={item.title} animal={item} flag={cartList.some((el) => el.title === item.title)}/>
          </div>
        ))}
      </div>
    </>
  );
};

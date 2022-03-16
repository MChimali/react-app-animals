import React from "react";
import { PictureInfo } from "../api/api.model";
import { makeStyles } from "@material-ui/core/styles";
import { CheckBox } from "./input.checkbox.animal";
import { cartListContext } from "../../../core/cart-items.context";

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
  const { cartList } = React.useContext(cartListContext);
  const { list } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexContainer}>
        {list.map((item) => (
          <div className={classes.card} key={item.id}>
            <img src={item.picUrl} style={{ width: "7rem" }} />
            <div>{item.title}</div>
            
            <CheckBox
              key={item.title}
              animal={item}
              flag={cartList.some((el) => el.title === item.title)}
            />
            {/* {console.log("vamos a ver",cartList.some((el) => el.title === item.title))} */}
          </div>
        ))}
      </div>
    </>
  );
};

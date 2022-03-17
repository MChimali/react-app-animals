import React from "react";
import { PictureInfo } from "../api/api.model";
import { cartListContext } from "../../../core/cart-items.context";

interface Props {
  animal: PictureInfo;
  flag: boolean;
}
export const CheckBox: React.FC<Props> = (props) => {
  const { animal, flag } = props;
  const { cartList, setCartList } = React.useContext(cartListContext);
  const [carted, setCarted] = React.useState(flag);
  console.log(animal.title, carted);

  React.useEffect(() => {
    if (!cartList.some((item) => item.title === animal.title)) {
      setCarted(false);
    }
  }, [cartList]);

  const handleChecked = () => {
    setCarted(!carted);
    if (!cartList.some((item) => item.title === animal.title)) {
      setCartList([...cartList, animal]);
    } else {
      setCartList(
        cartList.filter(function (el) {
          return el.title != animal.title;
        })
      );
    }
  };

  return (
    <input
      key={animal.id}
      type="checkbox"
      checked={carted}
      onChange={handleChecked}
    ></input>
  );
};

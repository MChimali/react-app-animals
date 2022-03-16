import React from "react";
import { PictureInfo } from "./mock.data";

interface CartListContext {
  cartList: PictureInfo[];
  setCartList: (list: PictureInfo[]) => void;
}

export const cartListContext = React.createContext<CartListContext>(null);

export const CartListProvider: React.FC = (props) => {
  const { children } = props;
  const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

  return (
    <cartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </cartListContext.Provider>
  );
};

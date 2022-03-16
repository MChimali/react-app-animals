import React from "react";
import { PictureInfo } from "./mock.data";

interface CartContext {
  cartList: PictureInfo[];
  setCartList: (list: PictureInfo[]) => void;
}

export const cartFlagContext = React.createContext<CartContext>(null);

export const CartItemsProvider: React.FC = (props) => {
  const { children } = props;
  const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

  return (
    <cartFlagContext.Provider value={{ cartList, setCartList }}>
      {children}
    </cartFlagContext.Provider>
  );
};

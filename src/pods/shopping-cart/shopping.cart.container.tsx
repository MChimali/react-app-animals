import React from "react";
import { CartComponent } from "./shopping.cart.component";
interface Props {}
export const CartContainer: React.FC<Props> = (props) => {
  return (
    <>
      <CartComponent />
    </>
  );
};

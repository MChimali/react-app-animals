import React from "react";
import { cartListContext } from "core/cart-items.context";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {}
export const CartContainer: React.FC<Props> = (props) => {
  const { cartList, setCartList } = React.useContext(cartListContext);

  const handleClick = (animal) => {
    setCartList(
      cartList.filter(function (el) {
        return el.title != animal.title;
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "20%",
        marginTop: "2rem",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <ShoppingCartIcon fontSize="medium" />
        <span style={{ marginLeft: "1rem", fontSize: "1.4rem" }}>CART</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {cartList.map((item) => (
          <div key={item.title}>
            <div
              key={item.title}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5rem",
              }}
            >
              <img
                src={item.picUrl}
                style={{
                  width: "3rem",
                  paddingBottom: "0.3rem",
                  paddingTop: "0.3rem",
                  paddingRight: "0.3rem",
                }}
              />
              <span>{item.title}</span>
              <DeleteIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
                onClick={() => handleClick(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

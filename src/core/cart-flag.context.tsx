import React from "react";


interface CartFlagContext {
  cartFlag: boolean;
  setCartFlag: (el: boolean) => void;
}

export const cartFlagContext = React.createContext<CartFlagContext>(null);

export const CartFlagProvider: React.FC = (props) => {
  const { children } = props;
  const [cartFlag, setCartFlag] = React.useState<boolean>(true);

  return (
    <cartFlagContext.Provider value={{ cartFlag, setCartFlag }}>
      {children}
    </cartFlagContext.Provider>
  );
};

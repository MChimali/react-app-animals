import React from "react";

interface cartToggle {
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export const cartFlagContext = React.createContext<cartToggle>(null);

export const cartToggleProvider: React.FC = (props) => {
  const { children } = props;
  const [flag, setFlag] = React.useState(true)

  return <cartFlagContext.Provider value={{flag, setFlag}}>{children}</cartFlagContext.Provider>;
};

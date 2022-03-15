import React from "react";

interface context {}

export const orgContext = React.createContext<context>({});

export const OrgProvider: React.FC = (props) => {
  const { children } = props;  

  return (
    <orgContext.Provider value={{}}>
      {children}
    </orgContext.Provider>
  );
};

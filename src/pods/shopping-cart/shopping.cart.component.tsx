import React from "react";

interface Props {}

export const CartComponent: React.FC<Props> = (props) => {
  //const { flag, setFlag } = React.useContext(cartFlagContext);
  const [flag, setFlag] = React.useState(true)
  return (
    <>
      <div>
        <button onClick={()=>setFlag(!flag)}>{flag?"hide cart":"display cart"}</button>
        {flag && <h1>HOLA RADIOLA</h1>}
      </div>
    </>
  );
};

import React from "react";

function Avtar({
  children,
  backgroundColor,
  px,
  py,
  borderRadius,
  fontSize,
  textAlign,
  color,
}) {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: "pointer",
    marginRight: "15px",
  };
  return <div style={style}>{children}</div>;
}

export default Avtar;

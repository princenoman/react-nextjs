import React from "react";
function Header({ title }) {
  return (
    <h1 style={{ height: "100px", color: "red", textAlign: "center" }}>
      {title}
    </h1>
  );
}

export default Header;

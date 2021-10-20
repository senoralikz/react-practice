import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [message, setMessage] = useState("");

  const leftBtn = () => {
    setMessage("Alexis");
  };

  const rightBtn = () => {
    setMessage("Alexis 'Mega Mind' Morales");
  };

  const resetBtn = () => {
    setMessage("");
  };

  return (
    <header className="header-bg d-flex justify-content-between">
      <Button onClick={leftBtn}>Left Bootstrap Button</Button>
      <h1 className="d-flex justify-content-center header-text">{message}</h1>
      <Button onClick={rightBtn}>Right Bootstrap Button</Button>
      <Button onClick={resetBtn}>Reset Bootstrap Button</Button>
    </header>
  );
};

export default Header;

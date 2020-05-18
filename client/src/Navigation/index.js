import React, { useContext, useState } from "react";
import "./style.css";
import { TypeContext } from "../context/TypeContext";

const Navigation = () => {
  const [type, setType] = useContext(TypeContext);

  useState(() => {
    setType(type);
  }, [type]);

  return (
    <nav className="navigation">
      <ul className="nav-items">
        <li className="nav-item" onClick={() => setType("")}>
          Todos os produtos
        </li>
        <li className="nav-item" onClick={() => setType("t-shirt")}>
          Camisetas
        </li>
        <li className="nav-item" onClick={() => setType("socks")}>
          Meias
        </li>
        <li className="nav-item" onClick={() => setType("hoodie")}>
          Moletons
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

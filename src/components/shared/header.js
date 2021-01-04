import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import styles from "./header.module.scss";
import Logo from "./logo.png";

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className={`${styles.header} bg-primary `}>
      <div className="header__left">
        <Link className="text-white" to="/">
          <img src={Logo} alt="" width="50" height="50" className="mr-3" />
          DECORABAÑO
        </Link>
      </div>
      <div className="header__right">
        <Link className="text-white" to="/">
          Store
        </Link>
        <Link className="text-white" to="/about">
          About
        </Link>
        <Link className="text-white" to="/cart">
          <CartIcon /> Cart ({itemCount})
        </Link>
      </div>
    </header>
  );
};

export default Header;

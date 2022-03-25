import * as React from "react";
import styled from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import logo_img from "../images/icons8-note-64.png";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
      <div className={styled.navbar}>
        <div className={styled.logo}>
          <div className={styled.img}>
            <a href="/">
              <img src={logo_img}></img>
            </a>
          </div>

          <a href="/">
            <h1>AB Notes</h1>
          </a>
        </div>

        <div className={styled.btn_delete_data}>
          <Link to="/showdelete">
            <button>
              <a>See delete Notes</a>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import * as React from "react";
import styled from "../styles/Header.module.css";
import { Link } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
      <div className={styled.navbar}>
        <div className={styled.logo}>
          <a href="/">
            <h1>AB Notes</h1>
          </a>
        </div>

        <div className={styled.btn_delete_data}>
          <Link to="/showdelete">
            <button>
              <a>Show Delete Data</a>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import FileSearch from "./FileSearch";
import { ReactComponent as HomeIcon } from "../assets/icon.svg";
import {Outlet, useNavigate} from "react-router-dom";

function TopNav() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <header className={"top-nav"}>
        <button style={{ display: "flex", height: 32, width: 32 }} type={"button"} onClick={handleClick}>
          <HomeIcon />
        </button>
        <FileSearch />
      </header>
      <Outlet/>
    </>
  );
}

export default TopNav;

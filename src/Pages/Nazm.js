import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function Nazm({ open, setOpen }) {
  return (
    <>
      <Header setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <h1>Nazm</h1>
    </>
  );
}
export default Nazm;

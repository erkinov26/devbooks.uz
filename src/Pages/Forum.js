import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Forum({ open, setOpen }) {
  return (
    <>
      <Header setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <h1>Forum</h1>
    </>
  );
}

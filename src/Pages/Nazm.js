import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function Nazm({
  open,
  setOpen,
  access,
  setAccess,
  currentUserImg,
  setCurrentUserImg,
}) {
  return (
    <>
      <Header
        setOpen={setOpen}
        access={access}
        setAccess={setAccess}
        currentUserImg={currentUserImg}
        setCurrentUserImg={setCurrentUserImg}
      />
      <SideBar open={open} setOpen={setOpen} />
      <h1>Nazm</h1>
    </>
  );
}
export default Nazm;

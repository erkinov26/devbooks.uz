import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Forum({
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
      <h1>Forum</h1>
    </>
  );
}

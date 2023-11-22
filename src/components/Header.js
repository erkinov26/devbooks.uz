import React, { useState } from "react";
import Toolbar from "./Toolbar";
import NotAccessToolbar from "./NotAccessToolbar";
import NavItem from "./NavItem";
export default function Header({
  setOpen,
  currentUserImg,
  setCurrentUserImg,
  access,
  setAccess,
}) {
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [profileToolBar, setProfileToolbar] = useState(false);
  return (
    <div className="main-header">
      <div className="header">
        <h1 className="section-title"> BADIYAT</h1>
        <ul className="navbar">
          <NavItem
            setOpen={setOpen}
            access={access}
            pathLinkName={"/"}
            text={"Bosh Sahifa"}
          />

          <NavItem
            setOpen={setOpen}
            access={access}
            pathLinkName={"/nasr"}
            text={"Nasr"}
          />

          <NavItem
            setOpen={setOpen}
            access={access}
            pathLinkName={"/nazm"}
            text={"Nazm"}
          />

          <NavItem
            setOpen={setOpen}
            access={access}
            pathLinkName={"/maqolalar"}
            text={"Maqolalar"}
          />

          <NavItem
            setOpen={setOpen}
            access={access}
            pathLinkName={"/forum"}
            text={"Forum"}
          />
        </ul>
        {access ? (
          <Toolbar
            setOpenAccountModal={setOpenAccountModal}
            openAccountModal={openAccountModal}
            setProfileToolbar={setProfileToolbar}
            profileToolBar={profileToolBar}
            currentUserImg={currentUserImg}
            setCurrentUserImg={setCurrentUserImg}
            access={access}
            setAccess={setAccess}
          />
        ) : (
          <NotAccessToolbar />
        )}
      </div>
      <button
        className="menu-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <i className="bx bx-menu"></i>
      </button>
    </div>
  );
}

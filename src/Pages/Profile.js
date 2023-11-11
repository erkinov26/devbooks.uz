import React from "react";
import ProfilaNavigation from "../components/ProfilaNavigation";
import account_img from "../images/account-img.png";
export default function Profile() {
  return (
    <div className="profileSection">
      <ProfilaNavigation />
      <div className="profile-img-box">
        <img src={account_img} alt={account_img} className="profile-img" />
        <i class="bx bxs-camera-plus"></i>
        <p className="changePhoto">Change Photo</p>
      </div>
      <div className="profileInfo">
        <h1 className="myProfile-header"> My Profile</h1>
        <p className="myProfileTitle">First Name</p>
        <p className="myProfileInfo">John</p>
        <p className="myProfileTitle">Last Name</p>
        <p className="myProfileInfo">Erkinov</p>
        <p className="myProfileTitle">Phone</p>
        <p className="myProfileInfo">+998900977733</p>
        <p className="myProfileTitle">Email</p>
        <p className="myProfileInfo">admin@mail.ru</p>
      </div>
    </div>
  );
}

import React from "react";
import ProfilaNavigation from "../components/ProfilaNavigation";
import account_img from "../images/account-img.png";
export default function Profile({ currentUser, setCurrentUser }) {
  console.log(currentUser);
  return (
    <div className="profileSection">
      <ProfilaNavigation />
      <div className="profile-img-box">
        <img src={account_img} alt={account_img} className="profile-img" />
        <i className="bx bxs-camera-plus"></i>
        <p className="changePhoto">Change Photo</p>
      </div>
      <div className="profileInfo">
        <h1 className="myProfile-header"> My Profile</h1>
        <p className="myProfileTitle">First Name</p>
        <p className="myProfileInfo">{currentUser.first_name}</p>
        <p className="myProfileTitle">Last Name</p>
        <p className="myProfileInfo">{currentUser.last_name}</p>
        <p className="myProfileTitle">Phone</p>
        <p className="myProfileInfo">{currentUser.phone}</p>
        <p className="myProfileTitle">Email</p>
        <p className="myProfileInfo">{currentUser.email}</p>
      </div>
    </div>
  );
}

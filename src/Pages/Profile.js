import React from "react";
import ProfilaNavigation from "../components/ProfilaNavigation";
export default function Profile({
  currentUserImg,
  setCurrentUserImg,
  currentUserInfo,
  setCurrentUserInfo,
}) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setCurrentUserImg(imageURL);
  };
  return (
    <div className="profileSection">
      <ProfilaNavigation />

      <div className="profileMain">
        <div className="profileImgBack">
          <label className="profileImgUploadLabel">
            <input
              type="file"
              className="profileImgUploadInput"
              onChange={(e) => handleImageChange(e)}
            />

            <i className="bx bxs-camera-plus"></i>
          </label>
          <img src={currentUserImg} className="profileImg" alt="" />
        </div>
        <div className="profileInfo">
          <h1 className="myProfile-header"> My Profile</h1>
          <p className="myProfileTitle">First Name</p>
          <p className="myProfileInfo">{currentUserInfo.first_name}</p>
          <p className="myProfileTitle">Last Name</p>
          <p className="myProfileInfo">{currentUserInfo.last_name}</p>
          <p className="myProfileTitle">Phone</p>
          <p className="myProfileInfo">{currentUserInfo.phone}</p>
          <p className="myProfileTitle">Email</p>
          <p className="myProfileInfo">{currentUserInfo.email}</p>
        </div>
      </div>
    </div>
  );
}

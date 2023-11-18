import React from "react";
import ImgBack from "./ImgBack";

const ProfileUpload = ({ profileImage, setProfileImage }) => {
  const handleChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  return (
    <div className="profile-img-box">
      <div className="imgBack">
        <ImgBack profileImage={profileImage} classNameImg="profile-img" />
      </div>

      <label className="uploadLabel">
        <input type="file" id="profile-image-input" onChange={handleChange} />
        <i className="bx bxs-camera-plus"></i>
      </label>
    </div>
  );
};

export default ProfileUpload;

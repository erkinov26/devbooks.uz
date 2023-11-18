import React from "react";
import ProfilaNavigation from "../components/ProfilaNavigation";
export default function Profile({ currentUserImg, setCurrentUserImg }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Assuming you want to set the user's profile image URL, not the file object itself
    // You might want to upload the file to a server and get the URL
    // For now, let's assume you have the URL in the 'file' variable
    const imageURL = URL.createObjectURL(file);

    // Update the current user with the image URL
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
          <p className="myProfileInfo">Lorem, ipsum.</p>
          <p className="myProfileTitle">Last Name</p>
          <p className="myProfileInfo">Lorem, ipsum.</p>
          <p className="myProfileTitle">Phone</p>
          <p className="myProfileInfo">Lorem, ipsum.</p>
          <p className="myProfileTitle">Email</p>
          <p className="myProfileInfo">Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
}

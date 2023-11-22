import React, { useRef, useState } from "react";
import ProfilaNavigation from "../components/ProfilaNavigation";

export default function Security({
  currentUserInfo,
  setChangeInfo,
  changeInfo,
}) {
  const [changeEmail, setChangeEmail] = useState(currentUserInfo.email);
  const [changePassword, setChangePassword] = useState(currentUserInfo.email);
  console.log(changeEmail, "changeEmail");
  console.log(changePassword, "changePassword");
  const passwordChangedRef = useRef();
  const confirmPasswordChangedRef = useRef();
  return (
    <div className="profileSection">
      <ProfilaNavigation />

      <div className="editSection">
        <p>Email</p>
        <input
          type="text"
          placeholder="Change your email"
          value={currentUserInfo.email}
          className="FormInput"
        />
        <p>CurrentPassWord</p>
        <input
          type="text"
          value={currentUserInfo.password}
          className="FormInput"
        />
        {changeInfo ? (
          <>
            <p>New Password</p>
            <input
              type="text"
              placeholder="Change your password"
              className="FormInput"
            />
            <p>Confirm Your Password</p>
            <input
              innerRef={confirmPasswordChangedRef}
              type="text"
              className="FormInput"
              placeholder="Confirm your password"
            />
          </>
        ) : null}
        <button
          onClick={() => setChangeInfo(!changeInfo)}
          className="changeInformationButton"
        >
          {changeInfo ? "Save" : "Change Info"}
        </button>
      </div>
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./Pages/BoshSahifa";
import Nasr from "./Pages/Nasr";
import Nazm from "./Pages/Nazm";
import Maqolalar from "./Pages/Maqolalar";
import Forum from "./Pages/Forum";
import authors from "./Data/data";
import { useEffect, useState } from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Security from "./Pages/Security";
import Setting from "./Pages/Setting";
import NotFound from "./Pages/NotFound";
import userData from "./Data/UserData";
function App() {
  const [data, setData] = useState(authors);
  const [userInfoData, setUserInfoData] = useState(userData);

  const [open, setOpen] = useState(false);
  const storedUser = localStorage.getItem("current user");
  const storedAcces = localStorage.getItem("current access");
  const storedImg = localStorage.getItem("current img");
  const initialData = storedUser ? JSON.parse(storedUser) : 0;
  console.log(initialData, "initial data");
  const initialAccess = storedAcces ? JSON.parse(storedAcces) : false;
  console.log(initialAccess, "initial access");
  const initialImg = storedImg ? JSON.parse(storedImg) : null;
  const [currentUserInfo, setCurrentUserInfo] = useState(initialData);
  const [access, setAccess] = useState(initialAccess);
  const [currentUserImg, setCurrentUserImg] = useState(initialImg);
  useEffect(() => {
    localStorage.setItem("current user", JSON.stringify(currentUserInfo));
    localStorage.setItem("current access", JSON.stringify(access));
    localStorage.setItem("current img", JSON.stringify(currentUserImg));
  }, [currentUserInfo, access, currentUserImg]);

  const [changeInfo, setChangeInfo] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <BoshSahifa
              open={open}
              access={access}
              setAccess={setAccess}
              setOpen={setOpen}
              data={data}
              setData={setData}
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
            />
          }
        />
        <Route
          path="/nasr"
          element={
            <Nasr
              open={open}
              setOpen={setOpen}
              access={access}
              setAccess={setAccess}
              data={data}
              setData={setData}
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
            />
          }
        />
        <Route
          path="/nazm"
          element={
            <Nazm
              open={open}
              setOpen={setOpen}
              access={access}
              setAccess={setAccess}
              data={data}
              setData={setData}
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
            />
          }
        />
        <Route
          path="/maqolalar"
          element={
            <Maqolalar
              open={open}
              setOpen={setOpen}
              access={access}
              setAccess={setAccess}
              data={data}
              setData={setData}
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
            />
          }
        />
        <Route
          path="/forum"
          element={
            <Forum
              open={open}
              setOpen={setOpen}
              access={access}
              setAccess={setAccess}
              data={data}
              setData={setData}
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
            />
          }
        />
        <Route
          path="/SignIn"
          element={
            <SignIn
              userInfoData={userInfoData}
              setUserInfoData={setUserInfoData}
              setCurrentUserInfo={setCurrentUserInfo}
              access={access}
              setAccess={setAccess}
            />
          }
        />
        <Route
          path="/SignUp"
          element={
            <SignUp
              userInfoData={userInfoData}
              setUserInfoData={setUserInfoData}
              setCurrentUserInfo={setCurrentUserInfo}
              access={access}
              setAccess={setAccess}
            />
          }
        />

        <Route
          path="/my_account"
          element={
            <Profile
              currentUserImg={currentUserImg}
              setCurrentUserImg={setCurrentUserImg}
              currentUserInfo={currentUserInfo}
              setCurrentUserInfo={setCurrentUserInfo}
            />
          }
        />
        <Route
          path="/security"
          element={
            <Security
              setCurrentUserInfo={setCurrentUserInfo}
              currentUserInfo={currentUserInfo}
              changeInfo={changeInfo}
              setChangeInfo={setChangeInfo}
            />
          }
        />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

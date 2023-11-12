import { Route, Routes } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./Pages/BoshSahifa";
import Nasr from "./Pages/Nasr";
import Nazm from "./Pages/Nazm";
import Maqolalar from "./Pages/Maqolalar";
import Forum from "./Pages/Forum";
import authors from "./Data/data";
import { useState } from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Security from "./Pages/Security";
import Setting from "./Pages/Setting";
import NotFound from "./Pages/NotFound";
function App() {
  const [data, setData] = useState(authors);
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/bosh_sahifa"
          element={
            <BoshSahifa
              open={open}
              setOpen={setOpen}
              data={data}
              setData={setData}
            />
          }
        />
        <Route path="/nasr" element={<Nasr open={open} setOpen={setOpen} />} />
        <Route path="/nazm" element={<Nazm open={open} setOpen={setOpen} />} />
        <Route
          path="/maqolalar"
          element={<Maqolalar open={open} setOpen={setOpen} />}
        />
        <Route
          path="/forum"
          element={<Forum open={open} setOpen={setOpen} />}
        />
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/my_account" element={<Profile />} />
        <Route path="/security" element={<Security />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    // aaa
  );
}

export default App;

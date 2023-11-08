import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BoshSahifa from "./components/BoshSahifa/BoshSahifa";
import Nasr from "./components/Nasr/Nasr";
import Nazm from "./components/Nazm/Nazm";
import Maqolalar from "./components/Maqolalar/Maqolalar";
import Forum from "./components/Forum/Forum";
import authors from "./Data/data";
import { useState } from "react";
function App() {
  const [data, setData] = useState(authors);
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className="main-header">
        <Navbar />
        <button className="menu-button" onClick={() => setOpen(true)}>
          <i class="bx bx-menu"></i>
        </button>
      </div>
      <div
        className={`sidebar ${
          open ? "sidebarTransformOpen" : "sidebarTransformClose"
        }`}
      >
        <Navbar setOpen={setOpen} />
        <button className="close-Sidebar" onClick={() => setOpen(false)}>
          <i class="bx bx-exit"></i>
        </button>
      </div>
      <div className="main-page">
        <Routes>
          <Route
            path="/bosh_sahifa"
            element={<BoshSahifa data={data} setData={setData} />}
          />
          <Route path="/nasr" element={<Nasr />} />
          <Route path="/nazm" element={<Nazm />} />
          <Route path="/maqolalar" element={<Maqolalar />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

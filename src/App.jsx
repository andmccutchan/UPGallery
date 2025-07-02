import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Upload from "./Pages/Upload";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;

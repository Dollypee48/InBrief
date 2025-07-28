import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite"; 
import About from "../pages/About";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

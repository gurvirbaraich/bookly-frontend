import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Discover from "./pages/Discover";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/discover" index element={<Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

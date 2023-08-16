import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";

export default function Layout() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <Header />
      
      <main className={mode}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

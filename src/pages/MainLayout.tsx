import { Outlet } from "react-router";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

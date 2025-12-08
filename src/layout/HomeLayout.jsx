import { Outlet } from "react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const HomeLayout = () => {
  return (
    <>
      <Heading />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;

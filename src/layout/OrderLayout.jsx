import Heading from "../components/Heading";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const OrderLayout = () => {
  return (
    <>
      <>
        <Outlet />
      </>
    </>
  );
};

export default OrderLayout;

import React from "react";
import HeadingProfile from "../components/HeadingProfile";
import { Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <>
      <HeadingProfile />
      <Outlet/>
    </>
  );
};

export default ProfileLayout;

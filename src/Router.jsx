import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import Movie from "./pages/Movie";
import OrderPage from "./pages/OrderPage";
import OrderLayout from "./layout/OrderLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Details from "./pages/Details";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movie">
            <Route index element={<Movie />} />
          </Route>
        </Route>
      </Route>
      <Route path={"order"}>
        <Route element={<OrderLayout />}>
          <Route>
            <Route index element={<OrderPage />} />
            <Route path=":id">
              <Route index element={<Details />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route />
    </Routes>
  );
};

export default Router;

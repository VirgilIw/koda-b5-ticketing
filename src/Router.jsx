import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Details from "./pages/Details";
import OrderPage from "./pages/OrderPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeLayout from "./layout/HomeLayout";
import OrderLayout from "./layout/OrderLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useSelector } from "react-redux";
import Payment from "./pages/Payment";
import Kursi from "./components/Kursi";
import TicketResult from "./pages/TicketResult";
import Profile from "./pages/Profile";
import ProfileLayout from "./layout/ProfileLayout";
import ForgotPassword from "./pages/ForgotPassword";

const Router = () => {
  // simulasi login
  const isLogin = useSelector((state) => state.auth.isLogin);
  //
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="detail/:id" element={<Details />} />
        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute isLogin={isLogin} />}>
          <Route path="order/:id" element={<OrderLayout />}>
            <Route index element={<OrderPage />} />
          </Route>
          <Route path="payment" element={<Payment />} />
          <Route path="ticket-result" element={<TicketResult/>}/>
        </Route>
      </Route>

      {/* AUTH */}
      <Route path="sign-in" element={<SignIn setIsLogin={isLogin} />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="kursi" element={<Kursi />} />
      <Route path="profile" element={<ProfileLayout/>}>
      <Route index element={<Profile/>}/>
      </Route>
    </Routes>
  );
};

export default Router;

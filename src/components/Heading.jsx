import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signOut } from "../redux/slices/auth.slice";

const Heading = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signOut());
    navigate("/sign-in");
  };

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="border-b border-slate-200 backdrop-blur-lg">
      <nav className="flex w-[95%] items-center p-3">
        <div className="md:w-[45%] md:pl-16 lg:w-[50%] lg:pl-16">
          <img src="/src/assets/Tickitz 2.svg" alt="Tickitz" />
        </div>

        <button
          onClick={handleClick}
          className="absolute right-4 cursor-pointer md:hidden"
        >
          {showNavbar ? "X" : <img src="/src/assets/navbar.svg" alt="Menu" />}
        </button>

        {/* Desktop */}
        <section className="hidden md:pl-[6%] lg:pl-[10%] lg:w-full md:flex md:w-full md:justify-between">
          <ul className="flex items-center justify-center gap-6">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/movie">
              <li>Movie</li>
            </Link>
            <Link to="/payment">
              <li>Buy Ticket</li>
            </Link>
          </ul>

          {!isLogin ? (
            <ul className="flex gap-2">
              <Link to="/sign-in">
                <li>Sign In</li>
              </Link>
              <Link to="/sign-up">
                <li>Sign Up</li>
              </Link>
            </ul>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="cursor-pointer text-sm text-red-400 transition hover:text-red-800"
              >
                Logout
              </button>
            </div>
          )}
        </section>
      </nav>

      {/* Mobile */}
      {showNavbar && (
        <section className="absolute z-10 w-full flex justify-center flex-col bg-white pb-4 text-center md:hidden">
          <ul className="flex flex-col gap-3 py-2">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/movie">
              <li>Movie</li>
            </Link>
            <li>Buy Ticket</li>
          </ul>

          {isLogin ? (
            <div className="flex justify-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="cursor-pointer text-sm text-red-400 transition hover:text-red-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-2">
              <Link to="/sign-in">Sign In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          )}
        </section>
      )}
    </header>
  );
};

export default Heading;

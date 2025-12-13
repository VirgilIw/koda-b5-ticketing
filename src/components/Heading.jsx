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
    <header className="border-b border-slate-200">
      <nav className="flex items-center p-3">
        <div className="md:w-[45%] lg:w-[50%]">
          <img src="/src/assets/Tickitz 2.svg" alt="Tickitz" />
        </div>

        <button onClick={handleClick} className="md:hidden absolute right-4">
          {showNavbar ? "X" : <img src="/src/assets/navbar.svg" alt="Menu" />}
        </button>

        {/* Desktop */}
        <section className="hidden md:flex md:w-full md:justify-between px-10">
          <ul className="flex gap-6 justify-center items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/movie">
              <li>Movie</li>
            </Link>
            <li>Buy Ticket</li>
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
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-sm text-red-400 cursor-pointer hover:text-red-800 transition"
              >
                Logout
              </button>
            </div>
          )}
        </section>
      </nav>

      {/* Mobile */}
      {showNavbar && (
        <section className="md:hidden bg-white text-center pb-4">
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
              <span>{user.email}</span>
              <button onClick={handleLogout}>Logout</button>
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

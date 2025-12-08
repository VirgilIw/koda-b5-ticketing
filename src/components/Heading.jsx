import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header className="border-b border-slate-200">
        <nav className="flex items-center p-3">
          {/* Logo */}
          <h1>
            <img src="/src/assets/Tickitz 2.svg" alt="Tickitz" />
          </h1>
          {/*  */}
          <button onClick={handleClick} className="md:hidden absolute right-4">
            {showNavbar ? (
              <p className="text-2xl mr-1">X</p>
            ) : (
              <img src="/src/assets/navbar.svg" alt="Menu" />
            )}
          </button>
          {/*  */}
          <section className="hidden md:px-5 md:flex md:items-center md:w-full md: justify-center md:mr-10 md:gap-8 px-[5em]">
            <section>
              <ul className="flex gap-6">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/movie"}>
                  <li>Movie</li>
                </Link>
                <li>Buy Ticket</li>
              </ul>
            </section>
            <ul className="flex md:absolute md:right-10 lg:absolute lg:right-[5%] gap-2">
              <Link to={"/sign-in"}>
                <li className="border border-[#1D4ED8] py-2 px-4 rounded-sm">
                  SignIn
                </li>
              </Link>
              <Link to={"/sign-up"}>
                <li className="bg-[#1D4ED8] text-white py-2 px-4 rounded-sm">
                  SignUp
                </li>
              </Link>
            </ul>
          </section>
        </nav>

        {/* Mobile Navbar */}
        {showNavbar && (
          <section className="absolute md:hidden z-10 bg-white w-full text-center pb-4">
            <ul className="flex flex-col gap-3 py-2">
              <ul>
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/movie"}>
                  <li>Movie</li>
                </Link>
                <li>Buy Ticket</li>
              </ul>
            </ul>
            <ul className="flex justify-center gap-2 pt-2">
              <Link to={"/sign-in"}>
                <li className="border border-[#1D4ED8] py-2 px-4 rounded-sm">
                  SignIn
                </li>
              </Link>
              <Link to={"/sign-up"}>
                <li className="bg-[#1D4ED8] text-white py-2 px-4 rounded-sm">
                  SignUp
                </li>
              </Link>
            </ul>
          </section>
        )}
      </header>
    </>
  );
};

export default Heading;

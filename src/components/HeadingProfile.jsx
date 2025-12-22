import React, { useState } from "react";
import { Link } from "react-router";

const HeadingProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-indigo-600">
            Tickitz
          </Link>

          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Mobile Hamburger Button */}
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      </div>
    </nav>
  );
};

/* ================= DESKTOP MENU ================= */
const DesktopMenu = () => {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="transition hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movie" className="transition hover:text-indigo-600">
              Movie
            </Link>
          </li>
          <li>
            <Link to="/buy-ticket" className="transition hover:text-indigo-600">
              Buy Ticket
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Location Dropdown */}
        <LocationDropdown />

        {/* Search Button */}
        <SearchButton />

        {/* Profile Image */}
        <ProfileAvatar />
      </div>
    </div>
  );
};

/* ================= LOCATION DROPDOWN ================= */
const LocationDropdown = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="px-4">
        <label className="mb-2 block text-xs font-medium text-gray-500">
          Location
        </label>
        <select
          name="location"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="" disabled>
            Select Location
          </option>
          <option value="jakarta">Jakarta</option>
          <option value="bandung">Bandung</option>
          <option value="surabaya">Surabaya</option>
        </select>
      </div>
    );
  }

  return (
    <select
      name="location"
      className="cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    >
      <option value="" disabled>
        Location
      </option>
      <option value="jakarta">Jakarta</option>
      <option value="bandung">Bandung</option>
      <option value="surabaya">Surabaya</option>
    </select>
  );
};

/* ================= SEARCH BUTTON ================= */
const SearchButton = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition hover:bg-gray-50">
        <SearchIcon />
        <span className="text-sm font-medium text-gray-700">Search Movies</span>
      </button>
    );
  }

  return (
    <button className="rounded-full p-2 transition hover:bg-gray-100">
      <SearchIcon />
    </button>
  );
};

/* ================= SEARCH ICON ================= */
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    className="text-gray-600"
  >
    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
  </svg>
);

/* ================= PROFILE AVATAR ================= */
const ProfileAvatar = ({ isMobile = false, onClick }) => {
  if (isMobile) {
    return (
      <Link
        to="/profile"
        className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-gray-50"
        onClick={onClick}
      >
        <img
          src="/src/assets/bca.png"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">Jonas El Rodriguez</p>
          <p className="text-xs text-gray-500">Moviegoers</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/profile">
      <img
        src="/src/assets/bca.png"
        alt="Profile"
        className="h-10 w-10 cursor-pointer rounded-full border-2 border-gray-200 object-cover transition hover:border-indigo-500"
      />
    </Link>
  );
};

/* ================= HAMBURGER BUTTON ================= */
const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
      aria-label="Toggle menu"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

/* ================= MENU ICON ================= */
const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

/* ================= CLOSE ICON ================= */
const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/* ================= MOBILE MENU ================= */
const MobileMenu = ({ onClose }) => {
  return (
    <div className="border-t border-gray-200 py-4 lg:hidden">
      {/* Navigation Links */}
      <nav>
        <ul className="space-y-1">
          <li>
            <Link
              to="/"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movie"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              onClick={onClose}
            >
              Movie
            </Link>
          </li>
          <li>
            <Link
              to="/buy-ticket"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              onClick={onClose}
            >
              Buy Ticket
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Actions */}
      <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
        <LocationDropdown isMobile />
        <ProfileAvatar isMobile onClick={onClose} />
        <SearchButton isMobile />
      </div>
    </div>
  );
};

export default HeadingProfile;
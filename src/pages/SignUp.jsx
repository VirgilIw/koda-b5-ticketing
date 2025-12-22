import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import {  useState } from "react";
import { useContext } from "react";
import { authContext } from "/src/contexts/auth/authContext";
import useLocalStorage from "../hooks/useLocalStorage";

const SignUp = () => {
  const {
    value,
    handleChange,
    showEye,
    handleEye,
    error,
    validateAll,
    resetForm,
  } = useAuth(
    { email: "", password: "" },
    {
      required: true,
      pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      patternMessage:
        "Password harus 8 karakter, ada huruf besar, kecil, dan angka",
    },
  );
  const [_, setSignupError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // const users = useSelector((state) => state.auth.users);
  const { state, dispatch } = useContext(authContext);
const [, setActiveUser] = useLocalStorage("user", {
  user: null,
});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    const existingUser = state.users.find((user) => user.email === value.email);

    if (existingUser) {
      setSignupError("Akun sudah terdaftar");
      return;
    }

    // simpan akun ke Context
    dispatch({
      type: "NEW_USER",
      payload: value,
    });

    // set user login
    setActiveUser({
      user: value,
    });

    resetForm();
    setSignupError("");
    setShowSuccess(true);
  };


  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/src/assets/Group-9.png')] bg-cover">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[90%] max-w-sm rounded-lg bg-white p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold">Berhasil 🎉</h2>
            <p className="mb-4 text-gray-600">Akun anda berhasil didaftarkan</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <div className="mx-10 flex h-[90vh] w-[70%] flex-col gap-4 rounded-md bg-white px-5 md:w-[75%] lg:h-[90vh] lg:w-[80%] xl:h-[80vh]">
        <section className="mt-4 flex items-center justify-around text-center text-white">
          <button>
            <p className="h-10 w-10 rounded-full bg-[#1D4ED8] pt-2">1</p>
            <p className="pt-2 text-[12px] text-black">Fill Form</p>
          </button>
          <span className="relative top-4 w-10 border-b border-dashed border-gray-400"></span>
          <button>
            <p className="h-10 w-10 rounded-full bg-[#A0A3BD] pt-2">1</p>
            <p className="pt-2 text-[12px] text-black">Activate</p>
          </button>
          <span className="relative top-4 w-10 border-b border-dashed border-gray-400"></span>
          <div>
            <p className="h-10 w-10 rounded-full bg-[#A0A3BD] pt-2">3</p>
            <p className="pt-2 text-[12px] text-black">Done</p>
          </div>
        </section>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="py-1">
            Email
          </label>
          <input
            type="text"
            value={value.email}
            onChange={handleChange}
            name="email"
            autoComplete="off"
            className="rounded border border-slate-300 px-4 py-3"
            placeholder="Enter your email"
          />
          {error.email && <p className="text-red-500">{error.email}</p>}
          <label htmlFor="password" className="pt-4 pb-1 text-start">
            Password
          </label>
          <div className="relative flex justify-between overflow-x-hidden rounded border border-slate-300">
            <input
              type={showEye ? "text" : "password"}
              name="password"
              value={value.password}
              onChange={handleChange}
              className="w-50 px-4 py-3 outline-none md:w-full"
              placeholder="Enter your password"
            />
            <button onClick={handleEye}>
              <img
                src={
                  showEye
                    ? "/src/assets/eye-close.svg"
                    : "/src/assets/eye-open.svg"
                }
                alt="eye"
                className="absolute top-3 right-0 z-10 w-10 pr-4"
              />
            </button>
          </div>
          {error.password && <p className="text-red-500">{error.password}</p>}
          <div className="flex gap-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4 accent-blue-600"
            />
            <label
              htmlFor="checkbox"
              className="my-6 text-sm font-semibold text-[#1D4ED8]"
            >
              I agree to terms & conditions
            </label>
          </div>
          <button
            type="submit"
            className="rounded bg-[#1D4ED8] py-3 text-white"
          >
            Join For Free Now
          </button>
        </form>
        <p className="flex items-center justify-center gap-2">
          Already have an account?
          <Link
            to="/sign-in"
            className="text-blue-600 underline underline-offset-3"
          >
            Log In
          </Link>
        </p>
        <section className="flex items-center justify-center gap-5">
          <div className="w-1/2 border-b border-b-slate-300"></div>
          <p>Or</p>
          <div className="w-1/2 border-b border-b-slate-300"></div>
        </section>
        <section className="mt-2 flex justify-center gap-10">
          {/*  */}
          <Link>
            <img
              src="/src/assets/google.svg"
              alt="google"
              className="rounded p-4 inset-shadow-sm inset-shadow-indigo-100"
            />
          </Link>
          {/*  */}
          <Link>
            <img
              src="/src/assets/fb.svg"
              alt="google"
              className="rounded p-4 inset-shadow-sm inset-shadow-indigo-100"
            />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default SignUp;

import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/auth.slice";
import { useContext, useState } from "react";
import { authContext } from "../contexts/auth/authContext";

const SignIn = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ambil user terdaftar dari redux persist
  // const users = useSelector((state) => state.auth.users);
  const { state } = useContext(authContext);
  //  error khusus login
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    const existingUser = state.user.find((user) => user.email === value.email);

    if (!existingUser) {
      setLoginError("Akun belum terdaftar");
      return;
    }

    if (existingUser.password !== value.password) {
      setLoginError("Password salah");
      return;
    }

    dispatch(signIn(existingUser));
    resetForm();
    setLoginError("");
    navigate("/", { replace: true });
  };

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/src/assets/Group-9.png')] bg-cover">
      <div className="flex h-[90vh] w-[90%] flex-col gap-4 rounded-md bg-white px-6 md:w-[70%] lg:w-[80%] xl:h-[70vh]">
        <h1 className="pt-8 text-2xl">Welcome Back 👏</h1>
        <p className="text-[#A0A3BD]">
          Sign in with your data that you entered during your registration
        </p>

        {/* ERROR LOGIN */}
        {loginError && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-[90%] max-w-sm rounded-lg bg-white p-6 text-center">
              <h2 className="mb-2 text-xl font-semibold text-red-600">
                Login Gagal ❌
              </h2>
              <p className="mb-4 text-gray-600">{loginError}</p>
              <button
                onClick={() => setLoginError("")}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="py-1">Email</label>
          <input
            type="text"
            name="email"
            value={value.email}
            onChange={handleChange}
            className="rounded border px-4 py-3"
            placeholder="Enter your email"
          />
          {error.email && <p className="text-red-500">{error.email}</p>}

          <label className="pt-4 pb-1">Password</label>
          <div className="relative flex rounded border">
            <input
              type={showEye ? "text" : "password"}
              name="password"
              value={value.password}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none"
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
                className="absolute top-3 right-0 w-10 pr-4"
              />
            </button>
          </div>
          <Link to="/forgot-password" className="pt-4 text-end">
            forgot Password?
          </Link>
          {error.password && <p className="text-red-500">{error.password}</p>}

          <button
            type="submit"
            disabled={!!error.email || !!error.password}
            className="mt-6 rounded bg-blue-600 py-3 text-white disabled:opacity-50"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Don't have an account?
          <Link to="/sign-up" className="ml-1 text-blue-600 underline">
            Sign Up
          </Link>
        </p>
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

export default SignIn;

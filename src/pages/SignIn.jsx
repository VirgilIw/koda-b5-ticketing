import { useEffect, useState } from "react";
import { Link } from "react-router";

const SignIn = () => {
  const [allData, setAllData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEye, setShowEye] = useState(false);

  //
  useEffect(() => {
    window.localStorage.getItem("datas");
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    let objInput = {};
    objInput = { ...objInput, emailNich: btoa(email) };
    objInput = { ...objInput, passwordNich: btoa(password) };
    //
    let data;

    data = [...allData, objInput];
    window.localStorage.setItem("datas", JSON.stringify(data));

    //
    setAllData(data);
    setEmail("");
    setPassword("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowEye(!showEye);
  };

  return (
    <section className="bg-[url('/src/assets/Group-9.png')] bg-cover w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-white mx-10 px-5 rounded-md h-[90vh] flex flex-col gap-4">
        <h1 className="text-2xl flex justify-start pt-8">Welcome Back 👏</h1>
        <p className="text-[#A0A3BD]">
          Sign in with your data that you entered during your registration
        </p>
        <form className="flex flex-col" onSubmit={handleForm}>
          <label htmlFor="email" className="py-1">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            autoComplete="off"
            className="border border-slate-300 py-3 px-4 rounded"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="text-start pt-4 pb-1">
            Password
          </label>
          <div className="border border-slate-300 flex justify-between rounded">
            <input
              type={showEye ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-4 w-55 outline-none"
              placeholder="Enter your password"
            />
            <button onClick={handleClick}>
              <img
                src={
                  showEye
                    ? "/src/assets/eye-close.svg"
                    : "/src/assets/eye-open.svg"
                }
                alt="eye"
                className="w-10 pr-4 relative z-10 top-0"
              />
            </button>
          </div>
          <Link
            to={"/"}
            className="text-[#1D4ED8] font-semibold text-sm my-6 text-end"
          >
            Forgot your password?
          </Link>
          <button type="submit" className="bg-blue-500 text-white rounded py-3">
            Login
          </button>
        </form>
        <section className="flex justify-center items-center gap-5">
          <div className="border-b border-b-slate-300 w-1/2"></div>
          <p>Or</p>
          <div className="border-b border-b-slate-300 w-1/2"></div>
        </section>
        <section className="flex justify-center gap-10 mt-2">
          {/*  */}
          <Link>
            <img
              src="/src/assets/google.svg"
              alt="google"
              className="inset-shadow-sm inset-shadow-indigo-100 p-4 rounded"
            />
          </Link>
          {/*  */}
          <Link>
            <img
              src="/src/assets/fb.svg"
              alt="google"
              className="inset-shadow-sm inset-shadow-indigo-100 p-4 rounded"
            />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default SignIn;

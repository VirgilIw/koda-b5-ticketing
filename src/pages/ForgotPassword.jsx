const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/src/assets/Group-9.png')] bg-cover">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] rounded bg-white px-5 py-10 md:w-[60%] lg:w-[70%]"
      >
        <h1 className="w-full pb-10 text-center text-5xl font-extrabold text-red-400 transition duration-300 ease-in-out hover:scale-105 hover:text-pink-300">
          Masih muda masa udah lupa password
        </h1>

        <label htmlFor="new-password" className="flex flex-col py-2">
          New Password
          <input type="text" className="rounded border p-2" id="new-password" />
        </label>
        <label htmlFor="retype" className="flex flex-col py-2">
          Re-Type New Password
          <input type="text" className="rounded border p-2" id="retype" />
        </label>
        <button
          type="submit"
          className="mt-5 w-full rounded bg-blue-600 p-3 text-center text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;

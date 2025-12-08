import React, { useEffect } from "react";

const UpComing = () => {
  const upComing =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=28b976ea87c130e70edaeb0ff3cf756a";

  useEffect(() => {
    (async function () {
      const response = await fetch(upComing);
      const datas = await response.json();
      console.log(datas.results);
    })();
  }, []);
  return <div>UpComing</div>;
};

export default UpComing;

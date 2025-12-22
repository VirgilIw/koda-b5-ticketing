import { useState } from "react";
import Chair from "../components/Chair";

const OrderPage = () => {
  const [chair, setChair] = useState({});

  return (
    <>
      <Chair chair={chair} setChair={setChair} />
    </>
  );
};

export default OrderPage;

import { useState } from "react";
import Chair from "../components/Chair";

const OrderPage = () => {
  const [chair, setChair] = useState({});

  return (
    <>
      <h2 className="text-3xl font-semibold">Choose Your Seat</h2>

      <p className="flex justify-center my-4">Screen</p>
      <Chair chair={chair} setChair={setChair} />
    </>
  );
};

export default OrderPage;

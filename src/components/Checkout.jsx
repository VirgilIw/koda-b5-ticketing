import { useContext } from "react";
import { bookingContext } from "../contexts/booking/bookingContext";
import { Link } from "react-router";

const Checkout = ({ selectedSeats, totalPrice }) => {
  const { bookingMovie, setBookingMovie } = useContext(bookingContext);

  const handleCheckout = () => {
    setBookingMovie({
      ...bookingMovie,
      seats: selectedSeats,
      totalPrice: totalPrice,
      numberOfTickets: selectedSeats.length,
    });
  };

  return (
    <Link
      to="/payment"
      onClick={handleCheckout}
      className="my-4 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
    >
      Checkout
    </Link>
  );
};

export default Checkout;

import { useState } from "react";
import { bookingContext as BookingContext } from "./bookingContext";

const BookingProvider = ({ children }) => {
  const [bookingMovie, setBookingMovie] = useState({});

  return (
    <BookingContext.Provider value={{ bookingMovie, setBookingMovie }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;

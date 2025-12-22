import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore, { persistedStore } from "./redux/store.js";
import BookingProvider from "./contexts/booking/BookingProvider.jsx";
import AuthProvider from "./contexts/auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <PersistGate persistor={persistedStore}>
        <BookingProvider>
          <AuthProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </AuthProvider>
        </BookingProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
);

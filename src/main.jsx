import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import reportWebVitals from "@/shared/utils/reportWebVitals.js";
import 'spinkit/spinkit.min.css'; 
import "modern-normalize";
import App from "@/components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </StrictMode>
);

// reportWebVitals(console.log);

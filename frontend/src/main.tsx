import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";

export const authService = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Hardcoding the cliendId for now from auth.env */}
    <GoogleOAuthProvider clientId="798764972573-a9931o2mk9ao41c07qlj5vteesgiai7o.apps.googleusercontent.com">
      <AppProvider>
        <App />
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);

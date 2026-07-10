import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/UploadResume";
import Analysis from "./pages/Analysis";
import History from "./pages/History";
import Profile from "./pages/Profile";

import App from "./App";
import "./index.css";

import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/upload" element={<UploadResume />} />
  <Route path="/analysis" element={<Analysis />} />
  <Route path="/history" element={<History />} />
  <Route path="/profile" element={<Profile />} />
</Routes>

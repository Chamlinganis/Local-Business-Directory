import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Page Imports
import HomePage from "./src/pages/HomePage";
import LoginSignupPage from "./src/pages/LoginSignup";
import { AboutPage, ContactPage, FAQPage } from "./src/pages/ACF";
import { FullLayout } from "./src/layout";

// 404 Page Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-600 mt-2">Page not found</p>
      <a
        href="/"
        className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block"
      >
        Go back home
      </a>
    </div>
  </div>
);

const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<FullLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication Routes */}
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/signup" element={<LoginSignupPage />} />

        {/* Information Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;

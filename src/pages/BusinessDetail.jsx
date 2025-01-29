import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const BusinessDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <section className="details">
        <h1>Business Name</h1>
        <p>Details about the business go here...</p>
      </section>
      <Footer />
    </div>
  );
};

export default BusinessDetailsPage;

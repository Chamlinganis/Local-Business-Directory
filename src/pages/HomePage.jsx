import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Button } from "../components/ui/button";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto px-4">
          <h1 className="animate-fade-in">
            Welcome to Local Business Directory
          </h1>
          <p className="max-w-2xl mx-auto mb-8">
            Discover and connect with the best local businesses in your
            community.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="featured-item">
              <h3>Restaurants</h3>
              <p>Find the best local dining experiences</p>
            </div>
            <div className="featured-item">
              <h3>Retail Shops</h3>
              <p>Explore unique local stores</p>
            </div>
            <div className="featured-item">
              <h3>Services</h3>
              <p>Connect with professional service providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-4">1</div>
              <h3 className="font-semibold mb-2">Search</h3>
              <p>Find businesses by category or location</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-4">2</div>
              <h3 className="font-semibold mb-2">Discover</h3>
              <p>Read reviews and browse photos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-4">3</div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p>Contact businesses directly through our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Own a Business?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            List your business on our directory and reach more customers in your
            area.
          </p>
          <Button variant={'link'}>
            Get Listed
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

// src/About.js
import React from 'react';
import { useDispatch } from "react-redux";
import { closeshow } from "../utils/Slice";

const About = () => {
  const dispatch=useDispatch();
  dispatch(closeshow());
  
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">Anime React</h1>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">About Anime React</h2>
            <p className="text-gray-300">
              Anime React is your ultimate destination for exploring and discovering the fascinating world of anime. With a vast collection of anime series, we provide detailed information, episode lists, character profiles, and much more to enhance your anime experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;



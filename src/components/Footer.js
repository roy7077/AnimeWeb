import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-4">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/" className="hover:text-white">Anime List</a>
              <a href="about" className="hover:text-white">About Us</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
            <p className="text-center">
              &copy; {new Date().getFullYear()} AnimeWeb. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      );
}

export default Footer

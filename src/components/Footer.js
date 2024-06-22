import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-center py-4">
    <div className="container mx-auto">
      <p className="text-sm text-black">
        &copy; {new Date().getFullYear()} Jun He Cui. All Rights Reserved.
      </p>
      <div className="flex justify-center mt-2">
      </div>
    </div>
  </footer>
);

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary p-1 text-center w-full h-auto ">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-footer transform ">
        <p className="text-sm">
          &copy; 2024 BIAS. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built by <span className="text-accent">Om</span> and <span className="text-accent">Mayur</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

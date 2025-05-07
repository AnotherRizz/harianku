import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

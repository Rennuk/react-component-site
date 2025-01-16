import React from 'react';
import style from './Button.module.css';

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <>
      <button
        className={`${style.button} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

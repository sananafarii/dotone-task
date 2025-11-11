import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import LoginIcon from '../icons/LoginIcon';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  state = 'default',
  leftIcon = false,
  rightIcon = false,
  className = '',
  style = {},
  ...props 
}) => {
  const baseStyles = 'flex items-center justify-center font-abar font-normal transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-black text-primary-white hover:bg-gray-800',
  };
  
  const sizes = {
    medium: 'w-[162px] h-[40px] text-[14px] leading-[100%] px-[10px] gap-[4px] rounded-[14px]',
  };
  
  const states = {
    default: '',
    hover: '',
    active: 'transform scale-95',
  };
  
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${states[state]}
    ${className}
  `.trim();
  
  return (
    <button className={buttonClasses} style={style} {...props}>
      {leftIcon && (React.createElement(leftIcon, {className: "w-5 h-5"}))}
      <span className="flex-1 text-center">{children}</span>
      {rightIcon && <span className="w-[20px] h-[20px]"></span>}
    </button>
  );
};

export default Button;
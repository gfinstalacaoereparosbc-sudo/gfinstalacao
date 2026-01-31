import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-gold';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "uppercase font-bold tracking-widest text-xs md:text-sm py-3 px-6 md:py-4 md:px-8 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-brand-gold text-background-default hover:bg-brand-goldLight shadow-[0_0_15px_rgba(198,168,124,0.3)]",
    secondary: "bg-transparent text-white border border-white/30 hover:border-brand-gold hover:text-brand-gold",
    outline: "text-brand-gold hover:text-white border-b border-brand-gold hover:border-white pb-1 px-0 py-0 h-auto rounded-none w-auto inline-flex items-center gap-2",
    "outline-gold": "bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-background-default",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
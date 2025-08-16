import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantClass = variant === 'secondary' ? 'button-secondary' : 'button-primary';

  return (
    <button className={`button ${variantClass} ${className}`} {...props}>
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;

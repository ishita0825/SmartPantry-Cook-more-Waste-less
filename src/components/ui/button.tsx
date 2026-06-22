type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600",
    secondary:
      "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 dark:bg-amber-400 dark:hover:bg-amber-500",
    outline:
      "border border-green-600 text-green-700 hover:bg-green-50 focus:ring-green-500 dark:border-green-400 dark:text-green-300 dark:hover:bg-gray-800",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

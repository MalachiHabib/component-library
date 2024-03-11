import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import { Theme, ThemeContext, defaultTheme } from "../theme/ThemeProvider";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  theme?: Theme;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  theme: propTheme,
  ...props
}: ButtonProps) {
  const contextTheme = useContext(ThemeContext);
  const theme = propTheme || contextTheme || defaultTheme;

  const variants = {
    primary: {
      light: "bg-blue-500 text-white hover:bg-blue-600",
      dark: "bg-blue-600 text-white hover:bg-blue-700",
    },
    secondary: {
      light: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      dark: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    },
  };

  const styles = clsx("px-4 py-2 rounded", variants[variant][theme], className);

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

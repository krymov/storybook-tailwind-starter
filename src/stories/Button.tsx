import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = () => {
  return (
    <div className="bg-color-red px-8">
      <button
        type="button"
        className={`px-2 color-orange text-white bg-red-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700`}
      >
        HELLO
      </button>
    </div>
  );
};

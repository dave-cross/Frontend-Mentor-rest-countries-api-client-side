import { useRef } from "react";
import "./index.css";

const ColorSwitch = () => {
  const ref = useRef(null);

  const handleColorSwitch = () => {
    if (
      document.documentElement.hasAttribute("data-theme") &&
      document.documentElement.getAttribute("data-theme") === "light"
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <button
      type="button"
      className="color-switch cluster"
      ref={ref}
      onClick={handleColorSwitch}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z"
          fill="none"
          stroke="#111517"
          strokeWidth="1.25"
        />
      </svg>
      Dark Mode
    </button>
  );
};

export default ColorSwitch;

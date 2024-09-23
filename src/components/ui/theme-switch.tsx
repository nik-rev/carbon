import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button type="button" onClick={handleClick}>
      {isDarkTheme ? <Moon /> : <Sun />}
    </button>
  );
}

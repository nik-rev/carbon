import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const ee = useTheme();
  console.log(ee)

  const isDarkTheme = resolvedTheme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <button type="button" onClick={handleClick}>
      {isDarkTheme ? <Moon /> : <Sun />}
    </button>
  );
}
// {isDarkTheme ? <Moon /> : <Sun />}

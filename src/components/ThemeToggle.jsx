import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "absolute top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-colors duration-300",
        "focus:outline-none"
      )}
      aria-label="Toggle Theme"
      title={`Switch to ${isDarkMode ? "Light" : "Dark"} mode`}
    >
      {isDarkMode ? (
        <>
          <Sun className="h-6 w-6 animate-pulse-subtle" />
          <span className="font-semibold">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-6 w-6 animate-pulse-subtle" />
          <span className="font-semibold">Dark Mode</span>
        </>
      )}
    </button>
  );
};
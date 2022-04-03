import useDarkMode from "../hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button type="checkbox" checked={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <SunIcon className="w-6 h-6 fill-current text-white" />
      ) : (
        <MoonIcon className="w-6 h-6 fill-current text-gray-700" />
      )}
    </button>
  );
};

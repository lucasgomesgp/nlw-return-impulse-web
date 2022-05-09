import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";
import useThemeToggle from "../../hooks/useThemeToggle";

export function ToggleMode() {
    const [themeState, setThemeState] = useState<string | null>("");

    useEffect(() => {
        const { theme } = useThemeToggle();
        setThemeState(theme);
    }, [themeState]);

    function handleToggleMode() {
        if (themeState === "dark") {
            localStorage.setItem("theme", "light");
            setThemeState("light");
        } else {
            localStorage.setItem("theme", "dark");
            setThemeState("dark");
        }
        useThemeToggle();
    }
    return (
        <header className="p-4 bg-zinc-800 flex justify-end">
            <button className="rounded-full bg-zinc-700 w-10 h-10 self-end flex items-center justify-center" onClick={handleToggleMode}>
                {themeState === "light" ? (
                    <Moon className="w-7 h-7 " weight="bold" />
                ) : (
                    <Sun className="w-7 h-7 text-yellow-300" weight="bold" />
                )}
            </button>
        </header>
    );
}

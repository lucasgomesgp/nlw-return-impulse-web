
export default function useThemeToggle() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    return { theme };
}
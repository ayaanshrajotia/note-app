/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "note-yellow": "#f6d55c",
                "note-text": "#4b4f61",
                "dark-text": "#eeeeee",
                "dark-bg": "#30302f",
            }
        },
    },
    plugins: [],
};


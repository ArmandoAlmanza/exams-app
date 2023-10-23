/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                menu: "2fr 1fr",
            },
            colors: {
                perfume: {
                    50: "#f9f6fe",
                    100: "#f2eafd",
                    200: "#dfccfb",
                    300: "#d3b9f9",
                    400: "#b98df3",
                    500: "#9e61eb",
                    600: "#8740dd",
                    700: "#722fc1",
                    800: "#622b9e",
                    900: "#50247f",
                    950: "#340e5d",
                },
                canary: {
                    50: "#fdfbed",
                    100: "#f9f3cc",
                    200: "#f3e694",
                    300: "#ecd55d",
                    400: "#e7c238",
                    500: "#e0a620",
                    600: "#c68219",
                    700: "#a45e19",
                    800: "#864a1a",
                    900: "#6e3e19",
                    950: "#3f2009",
                },
            },
        },
    },
    plugins: [],
};

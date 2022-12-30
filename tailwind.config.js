/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#27A0CC",
                    200: "#2496BF",
                    300: "#1F82A6",
                    400: "#186480",
                    500: "#0C3240",
                },
                secondary: {
                    100: "#FF932E",
                    200: "#F48C2C",
                    300: "#DB7E27",
                    400: "#B56821",
                    500: "#754415",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

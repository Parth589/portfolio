/** @type {import('tailwindcss').Config} */
import colors from "./src/assets/colors";

export default {
    content: ["./src/**/*.{html,jsx,tsx}"],
    theme: {
        extend: {
            colors,
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'handwriting': ['Yellowtail', 'cursive']
            }
        },
    },
    plugins: [],
}

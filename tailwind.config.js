/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                backgroundImage: 'url(src/assets/background.svg)',
            },
        },
    },
    plugins: [],
};

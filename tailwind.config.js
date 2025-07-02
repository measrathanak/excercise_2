// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    // tailwind.config.js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kantumruy Pro', 'sans-serif'], // this overrides Tailwind's default
            },
        },
    },
    plugins: [],
}

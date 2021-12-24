module.exports = {
    content: ["./src/_includes/**/*.njk", "./src/**/*.html", "./src/**/*.njk"],
    theme: {
        extend: {
            fontFamily: {
                'sans': [
                    'Inter',
                    'system-ui',
                    'BlinkMacSystemFont',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                'display': [
                    'Notulen Display',
                    'Atkinson Hyperlegible',
                    'system-ui',
                    'BlinkMacSystemFont',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}

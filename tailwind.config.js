module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                'text': '#fff',
                'link': '#42b883',
                'linkHighlight': '#42d392',
                'background': '#1a1a1a',
                'divider': '#5454547a',
                'border': '#fff',
                'active': '#42b883',
                'activeHighlight': '#42d392',
                'danger': '#dc3545'
            }
        }
    },
    plugins: [],
}

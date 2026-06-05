/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",
                secondary: "#8B5CF6",
                accent: "#06B6D4",
                dark: "#0F172A",
                "dark-lighter": "#1E293B",
                card: "#1E293B",
                text: "#F8FAFC",
                muted: "#94A3B8",
            },
            fontFamily: {
                heading: ["Poppins", "Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
                'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
                'card': '0 10px 40px rgba(0, 0, 0, 0.2)',
                'card-hover': '0 20px 50px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-premium': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)',
            },
        },
    },
    plugins: [],
}


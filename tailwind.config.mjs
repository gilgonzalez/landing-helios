/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      transparent: 'transparent',
      emerald: colors.emerald,
      indigo: colors.indigo,
      sky: colors.sky,
      yellow: colors.yellow,
      'yellow-translucent': 'rgba(234, 179, 0, 0.30)',
			'camouflage': {
        '50': '#fff9e4',
        '100': '#fff4c5',
        '200': '#ffed92',
        '300': '#ffe753',
        '400': '#fce41f',
        '500': '#e2cd00',
        '600': '#b5aa00',
        '700': '#898102',
        '800': '#6c6708',
        '900': '#5b580c',
        '950': '#2e2e00',
   	},
		},
		extend: {
      boxShadow: {
        'illuminate': '0 0 30px 5px rgba(234, 179, 8, 0.45)',
        'on': '0 0 30px 1px rgba(234, 179, 8, 0.45)'
      },
      animation: {
        'shake': 'shake 0.5s ', // Duración de la animación y repetición infinita
        fadeInUp: 'fadeInUp 1s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in-out forwards',
        fadeInRight: 'fadeInRight 1s ease-in-out forwards',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },     // Posición inicial y final
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' }, // Movimiento hacia la izquierda
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },  // Movimiento hacia la derecha
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(200px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
    },
	},
	plugins: [],
}

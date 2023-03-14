import type { Config } from 'tailwindcss'

const withOpacity = (color: string) => {
  return `rgba(var(${color}), <alpha-value>)`
}

export default <Partial<Config>>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {

      },
      height: {
        'base-screen': 'calc(100vh - 3.5rem)'
      },
      rotate: {
        'x-90': 'transform: rotateX(90deg)'
      },
      textColor: {
        'base-color': withOpacity('--cl-text-base-color'),
        'base-hover-color': withOpacity('--cl-text-base-hover-color)')

      },
      borderColor: {
        'base-color': withOpacity('--cl-border-base-color'),
        'base-muted-color': withOpacity('--cl-border-base-muted-color')

      },
      backgroundColor: {
        'base-color': withOpacity('--cl-bg-base-color'),
        'base-hover-color': withOpacity('--cl-bg-base-hover-color'),
        'base-muted-color': withOpacity('--cl-bg-base-muted-color')
      },
      keyframes: {
        roll: {
          '0%': { backgroundPosition: '50% 0' },
          '100%': { backgroundPosition: '-190% 0' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        roll: 'roll 5s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp') // 多行省略
  ]
}

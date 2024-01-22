import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  important: 'body',
  theme: {
    extend: {
      colors: {
        violet: {
          500: '#9747FF',
        },
        gray: {
          50: '#E2E2E2',
          100: '#EBEBEB',
          150: '#F6F6F6',
          500: '#9D9D9D',
          800: '#6A6A6A',
          900: '#515151',
        },
        red: {
          50: '#E53E3E1A',
          300: '#FF4747',
          error: '#E53E3E',
        },
        green: {
          50: '#0AB24326',
          400: '#2E7D32',
          500: '#46855B',
        },
        blue: {
          primaryNormal: '#5462BD',
        },
        black: {
          textPrimary: 'rgba(0, 0, 0, 0.87)',
        },
      },
      padding: {
        login: '80px 200px 80px 96px',
        sortButton: '6px 8px',
        chip: '3px 6px',
        cell: '16px 16px 16px 10px',
        sort: '16px 8px 8px 8px',
      },
      boxShadow: {
        sort1: '0px 5px 5px -3px #00000033',
        sort2: '0px 8px 10px 1px #00000024',
        sort3: '0px 3px 14px 2px #0000001F',
      },

      letterSpacing: {
        0.15: '0.15px',
        0.17: '0.17px',

        0.4: '0.4px',
      },
      borderColor: {
        inputBorder: '#0000003B',
      },
      borderRadius: {
        4: '4px',
      },
      borderWidth: {
        1: '1px',
      },
      overflow: {
        unset: 'unset',
      },
    },
  },
  plugins: [],
}
export default config

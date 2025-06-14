/** @type {import('tailwindcss').Config} */
export const content = ['./globalComponents/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './features/**/*.{js,ts,jsx,tsx,mdx}']
export const darkMode = ['class']
export const theme = {
  extend: {
    boxShadow: {
      custom1: '6.5px 13px 13px hsl(0deg 0% 0% / 0.3)',
      customBrightWhite: '0px 0px 34px -5px rgba(201, 201, 201, 0.88)',
      customSubtleDark: '0px 0px 16px -4px rgba(240, 240, 255, 0.5)',
      customSubtleDarkExtra: '0px 0px 8px -2px rgba(240, 240, 255, 0.25)',
    },
    shadow: {},
    fontFamily: {
      sans: ['var(--roboto)'],
      lobster: ['var(--lobster)'],
    },
    colors: {
      // MAIN PROJECT COLORS
      background: 'var(--background)',
      text: 'var(--textColor)',
      title: 'var(--titleColor)',
      bannerName: 'var(--bannerName)',
      hover: 'var(--hover)',
      // opposite: 'var(--background-opposite)',
      backgroundDarker: 'var(--background-darker)',
      // primary: 'var(--primary)',
      // accentOne: 'var(--accentOne)',
      // accentTwo: 'var(--accentTwo)',
      // border: 'var(--accentTwo)',
      // focusColor: 'var(--border-focus)',
      buttonHover: 'var(--buttonHover)',
      adobe1: 'var(--adobeDefault1)',
      adobe2: 'var(--adobeDefault2)',
      adobe3: 'var(--adobeDefault3)',
      // MAIN PROJECT COLORS

      // input is ToggleMode border color
      input: 'var(--input)',
      ring: 'var(--ring)',

      // Text Color
      textColor: 'var(--textColor)',
      textHover: 'var(--textHover)',

      // Shadcn Component Colors
      warning: 'var(--warning)',
      warningForeground: 'var(--warning-foreground)',

      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      neutral: 'var(--neutral)',

      popover: {
        DEFAULT: 'var(--background-new)',
        foreground: 'var(--strongWhite)',
      },

      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },

      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },

      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },

      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },

      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
    },
  },
}
export const plugins = []

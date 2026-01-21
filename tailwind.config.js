module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '430px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {},
      colors: {
        'neutral-white': '#ffffff',
        'grey-30': 'transparent',
        'basic-white': '#ffffff',
        'gold-500': '#e0b45b',
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: 'black',
        accent: {
          DEFAULT: '#FFD700',
          hover: ' #F0E68C',
        },
        gold: {
          500: '#FFD700', // Custom gold color
        },
      },
      backgroundImage: {
        room: "url('/src/assets/img/room.jpg')",
      },
      backgroundImage: {
        'business-bg': "url('/path/to/your/background-image.jpg')",
      },
    },
  },
  plugins: [],
};

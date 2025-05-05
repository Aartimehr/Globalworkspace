/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cricket': "url('/src/utilities/images/—Pngtree—3d render of a cricket_11173054.jpg')",
        'phantoms': "url('/public/phantoms.png')",
        'viper': "url('/public/viper.png')",
        'strikers': "url('/public/striker.png')",
        'phoenix': "url('/public/phoenix.png')",
        'titans': "url('/public/images/titans.png')",
        //'Aboutus': "url('/src/utilities/images/stadium.jpg')",
        'contactus': "url('/src/utilities/images/stadiumm.jpg')",
        'register': "url('/src/utilities/images/cricketball.jpg')",
        'cricket-ball-resting-on-bat': "url('/src/utilities/images/cricket-ball-resting-on-bat.jpg')",
        // 'service': "url('/src/utilities/images/cricketplayer.jpg')",
      },keyframes: {
        deconstructed1: { 
          '0%': { transform: 'translateX(100%)' },
          '26%': { transform: 'translateX(0%)' },
          '83%': { transform: 'translateX(-0.1%)' },
          '100%': { transform: 'translateX(-120%)' },
        },
        deconstructed2: {
          '0%': { transform: 'translateX(100%)' },
          '24%': { transform: 'translateX(0.5%)' },
          '82%': { transform: 'translateX(-0.2%)' },
          '100%': { transform: 'translateX(-125%)' },
        },
        deconstructed3: {
          '0%': { transform: 'translateX(100%)' },
          '22%': { transform: 'translateX(0%)' },
          '81%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-130%)' },
        },
        deconstructed4: {
          '0%': { transform: 'translateX(100%)' },
          '20%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-135%)' },
        },
      },
      animation: {
        deconstructed1: 'deconstructed1 5s infinite',
        deconstructed2: 'deconstructed2 5s infinite',
        deconstructed3: 'deconstructed3 5s infinite',
        deconstructed4: 'deconstructed4 5s infinite',
      },
      
    }
  },
  plugins: [],
}
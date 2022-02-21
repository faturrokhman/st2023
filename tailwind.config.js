module.exports = {
  content: ["./public/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        primary: "#065F46", //emerald.800
        'primary-hover': "#064E3B", //emerald.900
        'ring': "#047857", //emerald.700
        'text-color': "#222B2A", 
        'text-body': "#52605F",
        'body-white': '#F5FFFE', //putih
      },
      screens: {
        'xss': '360px',
      },
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
  ],
}

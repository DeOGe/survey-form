module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      minHeight: {
        '0'       : '0',
        '1/10'  : '10%',
        '1/5'   : '20%',
        '3/10'  : '30%',
        '2/5'   : '40%',
        '1/2'   : '50%',
        '3/5'   : '60%',
        '7/10'  : '70%',
        '4/5'   : '80%',
        '9/10'  : '90%',
        'full'  : '100%',
       }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
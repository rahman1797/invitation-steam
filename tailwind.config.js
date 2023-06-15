/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/page/**/*.{js,html,jsx}"],
  theme: {
    extend: {
      colors: {
        'kalananti': '#235F9C',
        'custom_1': '#FFEDCB',
        'main-background': '#ebfeff',
        'blue-kalananti': '#275e9b',
        'blue-gcb': '#2EB5C0',
        'black-kalananti': '#252525',
        'black-kalananti-soft': '#4d4d4d',
        'kuning-footer': '#F9C013',
        'kuning-cta': '#f9c113',
        'kuning-pastel': '#f0f0b2',
        'orange-cta': '#ff8b42'
      },
      backgroundImage: {
        'gradient_1': 'linear-gradient(135deg, rgba(46,181,193,1) 0%, rgba(21,140,176,1) 50%, rgba(46,181,193,1) 100%);',
        'gradient_2': 'linear-gradient(100deg, rgba(255,251,248,1) 0%, rgba(254,231,213,1) 99%);',
        'gradient_3': 'linear-gradient(100deg, rgba(255,121,75,1) 0%, rgba(235,93,31,1) 99%);',
        'gradient_4': 'linear-gradient(183deg, rgba(27,124,169,1) 0%, rgba(66,174,193,1) 33%, rgba(27,124,169,1) 72%, rgba(80,192,202,1) 99%);'
      },
      display: {
        'hidden-cus': 'hidden'
      },
      spacing: {
        '55-percent': '55%'
      },
      margin: {
        '1-cus': '0.25rem', 
        '2-cus': '0.5rem',
        '3-cus': '0.75rem',
        '4-cus': '1rem',
        '5-cus': '1.25rem',
        '69-cus': '69px',
        '350-cus': '350px',
        '470-cus': '470px',
        '490-cus': '490px',
        '500-cus': '500px',
        '510-cus': '510px',
        '750-cus': '750px'
      },
      padding: {
        '1-cus': '0.25rem', 
        '2-cus': '0.5rem',
        '3-cus': '0.75rem',
        '4-cus': '1rem',
        '5-cus': '1.25rem',
        '8-cus' : '8px',
        '17-cus': '17px',
        '12-cus': '12px',
        '24-cus': '24px'
      },
      height: {
        '250-cus': '250px',
        '300-cus': '300px',
        '350-cus': '350px',
        '400-cus': '400px',
        '450-cus': '450px',
        '485-cus': '485px',
        '500-cus': '500px',
        '600-cus': '600px',
        '700-cus': '700px',
        '800-cus': '800px',
        '900-cus': '900px',
        '1000-cus': '1000px'
      },
      width: {
        '150-cus': '150px',
        '200-cus': '200px',
        '220-cus': '220px',
        '250-cus': '250px',
        '275-cus': '275px',
        '300-cus': '300px',
        '350-cus': '350px',
        '375-cus': '375px',
        '400-cus': '400px',
        '450-cus': '450px',
        '600-cus': '600px',
        '700-cus': '700px',
        '800-cus': '800px',
        '900-cus': '900px',
      },
      minWidth: {
        '200-cus': '200px',
        '250-cus': '250px',
        '275-cus': '275px'
      },
      borderWidth: {
        '100-cus': '100px',
        '500-cus': '500px'
      }
    },
  },
  plugins: [],
}

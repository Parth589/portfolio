/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,jsx}"],
    theme: {
        extend: {
            colors:{
                'black':'#000',
                'white':'#fff',
                'blue':'#2900E8',
                'grayBlue':'#1B1B1F',
                'purple':'#A5A1FF',
                'green':'#81ffca',
                'grayGreen':'#243128',
                'pink':'#ffaed8',
                'yellow':'#d4c951',
                'grayYellow':'#1D1C16',
                'skyBlue':'#A3D5D1',
                'darkSkBlue':'#070C0C',
                'graySkBlue':'#B7BFBF',
                'darkPink':'#A3D5D1',
                'grayPink':'#B7BFBF',
                'lightyellow':'#A3D5D1',
                'darkYellow':'#070C0C',
                // 'grayYellow':'#B7BFBF',
            },
            fontFamily:{
                'sans':['Montserrat', 'sans-serif'],
                'handwriting':['Yellowtail', 'cursive']
            }
        },
    },
    plugins: [],
}


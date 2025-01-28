export interface ColorVariants {
  100?: string; // Optional, as not all colors need all variants
  200?: string;
  300?: string;
  400?: string;
  500: string; // Base color (required)
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ColorPalette {
  black: ColorVariants;
  white: ColorVariants;

  blue: ColorVariants;
  purple: ColorVariants;
  green: ColorVariants;
  skyBlue: ColorVariants;
  pink: ColorVariants;
  yellow: ColorVariants;
}

// Define the color palette
const colors: ColorPalette = {
  black: {
    500: '#000', // Base black
  },
  white: {
    500: '#fff', // Base white
  },

  blue: {
    100: '#E6F4F3',
    200: '#C7E9E7',
    300: '#A3D5D1',
    400: '#7AC1BC',
    500: '#4FA8A2', // Base blue
    600: '#2900E8',
    700: '#1B1B1F',
  },

  purple: {
    100: '#E0DFFF',
    200: '#C5C4FF',
    300: '#A5A1FF',
    400: '#8580FF',
    500: '#625EFF', // Base purple
    600: '#1B1B1F',
  },

  green: {
    100: '#E6F9E5',
    200: '#D2F5D0',
    300: '#B6F9B2',
    400: '#9AE697',
    500: '#7ED37A', // Base green
    600: '#222926',
  },

  skyBlue: {
    100: '#E6E8E8',
    200: '#CED2D2',
    300: '#B7BFBF',
    400: '#9FA9A9',
    500: '#070C0C', // Base sky blue
  },

  pink: {
    100: '#FFE6F2',
    200: '#FFD1E8',
    300: '#FFAED8',
    400: '#FF8AC8',
    500: '#FF66B8', // Base pink
    600: '#A3D5D1',
    700: '#B7BFBF',
  },

  yellow: {
    100: '#FFF9CC',
    200: '#FFF6B3',
    300: '#FFF480',
    400: '#FFF266',
    500: '#D4C951', // Base yellow
    600: '#1D1C16',
  },
};

export default colors;

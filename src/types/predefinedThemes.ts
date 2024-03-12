import { Theme } from './themes';

export const lightTheme: Theme = {
  colors: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: 'bg-blue-700 text-white',
    secondary: 'bg-gray-700 text-white',
    success: 'bg-green-700 text-white',
    warning: 'bg-yellow-700 text-white',
    error: 'bg-red-700 text-white',
  },
};

export const defaultTheme: Theme = {
  colors: {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  },
};

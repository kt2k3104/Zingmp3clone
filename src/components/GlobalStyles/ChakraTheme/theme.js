import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#170f23',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
      },
      input: {
        '&::placeholder': {
          color: '#fff',
        },
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  breakpoints: {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '960px',
    l: '1133px',
    xl: '1200px',
    xxl: '1350px',
    xxxl: '1536px',
  },
});

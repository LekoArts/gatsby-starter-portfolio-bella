import Typography from 'typography';

const typography = new Typography({
  title: 'Gatsby Starter Portfolio Bella',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Bree Serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  googleFonts: [
    {
      name: 'Bree Serif',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  scaleRatio: 3.998,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;

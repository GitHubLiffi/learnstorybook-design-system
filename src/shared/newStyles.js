import { css } from '@emotion/react';

export const color = {
  // Figma Specifications
  primary: '#2196F3',
  primaryDark: '#1E88E5',

  accentLight1: '#0078D4',
  accentLight2: '#005FB8',
  accentLight3: '#005FB8',

  textPrimary: '#000000',
  textSecondary: 'rgba(0, 0, 0, 0.61)',
  textTertiary: 'rgba(0, 0, 0, 0.44)',

  primaryColourShades: {
    50: '#E3F2FD',
    600: '#039BE5',
    800: '#0277BD',
    900: '#01579B'
  },

  secondaryColourShades: {
    50: '#ECEFF1',
    100: '#CFD8DC',
    600: '#546E7A',
    900: '#263238'
  },

  neutralToneShades: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    300: '#F5F5F5',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
  },

  systemGreenShades: {
    50: '#E8F5E9',
    100: '#4CAF50',
    600: '#2E7D32',
    900: '#1B5E20'
  },
  systemBlueShades: {
    50: '#E3F2FD',
    100: '#03A9F4',
    600: '#0288D1',
    900: '#01579B'
  },
  systemAmberShades: {
    50: '#FFF3E0',
    100: '#FF9800',
    600: '#F57C00',
    900: '#EF6C00'
  },
  systemRedShades: {
    50: '#FEEBEE',
    100: '#EF5350',
    600: '#D32F2F',
    900: '#B71C1C'
  },
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    overline: '12',
    body2: '14',
    body1: '16',
    subtitle2: '14',
    subtitle1: '16',
    h6: '20',
    h5: '24',
    h4: '34',
    h3: '48',
    h2: '60',
    h1: '96'
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

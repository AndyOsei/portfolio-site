import { theme } from '@chakra-ui/core';
import React from 'react';

const customIcons = {
  plus: {
    path: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-plus"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
};

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  colors: {
    ...theme.colors,
    // dark: '#0E1319',
    // darkLight: '#2C3541',
    // ash: '#D9D9DA'
    dark: {
      50: '#eff2f6',
      100: '#d2d8df',
      200: '#b3bdc9',
      300: '#94a2b6',
      400: '#7488a3',
      500: '#5b6f89',
      600: '#47566a',
      700: '#343e4b',
      800: '#1e252d',
      900: '#090c10',
    },
    darkLight: {
      50: '#ebf3fd',
      100: '#cfd8e3',
      200: '#b3bdcc',
      300: '#96a3b6',
      400: '#7889a0',
      500: '#5f7087',
      600: '#495769',
      700: '#333e4c',
      800: '#1d2530',
      900: '#050c16',
    },
    cream: {
      50: '#f8f0f2',
      100: '#d8d8d9',
      200: '#bebebe',
      300: '#a5a5a5',
      400: '#8b8b8b',
      500: '#717171',
      600: '#585858',
      700: '#3f3f3f',
      800: '#262627',
      900: '#130b0d',
    },
  },
  fonts: {
    body: 'avenir next, system-ui, sans-serif',
    heading: 'Bebas Neue, Georgia, serif',
    mono: 'Menlo, monospace',
  },
};

export default customTheme;

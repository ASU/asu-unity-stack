import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontCode: 'monospace',

  brandTitle: 'Unity Design System Storybook',
  brandUrl: './',
  brandImage: 'https://unity.web.asu.edu/@asu/unity-bootstrap-theme/static/media/arizona-state-university-logo.a161f814.png',
  brandTarget: '_self',

  //
  colorPrimary: '#8C1D40',
  colorSecondary: '#8C1D40',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#8C1D40',
  barBg: '#E8E8E8',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#747474',
  inputTextColor: '#191919',
  inputBorderRadius: 0,
});

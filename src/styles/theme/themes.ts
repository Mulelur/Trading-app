const lightTheme = {
  primary: '#12161E',
  text: '#12161E',
  textSecondary: 'rgb(102, 191, 191)',
  background: 'rgb(234, 246, 246)',
  backgroundVariant: 'rgb(102, 191, 191)',
  border: 'rgb(102, 191, 191)',
  borderLight: 'rgb(196, 212, 237, .3)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: '#2c2525',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

import { ThemeProvider } from "styled-components";

const BREAKPOINT_WIDTH = {
  XS: "320px",
  S: "414px",
  M: "768px",
  XL: "1280px",
};

export const theme = {
  fonts: {
    default: "Lato-regular, sans-serif",
    latoBlack: "Lato-black, sans-serif",
    latoBold: "Lato-bold, sans-serif",
    latoRegularItalic: "Lato-regular-italic, sans-serif",
    latoBoldItalic: "Lato-bold-italic, sans-serif",
  },
  breakpoints: BREAKPOINT_WIDTH,
  colors: {
    // defined in design system
    black: "#000",
    white: "#fff",
    text: "#3c3c3c",
    accent: "#e4374c",
    interactions: "#3b91d6",
    error: "#e20000",
    success: "#03a81b",
    faceboolBlue: "#3b5998",
    darkGrey: "#444",
    midGrey: "#979797",
    lightGrey: "#ccc",
    // uncategorized rest
    gray0: "#444",
    gray1: "#505050",
    gray2: "#979797",
    gray3: "#ccc",
    gray4: "#ebebeb",
    gray5: "#f6f6f6",
    red0: "#e20000",
    blue0: "#3b91d6",
    disabled: "#d6d6d6",
    main: "#e4374c",
    navOverlayBg: "#452b4e",
    pageBg: "#fafafa",
    favoriteCircle: "#FFB100",
    favoriteStar: "#EC8B44",
    redAccent: "#CB2E41",
    grayAccent: "#F0F0F0",
    coinBlue: "#2BA1B7",
    aboRed: "#BA3554",
    aboBanderole: "#7B1641",
    coinsBlue: "#11668A",
  },
};

export const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);
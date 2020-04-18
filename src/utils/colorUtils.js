const COLORS = {
  white: '#ffffff',
  black: '#000000',
  orange: '#f95919',
  red: '#b75645',
  blue: '#007aff', // Eat-in blue
  turquoise: '#369d94',
  gallery: '#eeeeee',
  zircon: '#dddddd',
  lightGray: '#cccccc',
  silverSand: '#bbbbbb',
  magnesium: '#aaaaaa',
  grayChateau: '#999999',
  nero: '#222222',
  montana: '#333333',
  shipGray: '#444444',
  stormDust: '#555555',
  doveGray: '#666666',
  battleshipGray: '#777777',
  antiFlashWhite: '#f0f3f4',
  gumbo: '#7897aa',
  aquaSqueeze: '#e5f0f5',
  iosBlue: '#007aff', // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/,
  porcelain: '#eef3f4',
  putty: '#d7b470', // Yellow-ish, used for canceled orders badges
  sunglo: '#c6665e', // Red-ish, used for refunded orders badges
  mediumOrchid: '#af52de', // Takeaway purple
  scarlet: '#ff2d55', // Table order red
  ufoGreen: '#4cd964', // Delivery green
};

export const LIGHT_THEME = {
  name: 'light',
  text: {
    primary: COLORS.nero,
    secondary: COLORS.white,
    light: COLORS.shipGray,
  },
  borders: {
    primary: COLORS.lightGray,
    secondary: COLORS.zircon,
  },
  tableBorders: {
    primary: COLORS.porcelain,
    secondary: COLORS.gallery,
    tertiary: COLORS.porcelain,
  },
  backgrounds: {
    primary: COLORS.gallery,
    secondary: COLORS.zircon,
    tertiary: COLORS.lightGray,
  },
  accents: {
    primary: COLORS.silverSand,
    secondary: COLORS.magnesium,
    tertiary: COLORS.grayChateau,
  },
  screenBackgrounds: {
    primary: COLORS.antiFlashWhite,
  },
  boxBackgrounds: {
    primary: COLORS.white,
    secondary: COLORS.gallery,
  },
  inputBackgrounds: {
    primary: COLORS.antiFlashWhite,
    secondary: COLORS.aquaSqueeze,
  },
  sidebarBackgrounds: {
    primary: COLORS.white,
  },
  inputText: {
    primary: COLORS.gumbo,
    secondary: COLORS.silverSand,
  },
  tabBackgrounds: {
    primary: COLORS.white,
  },
  circleBackgrounds: {
    primary: COLORS.zircon,
  },
  tabBar: {
    active: COLORS.nero,
    inActive: COLORS.gray,
  },
};

export const DARK_THEME = {
  name: 'dark',
  text: {
    primary: COLORS.white,
    secondary: COLORS.nero,
    light: COLORS.shipGray,
  },
  borders: {
    primary: COLORS.shipGray,
    secondary: COLORS.stormDust,
  },
  tableBorders: {
    primary: COLORS.shipGray,
    secondary: COLORS.stormDust,
    tertiary: COLORS.shipGray,
  },
  backgrounds: {
    primary: COLORS.nero,
    secondary: COLORS.montana,
    tertiary: COLORS.shipGray,
  },
  accents: {
    primary: COLORS.stormDust,
    secondary: COLORS.doveGray,
    tertiary: COLORS.battleshipGray,
  },
  screenBackgrounds: {
    primary: COLORS.nero,
  },
  boxBackgrounds: {
    primary: COLORS.montana,
    secondary: COLORS.shipGray,
  },
  inputBackgrounds: {
    primary: COLORS.stormDust,
    secondary: COLORS.doveGray,
  },
  sidebarBackgrounds: {
    primary: COLORS.montana,
  },
  inputText: {
    primary: COLORS.white,
    secondary: COLORS.silverSand,
  },
  tabBackgrounds: {
    primary: COLORS.shipGray,
  },
  circleBackgrounds: {
    primary: COLORS.stormDust,
  },
  tabBar: {
    active: COLORS.white,
    inActive: COLORS.gray,
  },
};

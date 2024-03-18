export enum IconCatalog {
  arrowLeftStartOnRectangle = 'arrowLeftStartOnRectangle',
  hamburger = 'hamburger',
  xMark = 'xMark',
}

interface IconType {
  outline: string;
  solid?: string;
}

export const Icons: Record<IconCatalog, IconType> = {
  [IconCatalog.arrowLeftStartOnRectangle]: {
    outline:
      'M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75',
  },
  [IconCatalog.hamburger]: { outline: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' },
  [IconCatalog.xMark]: { outline: 'M6 18L18 6M6 6L18 18' },
};

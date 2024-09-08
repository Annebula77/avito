interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const breakpoints: Breakpoints = {
  xs: '576px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

type MediaQueryFunction = (styles: TemplateStringsArray) => string;

export const media: Record<keyof Breakpoints, MediaQueryFunction> = {
  xs: styles =>
    `@media only screen and (max-width: ${breakpoints.xs}) { ${styles} }`,
  sm: styles =>
    `@media only screen and (min-width: ${breakpoints.sm}) { ${styles} }`,
  md: styles =>
    `@media only screen and (min-width: ${breakpoints.md}) { ${styles} }`,
  lg: styles =>
    `@media only screen and (min-width: ${breakpoints.lg}) { ${styles} }`,
  xl: styles =>
    `@media only screen and (min-width: ${breakpoints.xl}) { ${styles} }`,
  xxl: styles =>
    `@media only screen and (min-width: ${breakpoints.xxl}) { ${styles} }`,
};

export default breakpoints;

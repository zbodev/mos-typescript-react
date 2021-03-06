import portalConfig from '../portalConfig';

export default {
  fontFamily: ['"Cabin"', '"Helvetica"', '"Arial"', 'san-serif'].join(','),
  h1: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: portalConfig.theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: portalConfig.theme.palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: portalConfig.theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: portalConfig.theme.palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: portalConfig.theme.palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: portalConfig.theme.palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: portalConfig.theme.palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: portalConfig.theme.palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};

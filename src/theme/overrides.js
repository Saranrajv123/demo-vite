import { alpha } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { purple } from '@mui/material/colors';

// ----------------------------------------------------------------------

export function overrides(theme) {
    console.log('theme ', theme.palette);
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    fontFamily: 'system-ui',
                },
                html: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    WebkitOverflowScrolling: 'touch',
                    fontFamily: 'system-ui',
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    fontFamily: 'system-ui',
                },
                '#root': {
                    width: '100%',
                    height: '100%',
                    fontFamily: 'system-ui',
                },
                input: {
                    '&[type=number]': {
                        MozAppearance: 'textfield',
                        '&::-webkit-outer-spin-button': {
                            margin: 0,
                            WebkitAppearance: 'none',
                        },
                        '&::-webkit-inner-spin-button': {
                            margin: 0,
                            WebkitAppearance: 'none',
                        },
                    },
                },
                img: {
                    maxWidth: '100%',
                    display: 'inline-block',
                    verticalAlign: 'bottom',
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha(theme.palette.grey[900], 0.8),
                },
                invisible: {
                    background: 'transparent',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                },
                containedPrimary: {
                    backgroundColor: purple[500],
                    '&:hover': {
                        backgroundColor: purple[700],
                    },
                },
                outlined: {
                    borderColor: purple[500],
                    color: purple[700],
                    '&:hover': {
                        borderColor: purple[500],
                        backgroundColor: 'rgba(128, 0, 128, 0.04)',
                    },
                },
                // sizeLarge: {
                //   minHeight: '48px',
                //   padding: '12px 24px',
                // },
            },
        },
        // MuiButton: {
        //   styleOverrides: {
        //     root: {
        //       color: theme.palette.common.white,
        //       backgroundColor: theme.palette.primary.dark,
        //       borderRadius: "20px",
        //       '&:hover': {
        //         color: theme.palette.common.white,
        //         backgroundColor: theme.palette.secondary.dark,
        //       },
        //     },
        //     containedInherit: {
        //       color: theme.palette.common.white,
        //       backgroundColor: theme.palette.primary.dark,
        //       borderRadius: "20px",
        //       '&:hover': {
        //         color: theme.palette.common.white,
        //         backgroundColor: theme.palette.primary.dark,
        //       },
        //     },
        //     sizeLarge: {
        //       minHeight: 48,
        //     },
        //   },
        // },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.card,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    position: 'relative',
                    zIndex: 0, // Fix Safari overflow: hidden with border radius
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2' },
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0),
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: alpha(theme.palette.grey[500], 0.24),
                    },
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiTableCell: {
            styleOverrides: {
                // head: {
                //   color: theme.palette.text.secondary,
                //   backgroundColor: theme.palette.background.neutral,
                // },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[800],
                },
                arrow: {
                    color: theme.palette.grey[800],
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2),
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1),
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...theme.typography.body2,
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z1,
                    borderRadius: Number(theme.shape.borderRadius) * 2
                }
            }
        }
    };
}

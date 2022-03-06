"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(308);
;// CONCATENATED MODULE: external "@material-ui/core/CssBaseline"
const CssBaseline_namespaceObject = require("@material-ui/core/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(130);
;// CONCATENATED MODULE: ./theme/coreTheme.js

const colors = {
    blue: "#2F80ED",
    red: '#ed4337',
    orange: '#ffb347',
    lightBlack: 'rgba(0, 0, 0, 0.87)'
};
const coreTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1600,
            xl: 1920
        }
    },
    shape: {
        borderRadius: '10px'
    },
    typography: {
        fontFamily: [
            'Inter',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"', 
        ].join(','),
        h1: {
            fontFamily: [
                '"Helvetica Neue"',
                'Inter', 
            ],
            fontSize: '60px',
            fontWeight: 700,
            lineHeight: 1.167,
            letterSpacing: '1px'
        },
        h2: {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: 1.167
        },
        h3: {
            fontFamily: [
                'Inter', 
            ],
            fontSize: '20px',
            fontWeight: 600
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.167
        },
        h5: {
            fontSize: '15px',
            fontWeight: 700,
            lineHeight: 1.167
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.167,
            letterSpacing: '2px',
            ['@media (max-width:576px)']: {
                fontSize: '1.2rem'
            }
        },
        subtitle1: {
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: 1.167,
            ['@media (max-width:576px)']: {
                fontSize: '0.7rem'
            }
        },
        body1: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1.7,
            ['@media (max-width:576px)']: {
                fontSize: '0.8rem'
            }
        }
    },
    palette: {
        primary: {
            main: 'rgba(0, 0, 0, 0.87)'
        },
        secondary: {
            main: '#EFEFEF'
        },
        error: {
            main: '#dc3545'
        }
    },
    overrides: {
        MuiPaper: {
            elevation1: {
                "box-shadow": '0px 7px 7px #0000000A;',
                "-webkit-box-shadow": '0px 7px 7px #0000000A;',
                "-moz-box-shadow": '0px 7px 7px #0000000A;'
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: '12.5px 14px'
            }
        },
        MuiTooltip: {
            tooltip: {
                maxWidth: 'none'
            }
        },
        MuiButton: {
            sizeLarge: {
                borderRadius: '50px',
                width: '260px',
                height: '60px'
            },
            root: {
                minWidth: '50px',
                borderRadius: '32px'
            },
            outlinedSizeSmall: {
                fontSize: '0.7rem',
                padding: '6px 9px',
                ['@media (max-width:576px)']: {
                    padding: '3px 0px'
                }
            },
            textSizeLarge: {
                fontSize: '2.4rem',
                ['@media (max-width:576px)']: {
                    fontSize: '2rem'
                }
            },
            label: {
                textTransform: 'capitalize'
            },
            outlinedPrimary: {
                border: '1px solid #EAEAEA',
                "&:hover": {
                    backgroundColor: colors.blue + ' !important',
                    color: '#fff'
                }
            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: '800px'
            }
        },
        MuiToggleButton: {
            root: {
                flex: 1,
                padding: '9px 6px'
            }
        },
        MuiSnackbar: {
            root: {
                maxWidth: 'calc(100vw - 24px)'
            },
            anchorOriginBottomLeft: {
                bottom: '12px',
                left: '12px',
                '@media (min-width: 960px)': {
                    bottom: '50px',
                    left: '80px'
                }
            }
        },
        MuiInputBase: {
            input: {
                fontSize: '14px'
            },
            root: {
                margin: '0px',
                '&:before': {
                    borderBottom: 'none !important',
                    height: '0px'
                },
                '&:after': {
                    borderBottom: 'none !important',
                    height: '0px'
                }
            }
        },
        MuiAccordion: {
            root: {
                margin: '0px',
                '&:before': {
                    backgroundColor: 'none',
                    height: '0px'
                },
                '&$expanded': {
                    margin: '0px'
                }
            }
        },
        MuiAccordionSummary: {
            root: {
                padding: '0px 24px',
                '@media (max-width:576px)': {
                    padding: '0px 6px'
                }
            },
            content: {
                margin: '0px !important'
            }
        },
        MuiAccordionDetails: {
            root: {
                padding: '0'
            }
        },
        MuiFormHelperText: {
            contained: {
                textAlign: 'end'
            }
        }
    }
};
/* harmony default export */ const theme_coreTheme = (coreTheme);

;// CONCATENATED MODULE: ./components/snackbar/snackbar.jsx




const iconStyle = {
    fontSize: '22px',
    marginRight: '10px',
    verticalAlign: 'middle'
};
function CloseIcon(props) {
    const { color  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.SvgIcon, {
        style: {
            fontSize: '22px'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: color,
            d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        })
    }));
}
function SuccessIcon(props) {
    const { color  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.SvgIcon, {
        style: iconStyle,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: color,
            d: "M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10.75,16.518,6.25,12.2l1.4-1.435L10.724,13.7l6.105-6.218L18.25,8.892Z"
        })
    }));
}
function ErrorIcon(props) {
    const { color  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.SvgIcon, {
        style: iconStyle,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: color,
            d: "M16.971,0H7.029L0,7.029V16.97L7.029,24H16.97L24,16.971V7.029L16.971,0Zm-1.4,16.945-3.554-3.521L8.5,16.992,7.079,15.574l3.507-3.566L7,8.536,8.418,7.119,12,10.577l3.539-3.583,1.431,1.431-3.535,3.568L17,15.515Z"
        })
    }));
}
function WarningIcon(props) {
    const { color  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.SvgIcon, {
        style: iconStyle,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: color,
            d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
        })
    }));
}
function InfoIcon(props) {
    const { color  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(core_.SvgIcon, {
        style: iconStyle,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: color,
            d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5"
        })
    }));
}
class MySnackbar extends external_react_.Component {
    state = {
        open: this.props.open
    };
    handleClick = ()=>{
        this.setState({
            open: true
        });
    };
    handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            open: false
        });
    };
    render() {
        const { type , message  } = this.props;
        let icon = /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {
            color: colors.blue
        });
        let color = colors.blue;
        let messageType = '';
        let actions = [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                "aria-label": "Close",
                onClick: this.handleClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {})
            }, "close"), 
        ];
        switch(type){
            case 'Error':
                icon = /*#__PURE__*/ jsx_runtime_.jsx(ErrorIcon, {
                    color: colors.red
                });
                color = colors.red;
                messageType = "Error";
                break;
            case 'Success':
                icon = /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {
                    color: colors.blue
                });
                color = colors.blue;
                messageType = "Success";
                break;
            case 'Warning':
                icon = /*#__PURE__*/ jsx_runtime_.jsx(WarningIcon, {
                    color: colors.orange
                });
                color = colors.orange;
                messageType = "Warning";
                break;
            case 'Info':
                icon = /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {
                    color: colors.blue
                });
                color = colors.blue;
                messageType = "Info";
                break;
            case 'Hash':
                icon = /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {
                    color: colors.blue
                });
                color = colors.blue;
                messageType = "Hash";
                let snackbarMessage = 'https://etherscan.io/tx/' + message;
                actions = [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        variant: "text",
                        size: "small",
                        onClick: ()=>window.open(snackbarMessage, "_blank")
                        ,
                        children: "View"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        "aria-label": "Close",
                        onClick: this.handleClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {})
                    }, "close"), 
                ];
                break;
            default:
                icon = /*#__PURE__*/ jsx_runtime_.jsx(SuccessIcon, {
                    color: colors.blue
                });
                color = colors.blue;
                messageType = "Success";
                break;
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Snackbar, {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
            },
            open: this.state.open,
            autoHideDuration: 6000,
            onClose: this.handleClose,
            message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    padding: '12px',
                    borderLeft: '5px solid ' + color,
                    borderRadius: '4px'
                },
                children: [
                    icon,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            maxWidth: '400px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "body1",
                                style: {
                                    fontSize: '12px',
                                    color: color
                                },
                                children: messageType
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "body1",
                                style: {
                                    fontSize: '10px'
                                },
                                children: message
                            })
                        ]
                    })
                ]
            }),
            action: actions
        }));
    }
}
/* harmony default export */ const snackbar = (MySnackbar);

// EXTERNAL MODULE: ./stores/constants/constants.js
var constants = __webpack_require__(748);
// EXTERNAL MODULE: ./stores/index.js + 1 modules
var stores = __webpack_require__(421);
;// CONCATENATED MODULE: ./components/snackbar/snackbarController.jsx






const emitter = stores/* default.emitter */.Z.emitter;
const styles = (theme)=>({
        root: {}
    })
;
class SnackbarController extends external_react_.Component {
    constructor(props){
        super();
        this.state = {
            open: false,
            snackbarType: null,
            snackbarMessage: null
        };
    }
    componentWillMount() {
        emitter.on(constants/* ERROR */.pn, this.showError);
        emitter.on(constants/* TX_SUBMITTED */.XY, this.showHash);
    }
    componentWillUnmount() {
        emitter.removeListener(constants/* ERROR */.pn, this.showError);
        emitter.removeListener(constants/* TX_SUBMITTED */.XY, this.showHash);
    }
    showError = (error)=>{
        const snackbarObj1 = {
            snackbarMessage: null,
            snackbarType: null,
            open: false
        };
        this.setState(snackbarObj1);
        const that = this;
        setTimeout(()=>{
            const snackbarObj = {
                snackbarMessage: error.toString(),
                snackbarType: 'Error',
                open: true
            };
            that.setState(snackbarObj);
        });
    };
    showHash = (txHash)=>{
        const snackbarObj2 = {
            snackbarMessage: null,
            snackbarType: null,
            open: false
        };
        this.setState(snackbarObj2);
        const that = this;
        setTimeout(()=>{
            const snackbarObj = {
                snackbarMessage: txHash,
                snackbarType: 'Hash',
                open: true
            };
            that.setState(snackbarObj);
        });
    };
    render() {
        const { snackbarType , snackbarMessage , open  } = this.state;
        if (open) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(snackbar, {
                type: snackbarType,
                message: snackbarMessage,
                open: true
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {}));
        }
    }
}
/* harmony default export */ const snackbarController = ((0,styles_.withStyles)(styles)(SnackbarController));

;// CONCATENATED MODULE: external "@material-ui/core/colors"
const colors_namespaceObject = require("@material-ui/core/colors");
;// CONCATENATED MODULE: ./theme/light.js



// Create a theme instance.
const theme = (0,styles_.createMuiTheme)({
    ...theme_coreTheme,
    palette: {
        ...theme_coreTheme.palette,
        background: {
            default: '#fff',
            paper: '#fff'
        },
        accountButton: {
            default: '#EFEFEF'
        },
        primary: {
            main: '#2F80ED'
        },
        secondary: {
            main: '#DEDEDE'
        },
        type: 'light'
    },
    overrides: {
        ...theme_coreTheme.overrides,
        MuiButton: {
            ...theme_coreTheme.overrides.MuiButton,
            outlinedPrimary: {
                border: '1px solid #EAEAEA',
                "&:hover": {
                    backgroundColor: '#2F80ED !important',
                    color: '#fff'
                }
            }
        },
        MuiInputBase: {
            ...theme_coreTheme.overrides.MuiInputBase,
            root: {
                background: "#fff"
            }
        },
        MuiOutlinedInput: {
            ...theme_coreTheme.overrides.MuiOutlinedInput,
            notchedOutline: {
                borderColor: "#FFF"
            }
        },
        MuiSnackbarContent: {
            root: {
                color: 'rgba(0, 0, 0, 0.87)',
                backgroundColor: '#F8F9FE',
                padding: '0px',
                minWidth: 'auto',
                '@media (min-width: 960px)': {
                    minWidth: '500px'
                }
            },
            message: {
                padding: '0px'
            },
            action: {
                marginRight: '0px'
            }
        }
    }
});
/* harmony default export */ const light = (theme);

;// CONCATENATED MODULE: ./theme/dark.js


// Create a theme instance.
const dark_theme = (0,styles_.createMuiTheme)({
    ...theme_coreTheme,
    palette: {
        ...theme_coreTheme.palette,
        background: {
            default: '#22252E',
            paper: '#2B2E3C'
        },
        primary: {
            main: '#2F80ED'
        },
        type: 'dark'
    },
    overrides: {
        ...theme_coreTheme.overrides,
        MuiButton: {
            ...theme_coreTheme.overrides.MuiButton,
            outlinedPrimary: {
                border: '1px solid #FFFFFF1A',
                "&:hover": {
                    backgroundColor: '#2F80ED !important',
                    color: '#fff'
                }
            }
        },
        MuiInputBase: {
            ...theme_coreTheme.overrides.MuiInputBase,
            root: {
                background: "#fff"
            }
        },
        MuiOutlinedInput: {
            ...theme_coreTheme.overrides.MuiOutlinedInput,
            notchedOutline: {
                borderColor: "#FFF"
            }
        },
        MuiSnackbarContent: {
            root: {
                color: '#fff',
                backgroundColor: '#2B2E3C',
                padding: '0px',
                minWidth: 'auto',
                '@media (min-width: 960px)': {
                    minWidth: '500px'
                }
            },
            message: {
                padding: '0px'
            },
            action: {
                marginRight: '0px'
            }
        }
    }
});
/* harmony default export */ const theme_dark = (dark_theme);

;// CONCATENATED MODULE: ./pages/_app.js





// import ShutdownNotice from '../components/shutdownNotice'





function MyApp({ Component , pageProps  }) {
    const { 0: themeConfig , 1: setThemeConfig  } = (0,external_react_.useState)(light);
    const changeTheme = (dark)=>{
        setThemeConfig(dark ? theme_dark : light);
        localStorage.setItem("yearn.finance-dark-mode", dark ? "dark" : "light");
    };
    (0,external_react_.useEffect)(function() {
        const localStorageDarkMode = window.localStorage.getItem("yearn.finance-dark-mode");
        changeTheme(localStorageDarkMode ? localStorageDarkMode === "dark" : false);
    }, []);
    (0,external_react_.useEffect)(function() {
        stores/* default.dispatcher.dispatch */.Z.dispatcher.dispatch({
            type: constants/* CONFIGURE */.Wl
        });
    }, []);
    // const [shutdownNoticeOpen, setShutdownNoticeOpen] = useState(true);
    // const closeShutdown = () => {
    //   setShutdownNoticeOpen(false)
    // }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: themeConfig,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                changeTheme: changeTheme
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(snackbarController, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 833:
/***/ ((module) => {

module.exports = require("flux");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 361:
/***/ ((module) => {

module.exports = require("events");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [421], () => (__webpack_exec__(356)));
module.exports = __webpack_exports__;

})();
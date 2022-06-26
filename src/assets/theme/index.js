import { createTheme } from '@mui/material/styles';
import  * as colors  from '@mui/material/colors';

export const palette = { ...colors,...{
        primary: colors.blue
        ,
        secondary:colors.deepOrange
    }

}
export const theme = createTheme({

    direction: 'rtl',
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    " .MuiSelect-icon": {
                        right: "initial",
                        left:"7px"
                    },
                },
                ".MuiSelect-select":{
                    padding:"16px 14px 12px 14px  "
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    minWidth:"50px"
                },
            },

        }
        ,
        MuiInputBase: {
            styleOverrides: {
                "input":{
                    padding:"16px 32px 12px 14px !important ",
                },
            }
        },

        MuiTextField: {
            styleOverrides: {
                root:{
                    width:"100%",
                },
            }
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root:{
                    padding:0
                },

            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    " legend": {
                        textAlign: "right",
                        fontSize:".9rem"
                    },
                    " .MuiInputLabel-root": {
                        transform: "none",
                        position: "absolute",
                        fontSize: ".85rem",
                        top: "-9px",
                        right: "14px",
                        color: palette.primary.main,
                    },

                    " input": {
                        paddingLeft: "14px",
                        paddingRight: "14px",
                        paddingTop: "16px",
                        paddingBottom: "12px",
                    },
                    " .MuiSelect-filled": {
                        paddingLeft: "32px !important",
                        paddingRight: "14px !important",
                        paddingTop: "16px",
                        paddingBottom: "12px",
                    },
                    " .MuiFilledInput-root": {
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        boxShadow:"inset 0 0 8px rgba(0,0,0,.1)",
                    },
                    "&.lovList .MuiFilledInput-root": {
                        paddingRight: "14px",
                    },
                    " textarea": {
                        paddingRight: "14px",
                        paddingLeft: "14px",
                    }
                },
            },
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // left: "7px !important",
                    // right:"initial"
                },
            },
        },


        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.selectedTableRow td": {
                        background:palette.primary["50"]+" !important"
                    },
                    "& .MuiTableCell-head span": {
                        fontSize: ".75rem",
                        color:palette.primary["700"]
                    },
                    "& .MuiTableSortLabel-root svg": {
                        fontSize:".8rem"
                    },
                    "&:hover td": {
                        background:palette.grey["50"]
                    },
                    position: "relative !important",
                    " .MuiCheckbox-root svg": {
                        color:"rgba(0,0,0,.2)"
                    },
                    " .MuiCheckbox-root.Mui-checked svg": {
                        color:palette.primary["700"]
                    },
                    "&.listHeadFilterRow *": {
                        fontSize: ".8rem"
                    },
                    "&.listHeadFilterRow th": {
                        padding: 0,
                        position: "relative",

                    },
                    "&.listHeadFilterRow th .listHeadFilterRowFilterIco": {
                        position: "absolute",
                        right: "8px",
                        top: "20px",
                    },
                    "&.listHeadFilterRow th .MuiOutlinedInput-input": {
                        padding:0,
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        borderRadius: 0,
                        paddingRight: "24px",

                    },
                    "&.listHeadFilterRow th .MuiOutlinedInput-root": {
                        //boxShadow:"0px 0px 0px #fff"
                    },
                    "& .MuiFormControl-root": {
                        width: "100%",
                        border:"none"
                    },
                    "& .MuiFormControl-root fieldset": {
                        width: "100%",
                        border:"none"
                    },
                    "& .MuiTableCell-paddingCheckbox": {
                        position: "sticky !important",
                        top: "0",
                        right: "0",
                        background: "#fff",
                        borderLeft: " 0px 0px 3px 2px rgba(0,0,0,.2)",
                        zIndex: "1",
                        backgroundColor: "#fcfcfc",
                    }
                    ,
                    "& .menuCell": {
                        position: "sticky !important",
                        top: "0",
                        left: "0",

                        borderLeft: " 0px 0px 3px 2px rgba(0,0,0,.2)",
                        zIndex: "1",
                        backgroundColor: "#fcfcfc",
                        width: "48px",

                    },
                    "& .menuCell svg": {

                    },
                    "&:hover .menuCell svg": {

                    }
                    //MuiTableSortLabel-icon
                }
            }
        },
        MuiTableCell:{
            styleOverrides: {
                root: {
                    " .MuiOutlinedInput-root": {
                        boxShadow: "0px 0px 0px #fff !important",
                        borderRadius:0
                    }
                },

            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    "&.MuiTablePagination-toolbar": {
                        justifyContent: "end",
                        paddingLeft:0,
                    },
                    "&.MuiTablePagination-toolbar .MuiTablePagination-spacer": {
                        display: "none",
                    },
                    "&.MuiTablePagination-toolbar .MuiTablePagination-selectLabel": {
                        float: "right",
                        fontSize: ".8rem",
                        color:palette.grey[500],
                    },
                    " .MuiTablePagination-actions": {
                        justifySelf: "start"
                    },
                    "&.MuiTablePagination-toolbar .MuiInputBase-root": {
                        margin: 0,
                        marginLeft: "32px",
                        fontSize: ".8rem",
                        color:palette.grey[500],

                    },
                    "&.MuiTablePagination-toolbar .MuiTablePagination-displayedRows": {
                        fontSize: ".8rem",
                        color:palette.grey[500],
                    },

                    "&.mainAppBar": {
                        minHeight: "48px",
                        height: "48px",
                        background:"none !important"
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor:`#263238 !important`,
                    boxShadow:"none"
                }
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    height:"24px",
                    borderRadius: "4px",
                    " .MuiChip-deleteIcon": {
                        fontSize: "1rem",
                        marginLeft: "8px",
                        marginRight:"4px"
                    },
                    " .MuiChip-label": {
                        paddingRight: "8px",
                        paddingLeft: "4px",
                    }
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '@media (max-width:400px)': {
                        fontSize: '10px !important',
                        padding:"8px 10px"
                    },
                    '@media (max-width:330px)': {
                        fontSize: '10px !important',
                        padding:"8px 5px"
                    },
                    // backgroundColor: 'red',
                    // fontSize: '3rem',
                    // fontWeight:"700",
                    // color:"red" ,

                },
            },
        },

        MuiCssBaseline: {
            styleOverrides:
                {
                    body:{
                        fontWeight:"normal",
                        fontsize:14,
                        fontFamily: "Shabnam",
                    }
                }}},
    typography: {
        '@media (max-width:600px)': {
            fontSize: '10px !important',
        },
    },
    palette:palette

});
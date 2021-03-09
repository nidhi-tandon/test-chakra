export default {
    colors: {
        background: {
            100: "#fff",
            200: "#f0ecf1",
            pink: {
                800: "#ee5a6c"
            },
            blue: {
                800: "#04093f",
                200: "#2783f3",
            },
            green: {
                700: "#59d7a3"
            }
        },
        color: {
            800: "#211b23",
            700: "#515978",
            200: "#ffffff",
            250: "#000",
            600: "#2783f3"
        },
    },

    fontSizes: {
        xs: "10px",
        sm: "12px",
        md: "15px",
        lg: "16px",
        xxl: "26px",
    },
    components: {
        Form: {
            parts: ["form", "input"],
            baseStyle: {
                form: {
                    boxShadow: "lg",
                    flexDirection: "column",
                },
                input: {
                    fontWeight: "md",
                    color: "gray.600",
                    backgroundColor: "white",
                    borderRadius: 0,
                },
            },
            size: {
                sm: {
                    input: {
                        fontSize: "sm",
                        px: 2,
                        py: 1,
                    },
                },
                md: {
                    input: {
                        fontSize: "md",
                        px: 3,
                        py: 2,
                    },
                },
            },
            defaultProps: {
                size: "md",
                variant: "primary"
            },
        },
        Button: {
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "3px",
                boxShadow: "2px 4px 9px 1px rgb(0 0 0 / 5%)",
                border: "1px solid rgba(0,0,0,0.07)"
            },
            sizes: {
                lg: {
                    fontSize: "lg",
                    padding: "10px 18px",
                },
                md: {
                    fontSize: "md",
                    padding: "5px 10px",
                }
            },
            variants: {
                primary: {
                    backgroundColor: "background.blue.200",
                    color: "color.200"
                },
                secondary: {
                    backgroundColor: "background.100",
                    color: "color.600"
                }
            },
            defaultProps: {
                size: "lg",
                variant: "primary"
            }
        },
    },
    styles: {
        global: {
            ".mdx": {
                backgroundColor: 'background.pink.800',
                padding: 4,
                margin: 4,
                color: 'color.200',
                p: {
                    fontSize: "lg",
                    lineHeight: "1.4",
                },
            }
        }
    }
}

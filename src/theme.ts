export default {
    colors: {
        background: {
            200: "#f0ecf1",
            pink: {
                800: "#ee5a6c"
            },
            blue: {
                800: "#04093f"
            }
        },
        color: {
            800: "#211b23",
            700: "#515978",
            200: "#ffffff",
            250: "#000"
        },
    },

    fontSizes: {
        xs: "10px",
        sm: "12px",
        md: "14px",
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
                    fontWeight: "medium",
                    lineHeight: "normal",
                    color: "gray.600",
                    backgroundColor: "white",
                    borderRadius: 0,
                },
            },
            size: {
                sm: {
                    input: {
                        fontSize: "0.75rem",
                        px: 2,
                        py: 1,
                        a: '',
                    },
                },
                md: {
                    input: {
                        fontSize: "0.875rem",
                        px: 3,
                        py: 2,
                    },
                },
            },
            defaultProps: {
                size: "md",
                variant: "primary"
            },
        }
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

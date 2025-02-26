import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export const lightTheme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: "Vazir,Roboto",
    },
    palette: {
        mode: "light",
    }
});

export const darkTheme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: "Vazir,Roboto",
    },
    palette: {
        mode: "dark",
    }
});


export const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

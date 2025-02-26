import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme, rtlCache} from "../theme/Theme";
import Grid from "@mui/material/Grid2";
import {Helmet, HelmetProvider} from "react-helmet-async";


export const MainLayout = ({children, mode}) => {

    const CustomTheme = mode === "dark" ? darkTheme : lightTheme

    return (
        <CacheProvider value={rtlCache}>

            <ThemeProvider theme={CustomTheme}>

                <HelmetProvider>

                    <Helmet>
                        <title>وب سایت شخصی بهزاد پیری</title>
                    </Helmet>

                    <Grid container sx={{height: "100vh"}}>
                        {children}
                    </Grid>
                </HelmetProvider>

            </ThemeProvider>

        </CacheProvider>
    );
};

export default MainLayout;
import {useEffect, useState} from "react";
import {Card, CardContent, Slide, useMediaQuery, useTheme,} from "@mui/material";
import {grey} from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import {worldMap} from "../../content/svg/svgIcon";
import {MovieFilter,} from '@mui/icons-material';
import {ContentForm, DividerCustom, SendEmailContent} from "../../components";


const Content = () => {

    const [loading, setLoading] = useState(false)
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));


    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, []);

    return (
        <Card sx={{
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
        }}>

            <CardContent>

                <DividerCustom
                    Align="center"
                    icon={<MovieFilter color={"action"}/>}
                    chipText="ارتباط با من"
                    borderColor="primary.main"
                    chipColor="info"
                    delay={"900ms"}
                />

                <Grid container mt={3} spacing={2}>

                    <Slide direction="down" in={loading} style={{transitionDuration: loading ? "1500ms" : "0ms"}}>

                        <Grid size={{xs: 12, sm: 12, md: 8}}>

                            <ContentForm/>

                        </Grid>

                    </Slide>

                    <Slide direction="down" in={loading} style={{transitionDuration: loading ? "1500ms" : "0ms"}}>

                        <Grid
                            size={{xs: 0, sm: 0, md: 4}}
                            sx={{
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                textAlign: "center",

                            }}>
                            {
                                !isMedium && <SendEmailContent/>
                            }

                        </Grid>

                    </Slide>

                </Grid>

            </CardContent>

        </Card>
    );
};

export default Content;

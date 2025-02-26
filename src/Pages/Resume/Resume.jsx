import {Card, CardContent, useTheme} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {BusinessCenter, School, Hail} from '@mui/icons-material';
import {grey} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {DividerCustom, EducationalRecords, WorkRecords} from "../../components";
import Images from "../../content/images/Images";


const Resume = () => {

    const theme = useTheme()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, []);

    return (
        <Card
            sx={{
                backgroundImage: `url(${Images.background2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
                height: "100vh",
                overflowY: "scroll",
            }}>

            <CardContent sx={{backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(15px)",  height: "100vh",}}>

                <DividerCustom
                    Align="center"
                    icon={<Hail color={"action"}/>}
                    chipText="رزمه من"
                    borderColor="primary.main"
                    chipColor="info"
                    delay={"600ms"}
                />

                <Grid container mt={4}>

                    <Grid size={{xs: 12, sm: 12, md: 6}} sx={{p: 1}}>

                        <DividerCustom
                            Align="center"
                            icon={<BusinessCenter color={"action"}/>}
                            chipText="سوابق کاری من"
                            borderColor="warning.main"
                            chipColor="warning"
                            delay={"1500ms"}
                        />

                       <WorkRecords loading={loading}/>

                    </Grid>

                    <Grid size={{xs: 12, sm: 12, md: 6}} sx={{p: 1}}>

                        <DividerCustom
                            Align="center"
                            icon={<School color={"action"}/>}
                            chipText="سوابق تحصیلی من"
                            borderColor="secondary.main"
                            chipColor="secondary"
                            delay={"1500ms"}
                        />

                        <EducationalRecords loading={loading}/>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    )
};

export default Resume;

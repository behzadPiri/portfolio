import {useEffect, useState} from "react";
import devProject from "../../helpers/devProject/devProject";
import {Card, CardContent, Slide, useTheme,} from "@mui/material";
import {MovieFilter} from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import Images from "../../content/images/Images";
import {grey} from "@mui/material/colors";
import {CardProject, DialogCard, DividerCustom} from "../../components";


const Projects = () => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [dialogDes, setDialogDes] = useState({name: "", description: "",})
    const theme = useTheme();

    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, []);

    const handelOpenDialog = (item) => {
        setDialogDes({name: item.name, description: item.description})
        setOpen(true)
    }

    const handelCloseDialog = () => {
        setOpen(false)
        setDialogDes({name: "", description: ""})
    }

    return (
        <Card sx={{
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
            backgroundImage: `url(${Images.background3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            overflowY: "scroll",
        }}>

            <CardContent>

                <DividerCustom
                    Align="center"
                    icon={<MovieFilter color={"action"}/>}
                    chipText="پروژه های من"
                    borderColor="primary.main"
                    chipColor="info"
                    delay={"900ms"}
                />

                <Grid container mt={3} spacing={2}>

                    {
                        devProject.map((item, index) => (
                            <Slide
                                in={loading}
                                direction="up"
                                key={index}
                                style={{transitionDuration: loading ? `${index + 5}99ms` : "0ms"}}>
                                <Grid
                                    size={{xs: 12, sm: 6, md: 6, lg: 4, xl: 4}}
                                    sx={{alignItems: "center", justifyContent: "center", display: "flex"}}
                                >
                                    <CardProject
                                        description={item.description}
                                        name={item.name}
                                        image={Images.project}
                                        handelDialog={() => handelOpenDialog(item)}
                                    />
                                </Grid>
                            </Slide>
                        ))
                    }
                </Grid>

                <DialogCard
                    open={open}
                    name={dialogDes.name}
                    description={dialogDes.description}
                    handelCloseDialog={handelCloseDialog}
                />

            </CardContent>
        </Card>
    );
};

export default Projects;

import {Container, Typography} from "@mui/material";
import {NavigateBeforeRounded} from "@mui/icons-material";

const DevelopInfo = ({title}) => {
    return (
        <Container sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end",mb:1.5}}>
            <Typography color={"textPrimary"} textAlign={"left"} variant={"body1"} >
                {title}
                <NavigateBeforeRounded  sx={{verticalAlign: "bottom",}} color={"info"} />
            </Typography>
        </Container>
    );
};

export default DevelopInfo;

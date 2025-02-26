import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";

const CardSlider = ({avatar, name, jobUser, isMedium, comment}) => {
    return (
        <Box component="div" mb={2} sx={{justifyContent: "center", mx: "auto"}}>

            <Avatar
                src={avatar} variant="square"
                sx={{width: "5.5rem", height: "5.5rem", mb: 2, mx: "auto"}}
            />

            <Typography
                color={"whitesmoke"}
                variant={"h6"}
                align={"center"}
                gutterBottom
            >
                {name}
            </Typography>

            <Typography
                color={"whitesmoke"}
                variant={"body1"}
                align={"center"}
                gutterBottom
            >
                {jobUser}
            </Typography>

            <Card sx={{backgroundColor: "lightsteelblue", width: isMedium ? 1 / 2 : 1, mx: "auto"}}>
                <CardContent>
                    <Typography
                        color={"#2d2c2c"}
                        variant={"subtitle2"}
                        align={"center"}
                        gutterBottom
                    >
                        {comment}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardSlider;

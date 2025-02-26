import {Box, Chip, LinearProgress, Typography} from "@mui/material";


const Skill = ({name, icon, value, color}) => {
    return (

        <Box sx={{display: 'flex', alignItems: 'center', mt: 3, flexDirection: "row-reverse"}}>

            {/*<Box sx={{maxWidth: "8rem"}}>*/}
                <Chip
                    sx={{mx: "auto", px: 2,width:"10rem"}}
                    variant="filled"
                    color={color}
                    icon={<Box component={"img"} src={icon} width={"1.3rem"}/>}

                    label={
                        <Typography variant={"subtitle2"} color={"textPrimary"} fontWeight="bold">
                            {name}
                        </Typography>
                    }
                />
            {/*</Box>*/}

            <Box sx={{width: '100%', ml: 1}}>
                <LinearProgress variant="determinate" value={value} color={color}/>
            </Box>
            <Chip
                sx={{ml:1}}
                variant="filled"
                color={color}
                label={
                    <Typography variant={"inherit"} color={"textPrimary"} fontWeight={"bold"}>
                        {Math.round(value)}%
                    </Typography>
                }
            />

        </Box>
    );
};

export default Skill
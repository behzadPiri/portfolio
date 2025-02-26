import {Box, Typography} from "@mui/material";
import {CopyrightRounded} from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "end",
                alignItems: "center",
                p: "0.75rem",
                flexDirection: "column",
            }}
        >
            <Typography variant={"inherit"} align={"center"} color={"textPrimary"}>
                این سایت توسط بهزاد پیری
                <br/>
                طراحی شده است
            </Typography>
            <br/>
            <Typography variant={"caption"} gutterBottom color={"textSecondary"}>
                کپی رایت
                <CopyrightRounded sx={{verticalAlign: "middle"}} fontSize={"small"}/>
            </Typography>

        </Box>
    );
};

export default SidebarFooter;

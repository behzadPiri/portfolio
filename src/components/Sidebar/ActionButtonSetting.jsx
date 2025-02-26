import {Fab, Box, Typography} from "@mui/material";
import {LightModeOutlined, DarkModeOutlined} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../context";

const ActionButtonSetting = () => {

    const {mode, handleThemeChange} = useContext(MainContext)

    return (
        <Box
        >
            <Fab
                size="small"
                aria-label="themeIcon"
                onClick={handleThemeChange}
                color={"info"}
                variant={"extended"}
            >
                {
                    mode === "dark" ? <LightModeOutlined color={"action"} sx={{width: "2rem"}}/> :
                        <DarkModeOutlined color={"action"} sx={{width: "2rem"}}/>
                }
                <Typography variant="inherit" color={"textPrimary"}>
                    {mode === "dark" ? "تم روشن" : "تم تاریک"}
                </Typography>
            </Fab>
        </Box>
    );
};

export default ActionButtonSetting;

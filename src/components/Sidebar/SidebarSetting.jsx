import {Box, Divider, Typography} from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {ActionButtonSetting} from "../index";

const SidebarSetting = () => {

    return (
        <Box sx={{mt: 2,}}>

            <Box sx={{justifyContent: "space-between", textAlign: "center", px: 2, mb: 2, display: "flex",}}>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",}}>
                    <SettingsOutlinedIcon color={"action"} sx={{mr: 1}}/>
                    <Typography variant="body2" color={"textPrimary"}>تنظیمات</Typography>
                </Box>

                <ActionButtonSetting/>
            </Box>


            <Divider variant="middle" sx={{mt: 2}}/>

        </Box>
    );
};

export default SidebarSetting
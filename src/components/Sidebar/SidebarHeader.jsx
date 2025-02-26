import {Box, Divider, IconButton, Typography, useMediaQuery,} from "@mui/material";
import Images from "../../content/images/Images";
import SocialMedia from "../../helpers/socialMedia/socialMedia";
import {AvatarCustom} from "../index";

const SidebarHeader = () => {


    const hidden = useMediaQuery(theme => theme.breakpoints.down("md"))


    return (
        <Box sx={{justifyContent: "center", textAlign: "center", mt: 2}}>

            {
                !hidden && <AvatarCustom avatar={Images.userAvatar} size={"12rem"} alt={"بهزاد پیری"} name={"BP"}/>

            }

            <Typography variant="body1" color={"textPrimary"}>بهزاد پیری</Typography>

            <Typography variant="caption" color={"textSecondary"}>برنامه نویس موبایل و وب اپلیکیشن</Typography>

            <Box component="div" sx={{mx: "auto", alignItems: "center", my: 1}}>
                {
                    SocialMedia.map((item, index) => (
                        <IconButton
                            key={index}
                            aria-label={item.name}
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple>
                            <a href={item.link} rel="noopener noreferrer" target="_blank">
                                <Box component="img" src={item.icon} sx={{width: "2rem"}}/>
                            </a>
                        </IconButton>
                    ))
                }

            </Box>

            <Divider variant="middle" sx={{mt: 1}}/>

        </Box>
    );
};

export default SidebarHeader;

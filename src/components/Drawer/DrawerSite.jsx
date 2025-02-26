import {Drawer, useMediaQuery, useTheme} from "@mui/material";
import {SidebarContent} from "../index";
import {useContext} from "react";
import MainContext from "../../context";

const DrawerSite = () => {

    const theme = useTheme();
    const hidden = useMediaQuery(theme.breakpoints.down("md"))
    const {drawerOpen, setDrawerOpen} = useContext(MainContext)


    return (
        <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            variant="temporary"
            sx={{"& .MuiDrawer-paper": {width: "18rem",}, display: !hidden ? "none" : "block"}}
        >
            <SidebarContent />

        </Drawer>
    );
};

export default DrawerSite;

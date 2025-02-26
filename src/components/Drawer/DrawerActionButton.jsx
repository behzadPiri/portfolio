import {Box, Fab} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {

    const {setDrawerOpen} = useContext(MainContext)

    return (
        <Box
            m={2}
            sx={{display: {xl: "none", lg: "none", md: "none", xs: "block", sm: "block",position: "absolute"}}}
        >
            <Fab
                size="small"
                aria-label="drawerIcon"
                onClick={() => setDrawerOpen(true)}
                color={"primary"}
            >
                <Menu color={"action"}/>
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;

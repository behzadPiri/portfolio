import {useContext} from "react";
import MainContext from "../../context";
import {grey} from "@mui/material/colors";
import {Box, Divider, Tab, Tabs, useTheme,} from "@mui/material";
import {TabsData} from "../../helpers/TabsData/TabsData";

const SidebarTabs = () => {

    const {handlePageNumber, setDrawerOpen, pageNumber} = useContext(MainContext)
    const theme = useTheme()
    const tabs = TabsData();

    return (
        <Box>

            <Tabs
                variant="scrollable"
                role="navigation"
                orientation="vertical"
                allowScrollButtonsMobile
                scrollButtons="auto"
                value={pageNumber}
                onChange={handlePageNumber}
            >
                {
                    tabs.map((tab, index) => (
                        <Tab

                            key={index}
                            sx={{
                                justifyContent: "start",
                                "&.MuiTab-root": {
                                    minHeight: "3rem",
                                    backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[300],
                                    mx: 1,
                                    borderRadius: 1,
                                    mt: 1
                                }
                            }}
                            icon={tab.icon}
                            label={tab.title}
                            iconPosition="start"
                            onClick={() => setDrawerOpen(false)}
                            {...tab}
                        />
                    ))
                }


            </Tabs>

            <Divider variant="middle" sx={{mt: 1}}/>

        </Box>
    );
};

export default SidebarTabs;

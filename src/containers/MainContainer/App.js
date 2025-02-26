import MainLayout from "../../layouts/MainLayout";
import {Sidebar, DrawerActionButton} from "../../components";
import {Home, Page, About, Resume, Projects, Comments, Content} from "../../Pages";
import {useEffect, useState} from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import {SidebarContainer, PagesContainer} from "../index";
import MainContext from "../../context";
import SwipeableViews from 'react-swipeable-views';

const App = () => {


    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [mode, setMode] = useState("")
    const theme = useTheme()
    const isMedia = useMediaQuery(theme.breakpoints.up("md"))
    const prefersThemeDark = useMediaQuery('(prefers-color-scheme=dark)')

    useEffect(() => {
        setMode(prefersThemeDark ? "dark" : "light")
    }, [prefersThemeDark])


    useEffect(() => {
        if (isMedia)
            setDrawerOpen(false)
    }, [isMedia])

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue)
    }

    const handlePageIndex = (index) => {
        setPageNumber(index)
    }
    const handleThemeChange = () => {
        setMode(oldTheme => oldTheme === "dark" ? "light" : "dark")
    }

    return (
        <MainContext.Provider value={{
            drawerOpen,
            setDrawerOpen,
            pageNumber,
            handlePageNumber,
            handleThemeChange,
            mode
        }}>

            <MainLayout mode={mode}>

                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>

                <DrawerActionButton/>

                <PagesContainer>

                    <SwipeableViews index={pageNumber} onChangeIndex={handlePageIndex}>

                        <Page index={0}>
                            <Home/>
                        </Page>

                        <Page index={1}>
                            <About/>
                        </Page>

                        <Page index={2}>
                            <Resume/>
                        </Page>

                        <Page index={3}>
                            <Projects/>
                        </Page>

                        <Page index={4}>
                            <Comments/>
                        </Page>

                        <Page index={5}>
                            <Content/>
                        </Page>

                    </SwipeableViews>

                </PagesContainer>

            </MainLayout>

        </MainContext.Provider>
    );
}

export default App;

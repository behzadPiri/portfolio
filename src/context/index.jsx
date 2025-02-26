import {createContext} from "react";

const MainContext= createContext({
    pageNumber:0,
    handlePageNumber:()=>{},
    drawerOpen:false,
    setDrawerOpen:()=>{},
    handleThemeChange:()=>{},
    mode:""
})

export default MainContext
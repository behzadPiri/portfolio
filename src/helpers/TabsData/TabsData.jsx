import {
    ThreeP,
    FaceRounded,
    HomeRounded,
    ThreePRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const TabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    }
}


export const TabsData = () => {
    return [
        {title: "صفحه اصلی", icon: <HomeRounded/>, ...TabProps(0),},
        {title: "درباره من", icon: <FaceRounded/>, ...TabProps(1)},
        {title: "رزومه من", icon: <ThreePRounded/>, ...TabProps(2)},
        {title: "نمونه کارهای من", icon: <TerminalRounded/>, ...TabProps(3)},
        {title: "نظرات", icon: <ThreeP/>, ...TabProps(4)},
        {title: "ارتباط با من", icon: <ConnectWithoutContactRounded/>, ...TabProps(5)},
    ];
};
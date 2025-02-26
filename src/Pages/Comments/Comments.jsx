import {Box, Card, CardContent, useMediaQuery, useTheme} from "@mui/material";
import {Forum} from "@mui/icons-material";
import {commentUsers} from "../../helpers/devComment/DevComment";
import Slider from "react-slick";
import Images from "../../content/images/Images";
import {CardSlider, DividerCustom} from "../../components";

const Comments = () => {

    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.up("md"))


    let option = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        dotsClass: "slick-dots slick-thumb",
    };

    return (
        <Card sx={{
            backgroundColor: "whitesmoke",
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${Images.background2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>

            <CardContent>

                <DividerCustom
                    Align="center"
                    icon={<Forum color={"action"}/>}
                    chipText="نظرات کاربران"
                    borderColor="primary.main"
                    chipColor="info"
                    delay={"900ms"}
                />

                <Box
                    mt={10}
                    sx={{justifyContent: "center", alignItems: "center",}}
                >
                    <Slider {...option} >
                        {
                            commentUsers?.map((item, index) => (
                                <CardSlider
                                    key={index}
                                    name={item.name}
                                    comment={item.comment}
                                    jobUser={item.jobUser}
                                    avatar={item.img}
                                    isMedium={isMedium}
                                />
                            ))
                        }
                    </Slider>
                </Box>

            </CardContent>
        </Card>
    );
};

export default Comments;

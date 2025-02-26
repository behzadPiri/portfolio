import {useEffect, useRef} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim"
import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Images from "../../content/images/Images";
import Typed from "typed.js";
import {particleLinks} from "../../content/particles/particles";
import {grey} from "@mui/material/colors";


const Home = () => {

    const theme = useTheme()
    const size = useMediaQuery(theme.breakpoints.down("md"))
    const nameRef = useRef(null)
    const infoRef = useRef(null)

    const strings = [
        "برنامه نویس React Native",
        "عاشق انیمیشن و طراحی زیبا",
        "ساختن اپلیکیشن های کارآمد",
        "هر روز یک چیز جدید یاد میگیرم!",
        "برنامه نویسی=ترکیب هنر و منطق",
        "کدی که مینویسم یک اثر ماندگار است",
        "دنبال چالش های جدید در دنیای برنامه نویسی"
    ]

    useEffect(() => {
        const nameUser = new Typed(nameRef.current, {
            strings: ["درود! بهزاد پیری هستم، کسی که برنامه نویسی رو به چشم هنر میبیند."],
            typeSpeed: 60,
            backDelay: 30,
            backSpeed: 10,
            loop: false,
            showCursor: false,
        })

        const infoUser = new Typed(infoRef.current, {
            strings,
            typeSpeed: 40,
            backDelay: 100,
            backSpeed: 100,
            loop: true,
            showCursor: false,
            startDelay: 6000,

        })
        return () => {
            nameUser.destroy()
            infoUser.destroy()
        }

    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (

        <Box sx={{
            backgroundImage: `url(${Images.background2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
        }}>

            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particleLinks}/>

            <Container>
                <Typography
                    ref={nameRef}
                    color={"#1cb5e2"}
                    align={"center"}
                    variant={size ? "h6" : "h4"}
                    dir={"rtl"}/>
            </Container>

            <Container sx={{mt: 2}}>
                <Typography
                    dir={"rtl"}
                    ref={infoRef}
                    color={"#a2ab55"}
                    align={"center"}
                    variant={size ? "subtitle2" : "h6"}/>
            </Container>
        </Box>
    );
};

export default Home;

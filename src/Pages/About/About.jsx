import {Typography, Card, CardContent, useMediaQuery, useTheme,} from "@mui/material";
import Images from "../../content/images/Images";
import Grid from "@mui/material/Grid2";
import {EmojiPeopleRounded} from '@mui/icons-material';
import {AvatarCustom, DividerCustom, InfoDeveloper, Skills} from "../../components";

import {grey} from "@mui/material/colors";

const About = () => {

    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down("md"))


    return (
        <Card sx={{
            backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
            backgroundImage: `url(${Images.background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            overflowY: "scroll",
        }}>


            <CardContent sx={{backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(15px)",}}>

                <Grid
                    container
                    spacing={2}
                    borderRadius={2}
                    pt={2}
                    mb={2}
                >

                    <Grid size={{xs: 12, sm: 12, md: 8}}>
                        <InfoDeveloper/>
                    </Grid>

                    <Grid size={{xs: 0, sm: 0, md: 4,}}>
                        {
                            !hidden &&
                            <AvatarCustom avatar={Images.userAvatar} name={"BP"} alt={"بهزاد پیری"} size="12rem"/>
                        }
                    </Grid>

                    <Grid size={12} textAlign={"justify"} dir={"rtl"} p={2}>
                        <Typography variant={"subtitle1"} color={"textSecondary"}>
                            <Typography variant="h6" color="textPrimary">
                                درباره من
                            </Typography>
                            من یک برنامه‌نویس موبایل در حوزه React Native هستم که از سال ۱۳۹۸ وارد دنیای برنامه‌نویسی
                            شدم. مسیر یادگیری من از طراحی وب با HTML و CSS شروع شد، اما علاقه‌ام به انیمیشن و زیبایی
                            رابط کاربری باعث شد به سمت فرانت‌اند و در نهایت توسعه اپلیکیشن‌های موبایل با React Native
                            بروم.
                            <br/>
                            در طول این سال‌ها، مهارت‌های خودم را در JavaScript،TypeScript، MVVM ، React JS، Redux Thunk،
                            Redux Toolkit
                            ، Material UI ، Tailwind CSS و Reanimated توسعه دادم و روی پروژه‌های مختلفی کار کردم. از
                            جمله پروژه‌هایی که تجربه‌ی کار روی آن‌ها را داشتم می‌توان به لنچ‌باز، گلدآذر، پرواسکرین،
                            دسترس، تنورفود، شبکه مادر و بیلیموب اشاره کرد. برخی از این پروژه‌ها لانچ شدند اما به دلایل
                            مختلف متوقف شدند و برخی نیز نیمه‌کاره ماندند.
                            <br/>
                            این تجربیات به من یاد داد که چطور با چالش‌های
                            واقعی برنامه‌نویسی و نیازهای کارفرمایان روبه‌رو شوم.
                            آنچه در برنامه‌نویسی برای من جذاب است، حس خلق یک اثر ماندگار است؛ اینکه بتوانم با کدنویسی،
                            محصولی بسازم که کاربردی باشد، نیازی را رفع کند و تجربه‌ای لذت‌بخش برای کاربران رقم بزند.
                            همیشه تلاش می‌کنم تکنولوژی‌های جدید را یاد بگیرم و مهارت‌هایم را ارتقا دهم، حتی اگر گاهی
                            یادگیری کند پیش برود. مهم‌ترین اصل برای من، پیشرفت مداوم و ایجاد اثر ارزشمند است.
                            <br/>
                            علاوه بر برنامه‌نویسی، به مطالعه علاقه‌مندم و از خواندن رمان‌هایی مثل شازده کوچولو، قلعه
                            حیوانات و بیماری خاموش لذت می‌برم. همچنین به دنیای دیجیتال و شبکه‌های اجتماعی مثل اینستاگرام
                            علاقه دارم و از دنبال کردن ترندهای جدید لذت می‌برم.
                            برنامه‌نویسی برای من فقط نوشتن کد نیست، بلکه خلق یک اثر ماندگار است؛ اثری که هم زیبا باشد،
                            هم کاربردی، و هم نامی نیک از من به جا بگذارد.


                        </Typography>
                    </Grid>

                </Grid>


                <Grid container>

                    <Grid sx={{width: 1}}>

                        <DividerCustom
                            icon={<EmojiPeopleRounded color={"action"}/>}
                            borderColor={"secondary.main"}
                            chipText=" مهارت های من"
                            chipColor="secondary"
                            Align="center"
                            delay="0ms"
                        />

                        <Skills/>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    )
};

export default About;

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    InputAdornment,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {AccountBoxRounded, LocalPostOfficeRounded, SubtitlesRounded} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik} from "formik";
import validationSchema from "../../content/validationSchema/validationSchema";

const ContentForm = () => {

    const theme = useTheme();
    const contactInputName = {
        fullName: "",
        email: "",
        subject: "",
        massage: "",
        recaptcha: ""
    }


    const formik = useFormik({
        initialValues: contactInputName,
        validationSchema: validationSchema,
        onSubmit: (values => {
            console.log("values", values)
        }),
    })

    return (
        <Card>
            <form autoComplete={"off"} onSubmit={formik.handleSubmit}>

                <CardContent>

                    <Grid container sx={{direction: "ltr"}} spacing={2}>

                        <Grid size={{xs: 12, sm: 12, md: 6}}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                id="fullName"
                                name="fullName"
                                type="text"
                                color="warning"
                                label={"نام و نام خانوادگی"}
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                slotProps={{
                                    input: {
                                        endAdornment:
                                            <InputAdornment position="start">
                                                <AccountBoxRounded/>
                                            </InputAdornment>
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={{xs: 12, sm: 12, md: 6}}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                name="email"
                                id="email"
                                type="email"
                                color="warning"
                                label="ایمیل"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                helperText={formik.touched.email && formik.errors.email}
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                slotProps={{
                                    input: {
                                        endAdornment:
                                            <InputAdornment position="start">
                                                <LocalPostOfficeRounded/>
                                            </InputAdornment>
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                size="small"
                                name="subject"
                                id="subject"
                                color="warning"
                                label="عنوان"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                helperText={formik.touched.subject && formik.errors.subject}
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                slotProps={{
                                    input: {
                                        endAdornment:
                                            <InputAdornment position="start">
                                                <SubtitlesRounded/>
                                            </InputAdornment>
                                    }
                                }}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={8}
                                type="text"
                                size="small"
                                id="massage"
                                name="massage"
                                color="warning"
                                label="متن پیام"
                                value={formik.values.massage}
                                onChange={formik.handleChange}
                                helperText={formik.touched.massage && formik.errors.massage}
                                error={formik.touched.massage && Boolean(formik.errors.massage)}
                            />
                        </Grid>

                    </Grid>

                </CardContent>

                <CardActions sx={{flexDirection: "column",}}>

                    <Box component="div" sx={{alignSelf: "end",}} textAlign={"end"} px={2}>
                        <ReCAPTCHA
                            theme={theme.palette.mode}
                            hl="fa"
                            type={"audio"}
                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                            onChange={(value) => formik.setFieldValue("recaptcha", value)}
                        />
                        {

                            formik.touched.recaptcha && formik.errors.recaptcha && (
                                <Typography variant={"caption"} color={"error"}>
                                    {formik.errors.recaptcha}
                                </Typography>
                            )
                        }
                    </Box>


                    <Button
                        sx={{mt: 2}}
                        variant={"contained"}
                        fullWidth
                        type={"submit"}
                        color={"success"}>
                        ارسال
                    </Button>

                </CardActions>

            </form>

        </Card>

    );
};

export default ContentForm
import {Link, Typography} from "@mui/material";

const SendEmailContent = () => {
    return (
        <>
            <Typography variant="subtitle1" color={"black"}>
                خوشحال میشم بهم ایمیل بزنی
            </Typography>
            <Typography variant={"body1"} color={"black"} mt={1}>
                برای ارسال
                <Link
                    underline="none"
                    target={"_blank"}
                    color={"error"}
                    href="mailto:behzad.piri@gmail.com"
                    rel={"noopener noreferrer"}
                >{` ایمیل `}</Link>
                کلیک کن
            </Typography>
        </>
    );
};

export default SendEmailContent;

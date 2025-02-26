import {Chip, Divider, Slide, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const DividerCustom = ({Align, borderColor, chipText, chipColor, icon, delay}) => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, []);

    return (
        <Slide direction="down" in={loading} style={{transitionDuration: loading ? delay : "0ms"}}>

            <Divider
                textAlign={Align}
                sx={{"&::before , &::after": {borderColor: borderColor,}}}
            >
                <Chip
                    sx={{px: 3}}
                    color={chipColor}
                    icon={icon}
                    label={
                        <Typography variant={"body2"} textAlign={"center"} color={"textPrimary"}>
                            {chipText}
                        </Typography>
                    }
                />
            </Divider>

        </Slide>
    );
};

export default DividerCustom
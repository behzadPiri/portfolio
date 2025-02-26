import Grid from "@mui/material/Grid2";
import {grey} from "@mui/material/colors";
import {useTheme} from "@mui/material";

const PagesContainer = ({children}) => {

    const theme = useTheme()

    return (

        <Grid size={{xs: 12, sm: 12, md: 9, lg: 10, xl: 10}}
              sx={{backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],overflow:"hidden"}}>
            {children}
        </Grid>
    );
};

export default PagesContainer
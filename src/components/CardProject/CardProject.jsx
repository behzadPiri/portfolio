import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";


const CardProject = ({handelDialog, name, description, image}) => {
    return (

            <Card sx={{maxWidth: 400, direction: "ltr"}}>

                <CardActionArea>
                    <CardMedia alt={name} sx={{height: 250}} image={image} title={name}/>
                </CardActionArea>

                < CardContent>
                    <Typography gutterBottom variant="h6">{name}</Typography>

                    <Typography variant="caption" color={"textSecondary"} noWrap component={"div"}>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions sx={{direction: "rtl"}}>
                    <Button onClick={handelDialog} size="small">اطلاعات بیشتر</Button>
                </CardActions>

            </Card>

    );
};

export default CardProject;

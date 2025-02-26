import {Avatar} from "@mui/material";

const AvatarCustom = ({avatar, size, name, alt}) => {
    return (
        <Avatar
            src={avatar}
            variant="rounded"
            alt={alt}
            sx={{
                width: size,
                height: size,
                marginX: "auto",
                mb: 1
            }}>
            {name}
        </Avatar>
    );
};

export default AvatarCustom;

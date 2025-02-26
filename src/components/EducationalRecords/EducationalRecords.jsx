import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {devEduInfo} from "../../helpers/devInfo/DevInfo";
import {Slide, Typography} from "@mui/material";
import {School} from "@mui/icons-material";

const EducationalRecords = ({loading}) => {
    return (
        <Timeline position="alternate" sx={{direction: "ltr"}}>

            {
                devEduInfo.map((item, index) => (
                    <Slide
                        direction="up"
                        in={loading}
                        key={index}
                        style={{transitionDuration: loading ? `${index + 5}99ms` : "0ms"}}>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{m: 'auto 0'}}
                                align="right"
                                variant="caption"
                                color="textPrimary"
                            >
                                {item.year}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color={"secondary"}>
                                    <School color={"secondary"}/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{px: 2}}>
                                <Typography color={"textSecondary"} variant="caption"
                                            component={"p"}>{item.cert}</Typography>
                                <Typography color={"textSecondary"}
                                            variant="body2">{item.major}</Typography>
                                <Typography color={"textSecondary"}
                                            variant="body1">{item.un}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))
            }
        </Timeline>
    );
};

export default EducationalRecords;

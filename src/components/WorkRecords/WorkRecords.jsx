import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {devWorkInfo} from "../../helpers/devInfo/DevInfo";
import {Slide, Typography} from "@mui/material";
import {BusinessCenter} from "@mui/icons-material";

const WorkRecords = ({loading}) => {
    return (
        <Timeline position="alternate" sx={{direction: "ltr"}}>

            {
                devWorkInfo.map((item, index) => (
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
                                <TimelineDot variant="outlined" color={"warning"}>
                                    <BusinessCenter color={"warning"}/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography color={"textSecondary"} variant="caption">
                                    {item.job}
                                </Typography>
                                <Typography color={"textSecondary"}
                                            variant="body1">{item.company}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))
            }
        </Timeline>
    );
};

export default WorkRecords;

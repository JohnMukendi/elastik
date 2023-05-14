import React from "react";
import { Paper, Box, Typography, Container } from "@mui/material";
import ProgressCircle from "./progress-circle";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
function InfoBox(props) {
  const { palette } = props;
  const levelColor = palette.custom[props.level];
  return (
    <Paper
      elevation={5}
      sx={{
        // borderTop: `8px solid ${levelColor.primary}`,
        borderBottom: `8px solid ${levelColor.primary}`,
        transition: "0.5s",
        "&:hover": { scale: "1.1", cursor: "pointer", transition: "0.5s" },
        backgroundColor: palette.background.extraLight,
        padding: "8px 0px",
      }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          borderRadius="5px"
          p={2}
          height="22px"
          //   width="60px"
          display="flex"
          alignItems="center"
          backgroundColor={levelColor.xtraLight}
        >
          {React.cloneElement(props.icon, {
            sx: { fontSize: "18px", color: levelColor.primary },
          })}
          <Typography
            fontSize="18px"
            fontWeight={600}
            color={levelColor.primary}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          margin: "8px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <KeyboardDoubleArrowUpOutlinedIcon />
          <Typography fontSize={28} fontWeight={700}>
            {props.info.tasksCompleted}
          </Typography>
          <Typography sx={{width:"100%"}} fontSize={14}>{props.title} Tasks completed</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <ProgressCircle info={props.info} size="40" levelColor={levelColor} />
          <Typography>{Number(props.info.percentage)*100}%</Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default InfoBox;

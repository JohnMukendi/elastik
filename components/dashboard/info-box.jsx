import React from "react";
import { Paper, Box, Typography, Container } from "@mui/material";
import ProgressCircle from "./progress-circle";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
function InfoBox(props) {
  const { palette } = props;
  const levelColor = palette.custom[props.level];
  return (
    <Box
      // elevation={5}
      sx={{
        // borderTop: `4px solid ${levelColor.primary}99`,
        transition: "0.5s",
        "&:hover": { scale: "1.1", cursor: "pointer", transition: "0.5s" },
        backgroundColor: palette.background.extraLight,
        padding: "8px 0px",
        border : `1px solid ${palette.alternative.border}`,
        // borderBottom: `5px solid ${levelColor.primary}99`,
        borderRadius : "40px"
      }}
    >
      <Box display="flex" justifyContent="center">
        <Box
          
          p={2}
          height="22px"
          sx={{width:{xs:"75%",sm:"80%"},borderRadius:{xs:"50px",md:"5px"}}}
          display="flex"
          alignItems="center"
          justifyContent={'center'}
          backgroundColor={levelColor.xtraLight}
          
        >
          {React.cloneElement(props.icon, {
            sx: { fontSize: "18px", color: levelColor.primary },
          })}
          <Typography
            sx={{ fontSize: { xs:"11.4px",sm: "14px", md: "18px" } }}
            fontWeight={600}
            color={levelColor.primary}
            noWrap
            textAlign={'center'}
            title={props.title}
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
          <Typography sx={{ width: "100%", fontSize: { lg:12,md: 12, xs: 14 } }}>
            {props.title} {props.level !== 'total' &&   "Tasks completed"}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <ProgressCircle info={props.info} size="40" levelColor={levelColor} />
          <Typography>{Number(props.info.percentage) * 100}%</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default InfoBox;

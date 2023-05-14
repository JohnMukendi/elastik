import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ info, size,levelColor }) => {
  const theme = useTheme();

  const angle = info.percentage * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${levelColor.xtraLight} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${levelColor.light} ${angle}deg 360deg),
            ${levelColor.primary}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;

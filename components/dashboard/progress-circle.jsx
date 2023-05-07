import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ info, size }) => {
  const theme = useTheme();

  const angle = info.percentage * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${theme.palette.background.default} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.primary.dark} ${angle}deg 360deg),
            ${theme.palette.alternative.first}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;

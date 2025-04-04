import { Box } from "@mantine/core";

const BackgroundGradient = () => {
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -20,
        background: "linear-gradient(0deg, rgba(80, 15, 0, 0.4), black 60%)",
      }}
    />
  );
};

export default BackgroundGradient;

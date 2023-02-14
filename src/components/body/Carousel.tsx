import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "SEI usar",
    imgPath:
      "https://th.bing.com/th/id/OIP.MkWl233pnv_RjiquZdSB2wHaEJ?pid=ImgDet&rs=1",
  },

  {
    label: "Cidade de Anápolis",
    imgPath: "/public/img/duvidas.png",
  },
  {
    label: "Corrida de rua",
    imgPath: "/public/img/check.png",
  },
  {
    label: "Prefeitura de Anápolis",
    imgPath:
      "https://th.bing.com/th/id/OIP.xJWlPoZxHTXUSH4Rs9cD8AHaE9?pid=ImgDet&rs=1",
  },
];
export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Grid item sx={{ maxWidth: 700, flexGrow: 1, ml: 2 }}>
      <Paper
        square
        elevation={24}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 40,
          pl: 3,
          bgcolor: "#6aba7a",
          textAlign: "center",
          mt: -32,
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        }}
      >
        <Typography sx={{ color: "#ffffff" }}>
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 350,
                  display: "block",
                  maxWidth: 70000,
                  overflow: "hidden",
                  width: "100%",
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "#333333" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Avançar
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "#333333" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Voltar
          </Button>
        }
      />
    </Grid>
  );
}

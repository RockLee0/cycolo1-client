import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'cycolo-m1',
        imgPath:
          'https://previews.123rf.com/images/istone_hun/istone_hun1206/istone_hun120600533/14185124-abstract-grunge-mountain-bike-sport-background-with-space.jpg',
      },
    {
        label: 'cycolo-x2',
        imgPath:
          'https://previews.123rf.com/images/sidorovstock/sidorovstock1810/sidorovstock181000081/109818178-bicycle-rider-cycle-bike-isolated-in-white-background.jpg',
      },
    {
    label: 'cycolo-x3 pro 2021',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpFavgeZkzwyI1G3Ir1giwSg0ULHIegcX_CEvYKK-3KtDcDHxiwPlxR5toLzMUTZfyJQ&usqp=CAU',
  },
  {
    label: 'cycolo max-1',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhgGoNzDhbobApuppOS_1IXfrDo6snYxyc_LfQCK1kmWt2gOjpRyCXH8AZwaH_rx0ffQ&usqp=CAU',
  },
  
  
];

const Header = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                  height: 255,
                  display: 'block',
                  maxWidth: '100%',
                
                  overflow: 'hidden',
                  width: '100%',
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
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    );
};

export default Header;
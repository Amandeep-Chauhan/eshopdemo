import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://zwin.io/react/stoon/assets/img/banner/1.png',
  },
  {
    imgPath:
      'https://zwin.io/react/stoon/assets/img/banner/11.png',
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                component="div"
                sx={{
                  height: 700,
                  backgroundImage: `url(${step.imgPath})`,
                  width: '100%',
                  backgroundSize: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '80px'
                }}
                src={step.imgPath}
              >

            <CardContent>
                    <Typography 
                     sx={{fontWeight: '350', 
                     fontSize: '60px',
                      lineHeight: '80px',
                      marginBottom: '14px',
                      color: '#fff',
                      marginTop: '32px'
                       }} component="div">
                       50% OFF
                    </Typography>
                    <Typography sx={{fontWeight: '500', fontSize: '76px',  color: '#404040'}}>
                        FAVOURITE CLOTHING
                    </Typography>
                    <Button sx={{marginTop: '24px', fontWeight: '400',letterSpacing: '0px', color: '#000', padding: '13px 35px', fontSize: '16px',  color: '#404040', border: '1px solid #fff', background: '#fff'}} variant="contained"
                    >GET COLLECTION
                    <ArrowForwardIcon sx={{color: '#FF8E78', marginLeft: '8px'}}></ArrowForwardIcon>
                    </Button>
                </CardContent>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner;
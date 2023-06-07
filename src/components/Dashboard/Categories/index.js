import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import {  useRouter } from 'next/navigation';

const images = [
    {
      label: 'FASHION CLOTHING',
      name: `men's clothing`,
      imgPath:
        'https://zwin.io/react/stoon/assets/img/collection/4.png',
    },
    {
      label: 'ACCESSORIES',
      name: 'jewelery',
      imgPath:
        'https://zwin.io/react/stoon/assets/img/collection/5.png',
    },
  ];

function Categories() {
  const { push } = useRouter();

  return (
    <Grid container spacing={6} sx={{padding: '0px 60px', marginBottom: '40px'}}>
        {images.map((step) => (
                  <Grid key={step.label} item xs={6} >
                    <Box
                        component="div"
                        sx={{
                          height: 450,
                          backgroundImage: `url(${step.imgPath})`,
                          backgroundSize: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >

                    <CardContent sx={{ display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                        }}>
                      <Typography sx={{fontWeight: '500', fontSize: '36px',  color: '#404040'}}>
                          {step.label}
                      </Typography>
                      <Button onClick={()=> push(`categories/${step.name}`)} sx={{marginTop: '24px', fontWeight: '400',letterSpacing: '0px',
                      color: '#000', padding: '13px 35px', fontSize: '16px',  color: '#404040',
                      border: '1px solid #fff', background: '#fff'}} variant="contained"
                      >SHOP NOW
                      <ArrowForwardIcon sx={{color: '#FF8E78', marginLeft: '8px'}}></ArrowForwardIcon>
                      </Button>
                  </CardContent>
              </Box>

          </Grid>
        ))}
      </Grid>
  );
}

export default Categories;
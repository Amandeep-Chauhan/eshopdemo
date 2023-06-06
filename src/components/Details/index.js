'use client';

import React from 'react'
import useGetDetails from './hooks/useGetDetails';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'next/navigation';
import { Button, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

import { Actions } from './styles'

const Details = () => {
    const params = useParams();
    const { data }= useGetDetails(params?.id);
    const { image, title, description, category, price, rating } = data || {};

    return (
        <Container maxWidth="lg">
            <Box sx={{ height: '80vh' ,  display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'}}>
                    <CardMedia
                        sx={{ width: '45%', height: 500, objectFit: "contain"  }}
                        component="img"
                        alt="Image"
                        image={image}
                    />
                    <CardContent sx={{ width: '50%' }}>
                        <Typography 
                            variant="h6" component="p" 
                            sx={{textTransform: 'Uppercase', fontFamily: "sans-serif", color: '#adb5bd', letterSpacing: '6px'}}>
                            {category}
                        </Typography>
                        <Typography variant="h4" component="p" sx={{marginTop: '12px', color: '#4d4d4d'}}>
                            {title}
                        </Typography>
                        <Typography component="div" sx={{fontWeight: '600', display: 'flex', alignItems: 'center', marginBlock: '12px'}}>
                       {rating?.rate && <Rating name="read-only" value={rating?.rate} precision={0.5} readOnly sx={{marginRight: "8px"}}/>} {rating?.rate} 
                        </Typography>
                        <Typography variant="h3" component="p"  sx={{marginBlock: '16px'}}>
                            $ {price}
                        </Typography>
                        <Typography variant="body1" component="p" sx={{color: '#6c757d', fontSize: '16px'}}>
                            {description}
                        </Typography>
                        <Actions>
                            <Button variant="outlined">Add to Cart</Button>
                            <Button variant="contained">Go to Cart</Button>
                        </Actions>
                    </CardContent>
            </Box>
        </Container>
    )
}

export default Details
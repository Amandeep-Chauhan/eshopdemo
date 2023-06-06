'use client';

import React, { useContext, useState } from 'react'
import useGetDetails from './hooks/useGetDetails';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'next/navigation';
import { Button, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

import { Actions, ImageZoom } from './styles'
import { AppContext } from '@/context/AppContext';

const Details = () => {
    const params = useParams();

    const { store, setStore } = useContext(AppContext);
    const { cartItems } = store || {};

    const { data }= useGetDetails(params?.id);
    const { image, title, description, category, price, rating } = data || {};

    const isAlreadyAdded = cartItems?.includes(data);

    const [imageZoom, setImageZoom] = useState({
        backgroundImage: `url(${image})`,
        backgroundPosition: '0% 0%'
      })

    const handleRemoveFromCart = () => {
        const filteredList = cartItems.filter((item) => item.id !== data.id)
        
        setStore((prev) => ({
            ...prev,
            cartItems: filteredList,
        }));
    };

    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 150;
        const y = (e.pageY - top) / height * 150;
        setImageZoom({ backgroundImage: `url(${image})`, backgroundPosition: `${x}% ${y}%` })
    }

    const handleMouseOut = () => {
        setImageZoom({})
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ height: '80vh' ,  display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'}}>
                    <ImageZoom onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} style={imageZoom}>
                        <CardMedia
                            sx={{ width: '45%', height: 500, objectFit: "contain"  }}
                            component="img"
                            alt="Image"
                            image={image}
                        />
                    </ImageZoom>
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
                            {isAlreadyAdded 
                                ?<Button variant="outlined" onClick={handleRemoveFromCart}>Remove from Cart</Button> 
                                :<Button variant="outlined" onClick={()=> setStore((prev)=> ({...prev, cartItems: [...prev.cartItems, data] }))}>Add to Cart</Button>
                            }
                            <Button variant="contained">Go to Cart</Button>
                        </Actions>
                    </CardContent>
            </Box>
        </Container>
    )
}

export default Details
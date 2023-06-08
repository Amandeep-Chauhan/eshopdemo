'use client';

import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import { Container } from './styles'
import { useRouter } from 'next/navigation';
import { AppContext } from '@/context/AppContext';

const NavBar = () => {
    const { push } = useRouter();
    const { store } = useContext(AppContext);

    const { cartItems } = store || {};
    const addedItemsCount = cartItems.length;

    return (
      <Container>
          <Typography variant="h4" onClick={()=> push('/dashboard')}>StellarStore</Typography>

          <Badge badgeContent={addedItemsCount} color="primary">
              <Button  variant="text" startIcon={<LocalMallIcon/>} onClick={()=> push('/cart')} sx={{border: '.5px solid #000', color: '#000'}}>Cart</Button>
          </Badge>
      </Container>
    )
}

export default NavBar
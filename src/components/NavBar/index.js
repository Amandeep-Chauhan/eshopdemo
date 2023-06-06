import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Container } from './styles'
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const { push } = useRouter();

  return (
    <Container>
        <Typography variant="h5" onClick={()=> push('/dashboard')}>E-shop</Typography>
        <Button  variant="text" startIcon={<LocalMallIcon/>} onClick={()=> push('/cart')}>Cart</Button>
    </Container>
  )
}

export default NavBar
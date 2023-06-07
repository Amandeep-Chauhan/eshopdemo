import { useContext, useState, useEffect, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Item, CountInput, Container } from './styles';
import { CardMedia } from '@mui/material';
import { AppContext } from '@/context/AppContext';

const CartItems = ({ item }) => {
  const { store, setStore } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const cartItems = store.cartItems.map((val) => {
    if(val.id === item.id){
         return { 
            ...val,
            quantity,
            product_total: item.price * quantity,
          };
    }
    return val;
  })

  const setCartData = useCallback(() => {
      setStore((prev)=> ({...prev, cartItems: cartItems }))
  }, [quantity])
  
  useEffect(() => {
    setCartData();
  }, [setCartData])

  return (
    <Container container key={item.id}>
      <Grid item xs={2}>
        <Item>
          <CardMedia
            sx={{ height: 100, objectFit: "contain" }}
            component="img"
            alt={item.name}
            image={item.image}
          />
        </Item>
      </Grid>
      <Grid item xs={4} sx={{ display:'flex', flexDirection: 'column', paddingLeft: '12px' }}>
      <Typography variant="overline" display="block" sx={{ textAlign: 'left', color: '#8d99ae'}}>
        kjhghj
      </Typography>
        <Typography variant="overline" display="block" sx={{ lineHeight: '1.5', textAlign: 'left' }}>
        {item.title}
      </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CountInput>
          <RemoveIcon onClick={decrement} size='small'/>
          <TextField
            id="outlined-size-small"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue="Small"
            size="small"
            sx={{ width: "50px", marginInline: '8px' }}
          />
          <AddIcon onClick={increment} size='small'/>
        </CountInput>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Item>$ {eval(item.price * quantity)}</Item>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Item>
          <FavoriteIcon sx={{ marginRight: '20px' }}/>
          <DeleteForeverIcon />
        </Item>
      </Grid>
    </Container>
  );
};

export default CartItems
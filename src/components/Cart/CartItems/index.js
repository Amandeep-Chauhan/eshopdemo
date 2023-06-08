import { useContext, useState, useEffect, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Item, CountInput, Container } from './styles';
import { CardMedia } from '@mui/material';
import { AppContext } from '@/context/AppContext';

const CartItems = ({ item }) => {
  const { store, setStore } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  const { cartItems, wishList } = store || {};

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

  const isFavourite = wishList.filter((val) => val.id === item.id).length > 0;

  const handleAddToWishList = () => {
    setStore((prev)=> ({...prev, wishList: [...prev?.wishList, item] }));
  }

  const handleRemoveFromWishList = () => {
    const filteredItems = wishList.filter((val) => val.id !== item.id);
    setStore((prev)=> ({...prev, wishList: filteredItems }));
  }

  const handleRemoveFromCart = () => {
    const filteredItems = cartItems.filter((val) => val.id !== item.id);
    setStore((prev)=> ({...prev, cartItems: filteredItems }));
  }

  const updateCartItems = cartItems.map((val) => {
    if(val.id === item.id){
         return { 
            ...val,
            quantity,
            product_total: item.price * quantity,
          };
    };
    return val;
  })
  
  useEffect(() => {
    setStore((prev)=> ({...prev, cartItems: updateCartItems }))
  }, [quantity])

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
        {item.category}
      </Typography>
        <Typography variant="overline" display="block" sx={{ lineHeight: '1.5', textAlign: 'left' }}>
        {item.title}
      </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CountInput>
          <RemoveIcon onClick={decrement} size='small' sx={{ cursor: 'pointer' }}/>
          <TextField
            id="outlined-size-small"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue="Small"
            size="small"
            sx={{ width: "50px", marginInline: '8px' }}
          />
          <AddIcon onClick={increment} size='small' sx={{ cursor: 'pointer' }}/>
        </CountInput>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Item>INR {eval(item.price * quantity)}</Item>
      </Grid>
      <Grid item xs={2} sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Item>
          <FavoriteIcon sx={{ marginRight: '20px', color: isFavourite ? 'red' : '#000', cursor: 'pointer'   }} onClick={isFavourite ? handleRemoveFromWishList : handleAddToWishList}/>
          <CloseIcon onClick={handleRemoveFromCart} sx={{ cursor: 'pointer' }}/>
        </Item>
      </Grid>
    </Container>
  );
};

export default CartItems
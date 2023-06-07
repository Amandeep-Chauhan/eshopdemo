import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CartItems from './CartItems';

const Cart = () => {
  const { store } = useContext(AppContext);
  const { cartItems } = store || {};

  const totalAmount = cartItems.reduce((acc, curr) => acc + curr?.product_total, 0);

  return (
      <Container maxWidth="md" sx={{ border: '1px solid', borderRadius: "4px", marginTop: '20px', padding: '20px 0 12px 0' }}>
          {cartItems.map((item)=> <CartItems key={item?.id} item={item} />)}
          <Typography variant="h4" sx={{ textAlign: 'right' }}>
              Total: $ {(totalAmount || 0).toFixed(2)}
          </Typography>
      </Container>
  );
};

export default Cart;
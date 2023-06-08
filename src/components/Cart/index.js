import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CartItems from './CartItems';
import { Button } from '@mui/material';

const Cart = () => {
  const { store } = useContext(AppContext);
  const { cartItems } = store || {};

  const totalAmount = cartItems.reduce((acc, curr) => acc + curr?.product_total, 0);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_brNvd8q3AZOoId",
      currency: "INR",
      amount: amount * 100,
      name: "StellarStore",
      description: "Thanks for purchasing",
      image: "",

      handler: function (response) {
        alert("Payment Successfully", response.razorpay_payment_id);
      },
      prefill: {
        name: "StellarStore",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
      <Container maxWidth="md" sx={{ border: '1px solid', borderRadius: "4px", marginTop: '20px', padding: '20px 0 12px 0' }}>
          {cartItems.map((item)=> <CartItems key={item?.id} item={item} />)}
          <Typography variant="h4" sx={{ textAlign: 'right' }}>
              Total: INR {(totalAmount || 0).toFixed(2)}
          </Typography>

          <Button onClick={() => displayRazorpay(totalAmount || '200')}>
                BUY NOW
          </Button>
      </Container>
  );
};

export default Cart;
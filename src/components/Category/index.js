'use client';

import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useGetProductList from './hooks/useGetProductList';
import { useParams, useRouter } from 'next/navigation';

const Category = () => {
    const params = useParams();
    const {data}=useGetProductList(params)
    const { push } = useRouter();

  return (
<Grid container sx={{padding: '60px'}} >
        {(data || []).map((item)=>{
            const {image, id, price, title, rating } = item || {}
            return(
                <Grid onClick={()=> push(`/details/${id}`)} key={id} item xs={3.7} sx={{ padding: ' 12px 16px', margin: '16px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}} >
                    <Box
                component="div"
                sx={{
                  height: 500,
                  backgroundImage: `url(${image})`,
                  width: '100%',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
             />
                <CardContent>
                <Typography variant="h6" component="div" sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  {title}
                </Typography>
                <Rating name="read-only" value={rating.rate} readOnly  />
                <Typography variant="h5" color="text.secondary" sx={{marginTop: '8px'}}>
                    $ {price}
                </Typography>
              </CardContent>
            </Grid>
            )
        })}
     </Grid>
  );
}

export default Category
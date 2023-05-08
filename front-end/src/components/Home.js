import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import axios from "axios"
import Products from './ProductsCard';

const Home = () => {

 
       const checkOutHandler = async (amount) =>{

        const  {data: {key}}  = await axios.get("http://localhost:4000/api/getkey");
           
           const  {data: {order}}  = await axios.post("http://localhost:4000/api/checkout" , { 
            amount 
          });

          const options = {
            key,
            amount: order.amount, 
            currency: "INR",
            name: "NPCI",
            description: "Products Razorpay Corporate Office",
            image: "https://avatars.githubusercontent.com/u/121920342?s=400&u=b62be23ef36a8d91c3e98d9a96906b3c41f729a6&v=4",
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Parimal Tank",
                email: "parimalt@zignuts.com",
                contact: "1234567890"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
       }

  return (
    <Box>
               {/* if device is Mobile Use column otherwise use row */}
         <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column","row"]} >
              <Products  amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"}  checkOutHandler={(e) => checkOutHandler(e)} />
              <Products  amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"}  checkOutHandler={(e) => checkOutHandler(e)} />
         </Stack>
    </Box>
  )
}

export default Home

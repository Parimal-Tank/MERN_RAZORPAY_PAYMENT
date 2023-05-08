import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {

    const search = useLocation().search;
   const referenceNo=new URLSearchParams(search).get("reference");

  return (
    <Box>
      <VStack h="100vh" justifyContent="center">
        <Heading textTransform={"uppercase"}>order successfull</Heading>
        <Text>Reference No . {referenceNo}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
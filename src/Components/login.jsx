import Navbar from "./navbar";

import React from "react"

import {Box,Image,Text,Input} from "@chakra-ui/react"

export default function Login(){
    return(
        <>
        <Navbar/>
        <br />
        <br />
        <Box w="90%" m="auto" display="flex">
         <Image  src= "https://www.jiomart.com/msassets/images/login-banner.jpg"/>
        <Box ml="200px" mt="100px">
        <Text fontSize="25px" fontWeight="bold">Sign in</Text>
        <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
        <br/>

        <Input placeholder="Enter your mobile no"/>
        </Box>
        </Box>
    </>
        )
}
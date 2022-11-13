import {Box,Text,Image} from "@chakra-ui/react"

export default function Footer(){
    return(
        <Box backgroundColor="#f3f3f3;" h="-moz-max-content" w="100%" display="flex" p="50px"  justifyContent="space-around" >
            <Box   w="200px" >
                <Text fontWeight="bold" fontSize="13px">MOST POPULAR CATEGORIES</Text>
                <Box color="rgba(51,51,51,.75)" fontSize="13px" mt="10px"  >     
                <p>Staples</p>
                <p>Beverages</p>
                <p>Personal Care</p>
                <p>Home Care</p>
                <p>Fruits and Vegetables</p>
                <p>Baby Care</p>
                <p>Snacks & Branded Foods</p>
                <p>Dairy & Bakery</p>
                </Box>
            </Box>
            <Box   >
            <Text fontWeight="bold" fontSize="13px">CUTOMER SERVICES</Text>
                <Box color="rgba(51,51,51,.75)" fontSize="13px" mt="10px"  >     
                <p>About Us</p>
                <p>FAQ</p>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
                <p>E-waste Policy</p>
                <p>Cancellation and return policy</p>
                </Box>
            </Box>
            <Box  w="300px">
            <Text fontWeight="bold" fontSize="13px">CONTACT US</Text>
                <Box color="rgba(51,51,51,.75)" fontSize="13px" mt="10px"  >     
                <p style={{display:"flex"}}>WhatsApp us : <Text color="#007bff"> 70003 70003</Text></p>
                <br/>
                <p style={{display:"flex"}}>Call us : <Text color="#007bff"> 1800 890 1222</Text></p>
                <p>8:00 AM to 8:00 PM, 365 days</p>
                <br/>
                <p>Please note that you are accessing the BETA Version of <a style={{color:"#007bff"}} href="https://www.jiomart.com/">www.jiomart.com</a></p>
                <br/>
                <p>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</p>
                <br/>
                <Text fontWeight="bold" color="black">DOWNLOAD APP</Text>
                <br/>
                <Box display="flex" gap="50px">
                <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"/>
                <Image src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"/>
                </Box>
                </Box>
            </Box>
            
        </Box>
    )

}
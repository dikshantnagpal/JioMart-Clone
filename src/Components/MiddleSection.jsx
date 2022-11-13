import { Box,Image,Text } from "@chakra-ui/react";
export default function MiddleSection(){
    return(
        <Box>

        <Box  w="98%"  margin="auto" mt="20px">
 
            <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg"/>
            <br/>
            <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668170007_Electronics__Mobiles_Desktop_Version.jpg"/>
            <br/>
            <Image margin="auto" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668078963_trends_web.jpg"/>
        </Box>
        <Box>
        <Text fontWeight="600" fontSize="xl" ml="30px">Shop From Top Categories</Text>
        </Box>
       
</Box>
    )
}

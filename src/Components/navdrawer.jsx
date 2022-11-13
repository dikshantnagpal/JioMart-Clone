import {
    Drawer,
    DrawerBody,
    
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
 
    useDisclosure,
    Button,
   Box,
   Text,
    RadioGroup
  } from '@chakra-ui/react'
  import React from 'react'
  import {HamburgerIcon} from "@chakra-ui/icons"



function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          
        </RadioGroup>
        <Button colorScheme='none' onClick={onOpen}>
          <HamburgerIcon h="30px" w="30px"/>
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader borderBottomWidth='1px' backgroundColor="#007bff" color="white">
              
              Hello,Sign In
              <br />
              <Box display="flex"  gap="10px" textAlign="center">
              <Text border="2px solid white" w="150px">Account</Text>   
              <Text border="2px solid white" w="150px">orders</Text>
              </Box>
               </DrawerHeader>
            <DrawerBody>
              <p>Home</p>
              <br />
              <p>Shop by Category</p>
              <br />
              <p>My list</p>
              <br />
              <p>JioMart Wallet</p>
              <br />
              <p>JioMart Gift Store</p>
              <br />
              <p>All Offers</p>
              <hr w="100%" />
              <p>My Account</p>
              <br />
              <p>Need Help</p>
              <br />
              <p>About us</p>
              <br />
              <p>Guide</p>
              <hr w="100%" />
            </DrawerBody>
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavDrawer
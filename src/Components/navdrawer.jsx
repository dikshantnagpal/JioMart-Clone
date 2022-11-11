import {
    Drawer,
    DrawerBody,
    
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
 
    useDisclosure,
    Button,
   
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
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavDrawer
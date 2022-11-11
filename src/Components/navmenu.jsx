import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Image,
  Text

} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
export default function Navmenu1({head,one,two,three,four,five,six,seven,eight}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    
    <Box >
      <Menu  isOpen={isOpen} >
        <MenuButton  onMouseEnter={onOpen}
          onMouseLeave={onClose} >
         {head} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>{one}</MenuItem>
          <MenuItem>{two}</MenuItem>
          <MenuItem>{three}</MenuItem>
          <MenuItem>{four}</MenuItem>
          <MenuItem>{five}</MenuItem>
          <MenuItem>{six}</MenuItem>
          <MenuItem>{seven}</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

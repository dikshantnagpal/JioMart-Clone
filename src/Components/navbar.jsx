import NavDrawer from "./navdrawer";
import {Box,Image,Input,Text} from "@chakra-ui/react"
import Navmenu1 from "./navmenu";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <Box backgroundColor="#007bff;" h="70px" display="flex" alignItems="center" gap="30px" color="white">
            <NavDrawer/>
            <Link to="/"><Image h="60%" src="https://www.jiomart.com/assets/version1666876029/smartweb/images/jiomart_logo_beta.svg"/></Link>
            <Input placeholder='Search essentials,groceries, and more ...' w="50%" backgroundColor="white" color="black"/>
            <Image h="40%" ml="15px"src="https://cdn-icons-png.flaticon.com/128/456/456283.png"/><Link to="/login"><Text ml="-18px">Sign in/Sign up</Text></Link>
            <Image h="45%" ml="20px"  src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"/> <Text ml="-18px">Cart</Text>
        </Box>
        <Box backgroundColor="#f3f3f3;" h="45px" display="flex" gap="35px" alignItems="center" >
            <Image ml="45px" h="30px" w="30px" src="https://media.istockphoto.com/id/874715852/vector/pin-icon-vector.jpg?s=612x612&w=0&k=20&c=rXwgGPaH73k6d3AnHeZMNHrtlgo4HHVdvEfkBBHALCU="/>
            <Text>Deliver to 700129</Text>
            <Navmenu1  head={"groceries"} one={"Fruits & Vegetables"}
            two={"Dairy & Bakery"}
            three={"Staples"}
            four={"Snacks & Branded Foods"}
            five={"Beverages"}
            six={"Personal Care"}
            seven={"Home Care"}
            />
          
            <Navmenu1 head={"Premuim Fruits"} one={"Apples & Pears"}
            two={"Avocado, Peach, Plum"}
            three={"Banana, Melons & Coconut"}
            four={"Cherries, Berries & Exotic Fruits"}
            five={"Citrus,Mango & Grapes"}
            />
             <Navmenu1 head={"Home & Kitchen"} one={"Bathroom & Laundry Accessories"}
            two={"Disposables"}
            three={"Furnishing"}
            four={"Furniture"}
            />
            <Navmenu1 head={"Fashion"} one={"Men"}
            two={"Women"}
            three={"Boys"}
            four={"Girls"}
            five={"Infants"}
            />
 <Navmenu1 head={"Electronics"} one={"Mobiles & Tablets"}
            two={"TV & Speaker"}
            three={"Home Appliances"}
            four={"Computers"}
            five={"Cameras"}
            six={"Gaming"}
            seven={"Accessories"}
            />
            <Navmenu1 head={"Beauty"} one={"Hair"}
            two={"Skin Care"}
            three={"Fragrances"}
            four={"Personal Care"}
            five={"Mom & Baby"}
            six={"Men's Grooming"}
            seven={"Wellness"}
            />
            <Navmenu1 head={"Home Improvement"} one={"Auto Care"}
            two={"Building Supplies & Measuring Tools"}
            three={"Carpentary"}
            four={"Electrical"}
            five={"Hardware & Plumbing"}
            six={"Home Cleaning & Organisation"}
            seven={"Home Safety & Automation"}
            />                 
        </Box>
        </>
    )
}

export default Navbar
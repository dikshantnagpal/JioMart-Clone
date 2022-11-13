import { Box, Image, Button, Text } from "@chakra-ui/react"



function Deals({ image, title, formattedPrice, mrp, save }) {
    const property = {
        imageUrl: { image },
        title: { title },
        formattedPrice: { formattedPrice },
        mrp: { mrp },
        save: { save },
    }

    return (

        <>
            <Text fontWeight="600" ml="20px" fontSize="23px">Top Deals</Text>
            <br />
            <Box display="flex">
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/492392721/nivea-soft-peppy-pomegranate-cream-200-ml-product-images-o492392721-p590831521-0-202203150542.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Nivea Soft Light Peppy Pomegranate"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 174"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 349"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 175"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-0-202203151056.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Colgate Strong Teeth Dental Cream"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 186"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 266"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 80"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/491252835/tide-jasmine-rose-detergent-powder-5-kg-get-extra-1-kg-free-product-images-o491252835-p590838653-0-202203151949.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Tide Jasmine & Rose Detergent Powder 5 kg"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 659"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 709"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 50"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-product-images-o490003834-p490003834-0-202203150702.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Maggi 2-Minute Masala Instant Noodles 560 g"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 94"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 109"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 15"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/491895396/gowardhan-cow-ghee-1-l-pack-of-2-pouch-with-lock-seal-container-product-images-o491895396-p590052513-0-202203171122.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Gowardhan Cow Ghee 1 L (Pack of 2) Pouch"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 1264"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 1360"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 96"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/491584192/mangaldeep-4-in-1-ziplock-agarbatti-120-pcs-product-images-o491584192-p491584192-0-202203150356.jpg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Mangaldeep 4 in 1 Agarbatti Pouch 120"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 32"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 65"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 33"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <br />
            <Text fontWeight="600" ml="20px" fontSize="23px">Trending Smartphones</Text>
            <br />
            <Box display="flex">
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/493178791/realme-narzo-50a-128-gb-4-gb-ram-oxygen-blue-mobile-phone-digital-o493178791-p594779615-0-202210221327.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Realme Narzo 50A 128GB"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 10,499"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 14,999"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 4,500"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/491901533/apple-iphone-12-128-gb-black-digital-o491901533-p590441373-0-202207250045.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Apple iPhone 12 128GB, Black"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 53,900"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 64,900"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 11,000"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/492849854/redmi-10-128-gb-6-gb-ram-midnight-black-mobile-phone-digital-o492849854-p591469929-0-202205192214.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Redmi 10 128 GB,6 GB RAM"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 11,999"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 16,999"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 5,000"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/492849083/motorola-g31-64-gb-4-gb-ram-baby-blue-mobile-phone-digital-o492849083-p591163176-0-202204132005.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Motorola G31 64 GB, 4 GB RAM"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 10,499"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 14,999"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 4,500"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/493177198/motorola-g62-5g-128-gb-6-gb-ram-midnight-grey-mobile-phone-digital-o493177198-p593409619-0-202208102107.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Motorola G62 5G 128 GB, 6 GB RAM"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "₹ 15,999"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            {property.mrp = "M.R.P: ₹ 21,999"}

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            {property.save = "Save ₹ 6,000"}
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box w="190px" h="320px" borderWidth='1px' borderRadius='lg' overflow='hidden' ml="5" >
                    <Image ml="4" src={property.imageUrl = "https://www.jiomart.com/images/product/150x150/493177752/apple-iphone-14-128-gb-blue-digital-o493177752-p593687859-0-202209091827.jpeg"} />

                    <Box p='1' ml="2">
                        <Box display='flex' alignItems='baseline'>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >

                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            fontSize="15px"
                            as='p'
                            lineHeight='tight'
                            noOfLines={2}
                        >
                            {property.title = "Apple iPhone 14 128 GB, Blue"}
                        </Box>

                        <Box>
                            {property.formattedPrice = "M.R.P: ₹ 79,900"}

                        </Box>

                        <Box display='flex' alignItems='center' textDecoration="line-through" >
                            <br />

                        </Box>
                        <Box as='span' color='green.500' fontSize='sm' fontWeight="bold" >
                            <br />
                        </Box>
                        <Box  >
                            <Button w="90%" colorScheme='blue'>Add To Cart</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <br />
            <Text fontWeight="600" ml="40px" fontSize="22px">Top Mobile Brands</Text>
            <br />
            <Box display="flex" w="95%" m="auto">
                <Box className="zoom">
                    <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667198627_05_Mobile.jpg" />
                </Box>
                <Box>
                    <Image className="zoom" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667198675_03_Mobile.jpg" />
                </Box>
                <Box className="zoom">
                    <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667198700_01_Mobile.jpg" />
                </Box>

            </Box>
            <br />
            <Text fontWeight="600" ml="40px" fontSize="23px">Top Electronic Brands</Text>
            <br />
            <Box display="flex" w="95%" m="auto">
                <Box className="zoom">
                    <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667196821_Electronics_02.jpg" />
                </Box>
                <Box>
                    <Image className="zoom" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667196796_Electronics_04.jpg" />
                </Box>
                <Box className="zoom">
                    <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667196877_Electronics_05.jpg" />
                </Box>

            </Box>
        </>
    )
}

export default Deals
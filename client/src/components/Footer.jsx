import colors from "../pages/colors";

import { Flex, Text, Link } from "@chakra-ui/react";


const Footer = () => {
    const {Black} = colors();
    <Flex 
        h={"50px"} 
        w={'100px'}
        backgroundColor={"red"}
        mt={'auto'}
        fontSize={'30px'}
        z-index={'10'}
    >
        <Link><Text>Shopify</Text></Link>
        <Link><Text>Shopify</Text></Link>
        <Link><Text>Shopify</Text></Link>
    </Flex>
}
export default Footer;
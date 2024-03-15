import '../App.css';
import { Flex, Text, Heading, Button, background, Box, Menu} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopRoute, HomeRoute, AuthRoute } from '../utils/consts';
import Sir from "../images/sir.png"

const menu = () => {
    return(
        <Box>
            <Flex 
            align={'center'}
            justify={'space-between'}
            backgroundImage={Sir}
            h={'100hv'}
            backgroundSize={'cover'}
            > 
            <Box>
            <Text> meow</Text>
            </Box>  
            </Flex>
        </Box>
    )
}
export default menu;
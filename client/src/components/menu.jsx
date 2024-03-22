import '../App.css';
import { Flex, Text, Heading, Button, background, Box, Menu, AspectRatio } from '@chakra-ui/react';
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
            <Text color={'#000000' }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iste voluptates eaque ipsum, doloremque corporis veritatis nemo sequi aspernatur error explicabo enim in iusto sunt saepe, ratione veniam pariatur assumenda.</Text>
            </Box>  
            </Flex>
            <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'30px 0px 20px 0px'}> 
                        <Text fontSize={'40px'} color={'#332821'}>Where are your potatoes?</Text> 
                        <AspectRatio ratio={16 / 9} width={"100%"} h={500} > 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38946.80405791186!2d23.81995275841609!3d52.403499904577785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720559c6df3f967%3A0x2cc7ba71f743e569!2z0JrQsNC80LXQvdC10YYsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1711123453690!5m2!1sru!2sby"  ></iframe> 
                        </AspectRatio> 
                    </Flex>
        </Box>
    )
}
export default menu;
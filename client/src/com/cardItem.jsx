import '../App.css';
import { Flex, Heading, Button, Link, Card, CardBody, Box, Text, Image } from '@chakra-ui/react';
import MLP from '../img/Meet_the_Ponies_main_crop.webp'
const CardItem = () =>{
    return(
        <Card
        width={'400px'}
        height={'400px'}
        boxShadow={'1px 1px 10px #808080'}
        borderRadius={'8px'}
        >
            <Image src={MLP}
                    width={'300px'}
                    alt='MLP'>
            </Image>
            <Box
                width={'100%'}
                textAlign={'center'}
        >
        <Heading fontSize={'30px'}>My little warms</Heading>
        </Box>
        <Box>
            <Text>
                Infecktion aboout warms
                </Text>
            </Box>

        </Card>
    )
}
export default CardItem; 
import '../App.css';
import { Flex, Heading, Link, Card, CardBody, Box, Text, Image } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import MLP from '../img/Meet_the_Ponies_main_crop.webp'

const CardItem = () =>{
    return(
        <Card
            width={'400px'}
            height={'400px'}
            boxShadow={'1px 1px 10px #808080'}
            borderRadius={'8px'}

        >
            <Box
                width={'100%'}
                textAlign={'center'}
        >
                        <Image src={MLP}
                         margin={'30px 0px 0px 0px'}
                    width={'300px'}
                    alt='MLP'>
            </Image>
        </Box>

            <Box
                width={'100%'}
                textAlign={'center'}
        >
            <Heading fontSize={'30px'} margin={'0px 0px 0px 20px'} >My little warms</Heading>
        </Box>
       
        <Box>
               <Text margin={'0px 0px 0px 20px'} textAlign={'center'} fontSize={'20px'}  > Дружба- это чудо</Text>
               <Box>
                     {/* <Button direction='row' spacing={4} align='center' colorScheme='teal' variant='outline'>
                        Button
                    </Button> */}
                    <Button colorScheme='teal' variant='solid'>
                        Button
                    </Button>
            </Box>
               
        </Box> 
        
        </Card>
    )
}
export default CardItem; 
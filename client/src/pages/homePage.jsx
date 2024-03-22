import '../App.css';
import { Flex, Box, Text, Grid, GridItem, WrapItem, Button, ButtonGroup, AspectRatio } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from './colors';
import ToTopButton from '../components/ToTopButton';
import Sir from "../images/siir.png"
import menu from '../components/menu';



const HomePage = () =>{

    return(
        <Box
            w={'100%'}
        >
            <Flex w={'100%'}>
                
                <NavBar />
            </Flex>
            <Flex 
                w={'100%'}
                flexWrap={'wrap'}
            >

                {/* <Flex
                    h={'300vh'}
                    width={"100%"}
                    justify={'center'}
                > */}
                    <Flex
                        h={'100vh'}
                        w={'100%'}
                        backgroundImage={Sir}
                        backgroundSize={'cover'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                    >
                        <Text fontSize={'170px'} m={"0px 0px 0px 100px"} textColor={'#B8860B'}>cheese and <b className='bbb'> red</b> </Text>
                            <ButtonGroup gap='4'm={"90px 0px 0px 70px"} >
                            <Button colorScheme='whiteAlpha' padding={'60px 80px 60px 80px'} fontSize={'70px'}>WhiteAlpha</Button>
                            <Button colorScheme='blackAlpha'>BlackAlpha</Button>
                            <Button colorScheme='blackAlpha'>BlackAlpha</Button>
                            </ButtonGroup>
                        
                        
                    </Flex>
                    <Flex
                        h={'100vh'}
                        w={'100%'}
                    >
                        <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} w={'100%'} margin={'30px 0px 20px 0px'}> 
                        <Text fontSize={'40px'} color={'#332821'}>Where are your potatoes?</Text> 
                        <AspectRatio ratio={16 / 9} width={"100%"} h={500} > 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38946.80405791186!2d23.81995275841609!3d52.403499904577785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720559c6df3f967%3A0x2cc7ba71f743e569!2z0JrQsNC80LXQvdC10YYsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1711123453690!5m2!1sru!2sby"  ></iframe> 
                        </AspectRatio> 
                    </Flex>
                        <ToTopButton/>
                        <Footer />
                    </Flex>
                </Flex>
            {/* </Flex> */}
       </Box>
    )
    
}

export default HomePage;
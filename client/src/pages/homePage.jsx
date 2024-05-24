import '../App.css';
import { Flex, Box, Text, Grid, GridItem, WrapItem, Button, ButtonGroup, AspectRatio } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from './colors';
import ToTopButton from '../components/ToTopButton';
import Sir from "../images/siir.png"
import menu from '../components/menu';
import CardItem from '../components/cardItem';
import CardItem2 from '../components/cardItem2';
import Loader from '../components/Loader';
import { useContext, useEffect, useState } from 'react'; 
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


 
const HomePage = () =>{ 
    const [isLoading, setIsLoading] = useState(true); 
    const {store} = useContext (Context);
 
    useEffect(() => { 
        const checkAuth = async () => { 
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
            setIsLoading(false) 
        } 
        checkAuth ();
    }, [store])

 
    return( 
        <> 
            {isLoading ? ( 
                <Loader /> 
            ) : (
        <Box
            w={'100%'}
            bg={"black"}
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
                            <Button colorScheme='whiteAlpha' padding={'60px 80px 60px 80px'} fontSize={'70px'}>AlphaSir</Button>
                            <Button colorScheme='blackAlpha'>buy sir</Button>
                            <Button colorScheme='blackAlpha'>BlackAlphaSir</Button>
                            </ButtonGroup>
                        
                        
                    </Flex>
                    <Flex
                        h={'100vh'}
                        w={'100%'}
                        id='about'
                    >
                        <Flex backgroundColor={'#45310c'} padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} h={'200vh'} w={'100%'} margin={'30px 0px 20px 0px'}> 
                        <Text fontSize={'40px'} mt={'700px'} color={'#bfa471'}>Where are your sir?</Text> 
                        <AspectRatio ratio={16 / 9} width={"100%"} h={800} mt={'60px'}> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38946.80405791186!2d23.81995275841609!3d52.403499904577785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720559c6df3f967%3A0x2cc7ba71f743e569!2z0JrQsNC80LXQvdC10YYsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1711123453690!5m2!1sru!2sby"  ></iframe> 
                        </AspectRatio> 
                        <Box>
                            <Box>
                                <Text>About us:</Text>
                            </Box>
                        </Box>
                        <Box mt={'20px'} w={'100%'} backgroundColor={'#6e6232'}>
                        <Text fontSize={'80px'} padding={'10px 50px'} margin={'30px 0px 20px 0px'}>Your Comments:</Text>
                        
                        <Flex
                            flexWrap={'wrap'}
                            mt={'20px'}
                            width={'90%'}
                            justify={'center'}
                            gap={'35px'}
                            mb={'30px'}
                        > 
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem2 />
                            <CardItem />
                        </Flex>
                        </Box>
                    </Flex>
                        <ToTopButton/>
                        <Footer />
                    </Flex>
                </Flex>
            {/* </Flex> */}
       </Box>)}</>

    )
    
}

export default observer (HomePage);
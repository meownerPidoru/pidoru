import '../App.css';
import { Flex, Box, Text } from '@chakra-ui/react';
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
            >

                <Flex
                    h={'100vh'}
                    width={"100%"}
                    justify={'center'}
                >
                                    <Flex
                    h={'100vh'}
                    w={'100%'}
                    backgroundImage={Sir}
                    backgroundSize={'cover'}
                >
                    <Text fontSize={'100px'}  textColor={'#B8860B'}>cheese and <b className='bbb'> red</b> </Text>
                </Flex>

                    <ToTopButton/>
                    <Footer />
                  
                </Flex>
            </Flex>
       </Box>
    )
    
}

export default HomePage;
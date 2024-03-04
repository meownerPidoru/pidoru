import '../App.css';
import { Flex, Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from './colors';
import ToTopButton from '../components/ToTopButton';

const HomePage = () =>{

    return(
        <Box
            w={'100%'}
        >
            <Flex w={'100%'}> <NavBar /> </Flex>
            <Flex 
                w={'100%'}
            >
                <Flex
                    h={'100vh'}
                    width={"100%"}
                    justify={'center'}
                >
                    <ToTopButton/>
                   <Footer />
                </Flex>
            </Flex>
       </Box>
    )
    
}

export default HomePage;
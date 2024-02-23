import '../App.css';
import CardItem from './cardItem';
import { Flex } from '@chakra-ui/react';
import NavBar from './NavBar';

const AuthPage = () => {
        return(
        <Flex width={'100%'} flexWrap={'wrap'} justify={'center'}>
            <NavBar/>
            <Flex
                width={'90%'}
                height={'70vh'}
                justify={'center'}
                align={'center'}
            >
                <Flex width={'300px'} height={'400px'} backgroundColor={'red'}></Flex>
            </Flex>
            
        </Flex>
        )
}
export default AuthPage;
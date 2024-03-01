import NavBarSh from '../components/NavBarSh';
import { Flex } from '@chakra-ui/react';
const AuthPage = () =>{
    return(
        <Flex
            width={'100%'}
            flexWrap={'wrap'}
            justify={'center'}
        >
            <NavBarSh />
            <Flex
                width={'90%'}
                justify={'center'}
                align={'center'}
                height={'70vh'}
            >
                <Flex
                    boxShadow={'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'}
                    width={'300px'}
                    height={'300px'}
                    
                ></Flex>
            </Flex>
        </Flex>
       
       
    )
    
}

export default AuthPage;
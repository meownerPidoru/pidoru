import NavBarSh from '../components/NavBarSh';
import { Center, Flex, Text, Box, InputGroup,InputLeftAddon, Input, InputRightAddon, Button, Checkbox} from '@chakra-ui/react';
import { ShopRoute, HomeRoute } from '../utils/consts';
import { Context } from '../index'
import { useContext,useState } from 'react';
import { AuthRoute } from '../utils/consts';
import { Link } from 'react-router-dom';
const RegisterPage = () =>{
    const { store } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (email, password) => {
        try{
            await store.registration(email, password);
            if (store.isAuth) {
                alert ('Вы зарегистрированы') 
            } else {
                store.setError('Incorrect login or pass. Try again!')
                alert ('Ошибка') 
            }
        } catch (e) {
            console.log('An error ocured during login.')
        }
    }
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
                    height={'400px'}    
                    justify={'center'}
                    flexWrap={'wrap'}
                >   <Box
                     width={'100%'}
                     textAlign={'center'}
                     justify={'space-around'}>
                    <Text textAlign={'center'} margin={'30px 0px 30px 0px'} fontSize='4xl' > <b>Sing in</b></Text>             

                    <Checkbox defaultChecked margin={'0px 0px 20px 0px'}>ты Беларус?</Checkbox>
                        <InputGroup size='sm' w={'100%'} width={'250px'} paddingLeft={'50px'} marginTop='10px' >
                            <Input 
                                placeholder='e-mail'
                                onChange={e=> setEmail(e.target.value)} 
                                value={email} 
                            />
                        </InputGroup>
                       < InputGroup size='sm' w={'100%'} width={'250px'} paddingLeft={'50px'} marginTop='10px'>
                            <Input 
                                placeholder='password'
                                onChange={e=> setPassword(e.target.value)} 
                                value={password} 
                            />
                        </InputGroup>
                        <Button colorScheme='teal' variant='solid' marginTop='10px'   onClick={() => {handleRegister(email, password)}} >
                        Sing In
                        </Button>
                        <Link to={AuthRoute}>Login</Link>
                    </Box>
                    
                </Flex>
            </Flex>
        </Flex>
       
       
    )
    
}

export default RegisterPage;
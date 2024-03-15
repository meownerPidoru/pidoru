import '../App.css';
import { Flex, Heading, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopRoute, HomeRoute, AuthRoute } from '../utils/consts';

const NavBarSh = () => {
    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            width={'100%'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
            borderRadius={'8px'}
            padding={'15px 50px'}
        >
            <Link
                to={HomeRoute}
            >
                <Heading className='heading'>SirShop</Heading>
            </Link>
        
            <Flex
                width={'50px'}
                justify={'space-between'}
            >
            </Flex>
        </Flex>
    );
  }
  
  export default NavBarSh;
  
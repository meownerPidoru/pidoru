import '../App.css';
import { Flex, Heading, Button, Link } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            width={'100%'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
            borderRadius={'8px'}
            padding={'10px 50px'}
        >
            <Heading>Shopify</Heading>
            <Flex>
                <Button colorScheme='gray' variant='ghost'>HorsShop</Button>
                <Button colorScheme='gray' variant='ghost'>About</Button>
                <Button colorScheme='gray' variant='ghost'>Products</Button>
            </Flex>
            <Flex
                width={'50px'}
                justify={'space-between'}
            >
                <Link>
                    <svg className='nav-icon' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16c-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4M400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4c14.6 0 38.3 16 89.6 16c51.7 0 74.9-16 89.6-16c47.6 0 86.4 38.8 86.4 86.4zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0S80 64.5 80 144s64.5 144 144 144m0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96s-96-43.1-96-96s43.1-96 96-96"/>
                    </svg>
                </Link>
                <Link>
                    <svg className='nav-icon' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"/>
                    </svg>
                </Link>
            </Flex>
        </Flex>
    );
  }
  
  export default NavBar;
  
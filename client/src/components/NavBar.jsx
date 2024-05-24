import '../App.css';
import { Flex, Heading, Button, Select} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ShopRoute, HomeRoute, AboutRoute, AuthRoute } from '../utils/consts';
import colors from "../pages/colors";
import { useRef, useEffect, useState } from 'react' 
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useContext } from 'react';

const NavBar = () => { 
    const prevScrollY = useRef(0); 
    const [isNavBarVisible, setIsNavBarVisible] = useState(true); 
    const location= useLocation();
    const { store } = useContext(Context);
      
    useEffect(() => { 
        const scroll = () =>{ 
            const currentScrollY = window.scrollY; 
            const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up"; 
            if(scrollDirection === "down" && currentScrollY > 50){ 
                setIsNavBarVisible(false) 
            }else if(scrollDirection === "up" || currentScrollY <=50){ 
                setIsNavBarVisible(true) 
            } 
            prevScrollY.current = currentScrollY; 
        } 
        window.addEventListener("scroll", scroll); 
 
        return() => window.removeEventListener("scroll", scroll); 
    }, []);
    useEffect(() => {
        const scrollToSection = window.location.hash.substring(1);

        if(scrollToSection){
            const section = document.getElementById(scrollToSection);
            if(section){
                section.scrollIntoView({
                    behavior:"smooth",
                })
            }
        }
    }, [window.location.hash])



    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            width={'100%'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
            borderRadius={'8px'}
            padding={'15px 50px'}
            backgroundColor={'#000000'}
        >
            <Link
                to={HomeRoute}
            >
                <Heading className='heading' textColor={'#FFFFFF'}>SirClab</Heading>
            </Link>
            <Flex>
                <Link to={ShopRoute}>
                    <Button  textColor={'#FFFFFF'} variant='ghost'>
                        Shop
                    </Button>
                </Link>
                <Link to={`${HomeRoute}#about`}>
                <Button  textColor={'#FFFFFF'} variant='ghost'>
                    About
                </Button>
              </Link>
                <Button  textColor={'#FFFFFF'} variant='ghost'>
                    Products
                </Button>
            </Flex>
            <Flex
                width={'50px'}
                justify={'space-between'}
            >
                {store.isAuth ? (
                    <Flex gap={3}>
                        <div>Admin</div>
                        <button>Exit </button>
                    </Flex> 
                ) : (
                <Link to={AuthRoute}>
                    <svg className='nav-icon' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M313.6 304c-28.7 0-42.5 16-89.6 16c-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4M400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4c14.6 0 38.3 16 89.6 16c51.7 0 74.9-16 89.6-16c47.6 0 86.4 38.8 86.4 86.4zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0S80 64.5 80 144s64.5 144 144 144m0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96s-96-43.1-96-96s43.1-96 96-96"/>
                    </svg>
                </Link>
            )}
                <Link>
                    <svg className='nav-icon' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32"/>
                    </svg>
                </Link>
            </Flex>
        </Flex>
    );
  }
  
  export default observer (NavBar);
  
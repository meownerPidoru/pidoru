import '../App.css'
import { useEffect, useState } from 'react';

const ToTopButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>

        {isScrolled && (
            <>
        <div className='ToTop-btn' onClick={() =>{
            window.scrollTo({top:0, behavior: 'smooth'});
        
        
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="undefined" viewBox="0 0 32 32">
            <path fill="currentColor" d="m16 4.094l-.719.687l-8.5 8.5L8.22 14.72L15 7.938V28h2V7.937l6.781 6.782l1.438-1.438l-8.5-8.5z"/>
            </svg>
        </div>
        </>
    )}
    </>
    );
        }
export default ToTopButton
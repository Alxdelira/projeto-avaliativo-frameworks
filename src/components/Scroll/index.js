import { useEffect, useState } from 'react';
import style from './style.module.css';
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Scroll() {

    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
       
        const handleScroll = () => {
            if (window.scrollY > 500) {
                
                setShowScrollToTop(true);
            } else {
                
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showScrollToTop && (
                <button className={style.scrollToTopButton} onClick={handleScrollToTop}>
                    <FaAngleDoubleUp />
                </button>
            )}
        </>
    );
}

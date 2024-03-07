import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from "@/common/redux/store";
import { setIsDarkMode } from '../redux/themeSlice';
import { useEffect, useRef, useState } from 'react';
import Menu from './Menu';

const Header = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const prevScrollY = useRef<number>(0);
    const [headerTop, setHeaderTop] = useState<number>(0);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const handleDarkModeButtonClicked = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    }

    const handleScroll = () => {
        let tempHeaderTop: number = 0;
        if (window.scrollY > 50) {
            if (window.scrollY > prevScrollY.current) { // down
                const topDiff = window.scrollY - prevScrollY.current;
                tempHeaderTop = headerTop - topDiff;
                if (tempHeaderTop < -120)
                    tempHeaderTop = -120;
            }
            else {
                const topDiff = prevScrollY.current - window.scrollY;
                tempHeaderTop = headerTop + topDiff;
                if (tempHeaderTop > 0)
                    tempHeaderTop = 0;
            }
        }

        setHeaderTop(tempHeaderTop);
        prevScrollY.current = window.scrollY;
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <div className='fixed z-[100] w-full'
                style={{
                    top: `${headerTop}px`
                }}
            >
                <div
                    className="flex justify-between items-center w-full relative px-5 h-[50px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 dark:border-[#0d0d0d]"
                >
                    <button onClick={handleDarkModeButtonClicked}>
                        <svg
                            width="27"
                            height="28"
                            viewBox="0 0 27 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block flex-grow-0 flex-shrink-0 w-[27px] h-[27px]"
                            preserveAspectRatio="none"
                        >
                            <circle cx="13.5" cy="14" r="13.5" fill="white"></circle>
                            <path
                                d="M13.5 17.5454C15.4581 17.5454 17.0455 15.958 17.0455 13.9999C17.0455 12.0418 15.4581 10.4545 13.5 10.4545C11.5419 10.4545 9.95459 12.0418 9.95459 13.9999C9.95459 15.958 11.5419 17.5454 13.5 17.5454Z"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M19.4089 14H19.9998"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M13.5 8.09091V7.5"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M13.5 20.5V19.9091"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M18.2273 18.7273L17.6364 18.1364"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M18.2273 9.27271L17.6364 9.86361"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M8.77283 18.7273L9.36374 18.1364"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M8.77283 9.27271L9.36374 9.86361"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7 14H7.59091"
                                stroke="black"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <svg
                            width="27"
                            height="28"
                            viewBox="0 0 27 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:hidden w-[27px] h-[27px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle cx="13.5" cy="13.5" r="13.5" fill="black"></circle>
                            <path
                                d="M8 12.6711C8 16.1665 10.8336 19 14.3289 19C16.8139 19 18.9644 17.5679 20 15.4839C14.3289 15.4839 11.5161 12.6711 11.5161 7C9.43214 8.03563 8 10.1861 8 12.6711Z"
                                stroke="white"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>

                    <Link to="/">
                        <div className="flex-grow-0 flex-shrink-0 text-[24px] flex flex-row font-['Montserrat'] text-[rgb(33,236,222)] dark:text-white font-bold">
                            <p>Fire</p>
                            &nbsp;
                            <p style={{
                                background: "linear-gradient(101deg, #21ecc7 59.41%, #8672f3 82.47%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: 'transparent',
                            }}>A</p>
                            <p
                                style={{
                                    background: "linear-gradient(180deg, #21ecc7 0%, #8672f3 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >O</p>
                        </div>
                    </Link>

                    {/* dummy tag */}
                    {/* <div className='w-[27px] h-full' /> */}

                    <button onClick={() => { setMenuVisible(!menuVisible) }} className="z-[100]">
                        <div
                            className="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center"
                        >
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${menuVisible
                                    ? "-rotate-45 translate-y-[7px] translate-x-[0.1px] bg-white"
                                    : ""
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transition-opacity duration-300 ${menuVisible ? "opacity-0" : ""
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${menuVisible
                                    ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] bg-white"
                                    : ""
                                    }`}
                            ></div>
                        </div>
                    </button>
                </div>
                <Menu menuVisible={menuVisible} toggleMenuVisible={() => setMenuVisible(!menuVisible)} />
            </div>

            <div className='h-[50px] w-full' />
        </>
    )
}

export default Header
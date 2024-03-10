import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface MenuProps {
    menuVisible: boolean;
    toggleMenuVisible: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenuVisible }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (menuVisible) {
            if (!hasInteracted)
                setHasInteracted(true);

            document.body.style.overflow = 'hidden';

            menuRef.current?.classList.add("animate-fade-in");
            menuRef.current?.classList.remove("pointer-events-none");
            menuRef.current?.classList.remove("animate-fade-out");
        } else {
            document.body.style.overflow = 'auto';

            menuRef.current?.classList.add("animate-fade-out");
            menuRef.current?.classList.add("pointer-events-none");
            menuRef.current?.classList.remove("animate-fade-in");
        }
    }, [menuVisible]);

    return (
        hasInteracted &&
        <div
            ref={menuRef}
            className="menu overflow-hidden animate-fade-in fixed top-0 left-0 bg-[#38D0D1] dark:bg-[#C771FB] w-screen h-screen text-white z-50"
            onClick={toggleMenuVisible}
        >
            <header className="mb-[27px]">
                <div
                    className="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px]"
                >
                    <div className="w-[27px] h-[28px]"></div>

                    <Link to="/">
                        <p className="flex-grow-0 flex-shrink-0 text-3xl text-left font-['PaytoneOne']">
                            <span
                                className="flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white">
                                Fire&nbsp;
                            </span>
                            <span
                                className="flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
                            >
                                AO
                            </span>
                        </p>
                    </Link>
                    <div className="w-[22px] h-[22px]"></div>
                </div>
            </header>

            <div className="flex flex-col items-start justify-start h-full ml-[18px] font-">
                <Link
                    to="/"
                    className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px] active:font-semibold"
                >
                    Home
                </Link>
                <Link
                    to="/archive"
                    className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px] active:font-semibold"
                >
                    Archive
                </Link>
                <Link
                    to="/intro"
                    className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px] active:font-semibold"
                >
                    Intro
                </Link>
                <Link
                    to="/about"
                    className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px] active:font-semibold"
                >
                    About
                </Link>
                <Link
                    to="/about"
                    className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px] active:font-semibold"
                >
                    지원하기!
                </Link>
            </div>
            <Link
                className="absolute bottom-0 w-full text-[13px] font-['PRETENDARD-REGULAR'] mx-[67px]= mb-[23px] text-center text-white"
                to="/admin/sign-in"
            >
                ⓒ Fire AO. 2024 All rights reserved
            </Link>
        </div>
    )
}

export default Menu
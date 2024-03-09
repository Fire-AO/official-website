import { Link } from "react-router-dom";

interface MenuProps {
    menuVisible: boolean;
    toggleMenuVisible: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenuVisible }) => {
    return (
        <>
            {menuVisible &&
                <div
                    className="menu overflow-hidden fixed top-0 left-0 bg-[#684DFF] dark:bg-[#FF4A3F] w-screen h-screen text-white z-50"
                    onClick={toggleMenuVisible}
                >
                    <header className="mb-[27px]">
                        <div
                            className="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px]"
                        >
                            <div className="w-[27px] h-[28px]"></div>

                            <Link to="/">
                                <p className="flex-grow-0 flex-shrink-0 text-3xl text-left">
                                    <span
                                        className="font-['Montserrat'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
                                    >Fire
                                    </span><span
                                        className="font-['Montserrat'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
                                    >AO</span
                                    >
                                </p>
                            </Link>
                            <div className="w-[22px] h-[22px]"></div>
                        </div>
                    </header>

                    <div className="flex flex-col items-start justify-start h-full ml-[18px]">
                        <Link
                            to="/"
                            className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
                        ><p className="active:font-semibold">Home</p>
                        </Link>
                        <Link
                            to="/about"
                            className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
                        ><p className="active:font-semibold">About AO</p>
                        </Link>
                        <Link
                            to="/archive"
                            className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b-0 border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
                        ><p className="active:font-semibold">Archive AO</p>
                        </Link>
                        <Link
                            to="/intro"
                            className="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
                        ><p className="active:font-semibold">AO Intro</p>
                        </Link>
                    </div>
                    <Link
                        className="absolute bottom-0 w-full text-[13px] font-['PRETENDARD-REGULAR'] mx-[67px]= mb-[23px] text-center text-neutral-200"
                        to="/admin/sign-in"
                    >
                        ⓒ Fire AO. 2024 All rights reserved
                    </Link>
                </div>
            }

        </>
    )
}

export default Menu
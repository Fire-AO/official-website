import { Link, ScrollRestoration, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";
import { useEffect, useState } from 'react';
import Header from '@/common/components/Header';

import "@/common/assets/css/history.css"
import ApplyButton from './ApplyButton';

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

const History = () => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const [title, setTitle] = useState<string>("");
    const [explanation, setExplanation] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            setTitle("About");
            setExplanation("대학 생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.");
        }
        else if (location.pathname === "/archive") {
            setTitle("Archive");
            setExplanation("Fire AO 의 활동 모음집입니다.");
        }
        else if (location.pathname === "/intro") {
            setTitle("Introduction");
            setExplanation("Fire AO 와 함께하는 임원진을 소개합니다.");
        }
    }, [location.pathname]);

    const handleNavClass = (props: NavLinkRenderProps) => {
        const { isActive } = props;

        return isActive
            ? "border-b-[2px] border-b-black/50 w-full text-black/80 dark:text-white/90 font-bold pb-1 dark:border-b-white/70"
            : "border-b-[2px] border-b-black/10 dark:border-b-white/20 text-black/50 dark:text-white/60 w-full pb-3 font-bold"
    }

    return (
        <>
            <ScrollRestoration />
            <Header />

            <div className="bg-white dark:bg-black overflow-hidden min-h-[100vh] flex flex-col items-center z-[50] history-bg pt-[30px]">
                <div className="figure1 -z-[1]"></div>
                <div className="figure2 -z-[1]"></div>
                <div className="figure3 -z-[1]"></div>

                <div className=''>
                    <div className="flex-grow flex flex-col justify-center max-w-[1000px] w-[100vw] text-left pl-[19px] 
                        bg-black/5 bg-opacity-100 dark:bg-[#303030] dark:bg-opacity-75 rounded-xl px-[20px] py-[15px]"
                    >
                        <h1 className="text-2xl font-['Pretendard-Bold'] text-[#0d0d0d]/90 dark:text-white/85">
                            {title}
                        </h1>
                        <p className="text-sm font-['PRETENDARD-SEMIBOLD'] text-black/75 dark:text-white/80">
                            {explanation}
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-[1024px] w-full h-full dark:bg-[#303030] dark:bg-opacity-45 bg-opacity-75 bg-white rounded-[30px] mt-5 shadow-xl mb-10"
                >
                    {/* Nav buttons */}

                    <div className="z-50 flex w-full justify-around px-8 text-center gap-4 pt-5 font-['Pretendard-ExtraBold']">
                        <NavLink className={handleNavClass} to="/about">About</NavLink>
                        <NavLink className={handleNavClass} to="/archive">Archive</NavLink>
                        <NavLink className={handleNavClass} to="/intro">Intro</NavLink>
                    </div>

                    <div className='px-5'>
                        <Outlet />

                        <ApplyButton />
                    </div>
                </div>

                {/* Footer */}
                <div className="max-w-[1024px] w-full h-[138px] bg-white dark:bg-black text-left mt-auto">
                    <Link to="/">
                        <p className="text-xl font-['Montserrat'] font-black text-black dark:text-white mt-[25px] ml-[19px] mb-[6px]">
                            Fire AO
                        </p>
                    </Link>
                    <div className="flex items-center ml-[19px] mt-5">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-[9px]"
                            preserveAspectRatio="none"
                        >
                            <circle cx="10" cy="10" r="10"
                                fill={isDarkMode ? "#686868" : "#D1D1D1"}
                            />
                            <path
                                d="M15.3171 12.4098C15.2258 13.1034 14.8852 13.74 14.3589 14.2008C13.8325 14.6616 13.1564 14.915 12.4569 14.9138C8.39275 14.9138 5.08617 11.6072 5.08617 7.54309C5.08492 6.84354 5.33836 6.16745 5.79915 5.6411C6.25995 5.11474 6.89659 4.77412 7.59016 4.68286C7.76555 4.66144 7.94316 4.69732 8.09648 4.78515C8.2498 4.87297 8.37061 5.00802 8.44086 5.17014L9.5219 7.58353V7.58967C9.57569 7.71377 9.5979 7.84927 9.58656 7.98404C9.57521 8.11882 9.53067 8.2487 9.45689 8.36206C9.44768 8.37588 9.43795 8.38868 9.42772 8.40147L8.36204 9.66473C8.74541 10.4438 9.56029 11.2515 10.3496 11.6359L11.5954 10.5758C11.6076 10.5655 11.6205 10.556 11.6338 10.5472C11.7471 10.4716 11.8774 10.4255 12.013 10.413C12.1485 10.4005 12.2851 10.422 12.4103 10.4755L12.4169 10.4786L14.8283 11.5591C14.9907 11.6291 15.1261 11.7498 15.2142 11.9031C15.3023 12.0565 15.3384 12.2342 15.3171 12.4098Z"
                                fill={isDarkMode ? "#F2F2F2" : "#0D0D0D"}
                            />
                        </svg>
                        <p
                            className="text-neutral-900 dark:text-[#e5e5e5] font-['PRETENDARD-REGULAR'] text-[13px]"
                        >
                            010-4939-1971
                        </p>
                    </div>

                    <Link
                        to="/admin"
                        className="cursor-text text-[13px] text-neutral-900 dark:text-[#E5E5E5] font-['PRETENDARD-REGULAR'] mt-[6px] ml-[18px]">
                        ⓒ Fire AO. 2024 All rights reserved
                    </Link>
                </div>
            </div>
        </>
    )
}

export default History
import Header from "@/common/components/Header"
import AOSymbol from "@/common/assets/images/AO-symbol.png";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import Autoplay from 'embla-carousel-autoplay'
import Image1 from "@/pages/history/page/assets/images/1.png";
import Image2 from "@/pages/history/page/assets/images/2.png";
import Image3 from "@/pages/history/page/assets/images/3.png";
import { Link } from "react-router-dom";

const About = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        startIndex: 0
    }, [
        Autoplay({
            delay: 2000
        }),
        WheelGesturesPlugin(),
        // AutoHeight()
    ])

    useEffect(() => {
        if (emblaApi) console.log(emblaApi.slideNodes())
    }, [emblaApi])

    return (
        <>
            <div className="fixed -z-10 bg-white dark:bg-black h-screen w-screen"></div>
            <div
                className=" bg-white dark:bg-black relative overflow-hidden flex flex-col min-h-screen"
            >
                <div className="fixed top-0 left-0 z-[1000]">
                    <Header />
                </div>

                {/* <AboutAoIntro1 /> */}
                <div className="pt-[93.67px] flex-grow mb-[10px]">
                    <div className="flex flex-col justify-center w-auto h-auto ml-[31px]">
                        <p
                            className="flex-grow-0 flex-shrink-0 text-2xl font-['Montserrat'] font-bold text-left text-[#0d0d0d] dark:text-neutral-200"
                        >
                            About AO
                        </p>
                        <p
                            className="w-screen h-12 text-sm font-['PRETENDARD-SEMIBOLD'] text-left text-black dark:text-neutral-200"
                        >
                            대학 생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.
                        </p>
                    </div>                </div>
                <div
                    className="w-screen h-full dark:bg-[#EEEEEE] bg-[#E4E4E4] rounded-tl-lg rounded-tr-lg"
                    style={{
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                    }}
                >
                    <div className="mt-[51px]">
                        {/* <AboutAoIntro2 /> */}
                        <div className="flex flex-col justify-center items-center mb-[43px]">
                            <img
                                src={AOSymbol}
                                alt="AO 심볼로고"
                                className="w-[45px] h-[45px] object-cover mb-[10px]"
                            />
                            <p
                                className="font-['Montserrat'] font-black text-[30px] mb-[10px] text-center text-black dark:text-black"
                            >
                                Fire AO
                            </p>
                            <span
                                className="font-['PRETENDARD-SEMIBOLD'] text-[15px] text-center text-black dark:text-black"
                            >AO는 Alpha의 A, Omega의 O를 합친 것으로<br /></span
                            ><span
                                className="font-['PRETENDARD-SEMIBOLD'] text-[15px] text-center text-black dark:text-black"
                            >처음부터 끝까지 함께하겠다는 의미를 담고 있습니다.</span
                            >
                        </div>
                    </div>
                    <div className="mt-[43px]">
                        {/* <AboutAoIntro3 /> */}
                        <div className="flex flex-col justify-start items-center">
                            <div
                                className="flex-grow-0 flex-shrink-0 w-[324px] h-[188px] rounded-[20px] bg-white/90 px-[22px] py-[38px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p
                                    className="flex-grow-0 flex-shrink-0 text-xs text-center font-['PRETENDARD-REGULAR'] text-[#191919] leading-[2px] flex flex-col justify-center items-center"
                                >
                                    <span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >
                                        1987년부터 2024년까지 이어져 온 전통있는 스터디이며</span
                                    ><br /><span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >아직까지도 80, 90, 00, 10년대 선배님들과 교류를 왕성히</span
                                    ><br /><span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >하고 있습니다. AO에 들어오시면 어렵고 복잡한 학교생활</span
                                    ><br /><span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >깔끔하게 정리해 드리며 불확실성이 큰 취업길까지도</span
                                    ><br /><span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >그 동안 선배님들이 닦아온 길과 AO가 가지고 있는 정보들을</span
                                    ><br /><span
                                        className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#191919]"
                                    >공유하며 편하게 취업할 수 있도록 최선을 다하겠습니다!</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[56px]">
                        {/* <AboutAoArticle1 /> */}

                        <p
                            className="text-lg font-['PRETENDARD-SEMIBOLD'] text-black flex justify-start items-center ml-[31px]"
                        >
                            깃허브로 관리되는 체계적인 스터디!
                        </p>
                        <div
                            className="embla overflow-hidden"
                            ref={emblaRef}
                        >
                            <div className="embla_container flex gap-[5px] whitespace-nowrap ml-[14px]">
                                <div
                                    className="embla_slide flex-grow-0 flex-shrink-0 w-[218.83px] h-[198px] min-w-0"
                                >
                                    <img src={Image1} alt="깃허브1" className="object-cover" />
                                </div>

                                <div
                                    className="embla_slide flex-grow-0 flex-shrink-0 w-[322.58px] h-[198px] min-w-0"
                                >
                                    <img src={Image2} alt="깃허브2" className="object-cover" />
                                </div>

                                <div
                                    className="embla_slide flex-grow-0 flex-shrink-0 w-[262.94px] h-[198px] min-w-0 mr-[14px]"
                                >
                                    <img src={Image3} alt="깃허브3" className="object-cover" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-[51px]">
                        {/* <AboutAoActivity /> */}
                        <div className="flex ml-[31px]">
                            <span className="font-['PRETENDARD-SEMIBOLD'] text-[18px] text-left text-black"
                            >FIRE AO의 주요 활동 내용</span
                            >
                        </div>
                        <div className="flex flex-col ml-[25px] mr-[25px] mt-[25px] gap-[13px]">
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    1. 스터디 활동
                                </p>
                                <p
                                    className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                                >
                                    알고리즘, 책 스터디등
                                </p>
                            </div>
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    2. 세미나
                                </p>
                                <p
                                    className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                                >
                                    개발 관련 주제 선정 후 발표 (2주에 한 번)
                                </p>
                            </div>
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    3. 프로젝트
                                </p>
                                <p
                                    className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                                >
                                    직접 앱이나 웹을 멘토링 받으면서 만들어보기 (2학기)
                                </p>
                            </div>
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    4. 학기 별 개강 파티 및 종강 파티
                                </p>
                            </div>
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    5. MT
                                </p>
                                <p
                                    className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                                >
                                    4월 중순 쯤 AO 전체 MT 진행
                                </p>
                            </div>
                            <div
                                className="w-[100%] h-auto rounded-[20px] bg-white/90 px-[25px] py-[12px]"
                                // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                                style={{
                                    boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                                }}
                            >
                                <p className="font-['PRETENDARD-BOLD'] text-[20px] text-left text-black">
                                    6. 총회
                                </p>
                                <p
                                    className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                                >
                                    11월 말 쯤 AO 선배님들과의 총회 진행
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-[51px]">
                        {/* <ApplyButton /> */}
                        <Link
                            to="/apply"
                            className="flex justify-center items-center w-[337px] mx-auto gap-2.5"
                        >
                            <div
                                className="active:bg-blue-700 active:scale-95 transition duration-100 ease-in-out flex flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-[50px] bg-[#684DFF] dark:bg-[#ff4a3f]"
                            >
                                <p className="flex-grow-0 flex-shrink-0 text-base text-center mx-auto">
                                    <span
                                        className="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-base text-center text-white dark:text-black"
                                    >Fire AO
                                    </span>
                                    <span
                                        className="flex-grow-0 flex-shrink-0 text-base font-['PRETENDARD-BOLD'] text-center text-white dark:text-black"
                                    >지원하러 가기</span
                                    >
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-[65px]"></div>
                </div>
                {/* <NewFooter /> */}

                <div className="w-screen h-[138px] bg-white dark:bg-black text-left">
                    <Link to="/">
                        <p
                            className="text-xl font-['Montserrat'] font-black text-black dark:text-white mt-[25px] ml-[19px] mb-[6px]"
                        >
                            Fire AO
                        </p>
                    </Link>
                    <div className="flex items-center ml-[19px]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-[9px]"
                            preserveAspectRatio="none"
                        >
                            <circle cx="10" cy="10" r="10" fill={darkMode ? "#686868" : "#D1D1D1"}
                            ></circle>
                            <path
                                d="M15.3171 12.4098C15.2258 13.1034 14.8852 13.74 14.3589 14.2008C13.8325 14.6616 13.1564 14.915 12.4569 14.9138C8.39275 14.9138 5.08617 11.6072 5.08617 7.54309C5.08492 6.84354 5.33836 6.16745 5.79915 5.6411C6.25995 5.11474 6.89659 4.77412 7.59016 4.68286C7.76555 4.66144 7.94316 4.69732 8.09648 4.78515C8.2498 4.87297 8.37061 5.00802 8.44086 5.17014L9.5219 7.58353V7.58967C9.57569 7.71377 9.5979 7.84927 9.58656 7.98404C9.57521 8.11882 9.53067 8.2487 9.45689 8.36206C9.44768 8.37588 9.43795 8.38868 9.42772 8.40147L8.36204 9.66473C8.74541 10.4438 9.56029 11.2515 10.3496 11.6359L11.5954 10.5758C11.6076 10.5655 11.6205 10.556 11.6338 10.5472C11.7471 10.4716 11.8774 10.4255 12.013 10.413C12.1485 10.4005 12.2851 10.422 12.4103 10.4755L12.4169 10.4786L14.8283 11.5591C14.9907 11.6291 15.1261 11.7498 15.2142 11.9031C15.3023 12.0565 15.3384 12.2342 15.3171 12.4098Z"
                                fill={darkMode ? "#F2F2F2" : "#0D0D0D"}
                            ></path>
                        </svg>
                        <p
                            className="text-neutral-900 dark:text-[#e5e5e5] font-['PRETENDARD-REGULAR'] text-[13px]"
                        >
                            010-4939-1971
                        </p>
                    </div>

                    <p
                        className="text-[13px] text-neutral-900 dark:text-[#E5E5E5] font-['PRETENDARD-REGULAR'] mt-[6px] ml-[18px]"
                    >
                        ⓒ Fire AO. 2024 All rights reserved
                    </p>
                </div>
            </div>
            <div className="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>
        </>
    )
}

export default About
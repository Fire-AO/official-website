import AOSymbol from "@/common/assets/images/AO-symbol.png";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import Autoplay from 'embla-carousel-autoplay'
import Image1 from "@/pages/about/page/assets/images/1.png";
import Image2 from "@/pages/about/page/assets/images/2.png";
import Image3 from "@/pages/about/page/assets/images/3.png";

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

            <div className="mt-[51px]">
                {/* <AboutAoIntro2 /> */}
                <div className="flex flex-col justify-center items-center mb-[43px]">
                    <img
                        src={AOSymbol}
                        alt="AO 심볼로고"
                        className="w-[45px] h-[45px] object-cover mb-[10px]"
                    />
                    <p
                        className="font-['Montserrat'] font-black text-[30px] mb-[10px] text-center text-black dark:text-white"
                    >
                        Fire AO
                    </p>
                    <span
                        className="font-['PRETENDARD-SEMIBOLD'] text-[15px] text-center text-black dark:text-white"
                    >
                        AO는 Alpha의 A, Omega의 O를 합친 것으로
                    </span>
                    <br />
                    <span className="font-['PRETENDARD-SEMIBOLD'] text-[15px] text-center text-black dark:text-white"
                    >
                        처음부터 끝까지 함께하겠다는 의미를 담고 있습니다.
                    </span>
                </div>
            </div>
            <div className="mt-[43px]">
                {/* <AboutAoIntro3 /> */}
                <div className="flex flex-col justify-start items-center mx-auto w-[324px] rounded-[20px] bg-white/70 px-[22px] py-[38px]"
                    // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                    style={{
                        boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                    }}
                >
                    <p
                        className="text-xs font-['PRETENDARD-REGULAR'] font-semibold text-black/70 flex flex-col justify-center items-center leading-5"
                    >
                        AO는 85, 86학번 주축으로 1986년 부터 2024년까지 이어져 온 전통있는 스터디이며
                        아직까지도 80, 90, 00, 10년대 선배님들과 교류를 왕성히
                        하고 있습니다. AO에 들어오시면 어렵고 복잡한 학교생활
                        깔끔하게 정리해 드리며 불확실성이 큰 취업길까지도 그 동안
                        선배님들이 닦아온 길과 AO가 가지고 있는 정보들을 공유
                        하여 편하게 취업할 수 있도록 최선을 다하겠습니다!
                    </p>
                </div>
            </div>
            <div className="mt-[56px]">
                {/* <AboutAoArticle1 /> */}

                <p
                    className="text-lg font-['PRETENDARD-SEMIBOLD'] text-black dark:text-white flex justify-start items-center ml-[31px]"
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
                    <span className="font-['PRETENDARD-SEMIBOLD'] text-[18px] text-left text-black dark:text-white mt-10">
                        FIRE AO의 주요 활동 내용
                    </span>
                </div>
                <div className="flex flex-col ml-[25px] mr-[25px] mt-[25px] gap-[13px]">
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
                            1. 스터디 활동
                        </p>
                        <p
                            className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                        >
                            알고리즘, 책 스터디등
                        </p>
                    </div>
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
                            2. 세미나
                        </p>
                        <p
                            className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                        >
                            개발 관련 주제 선정 후 발표 (2주에 한 번)
                        </p>
                    </div>
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
                            3. 프로젝트
                        </p>
                        <p
                            className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                        >
                            직접 앱이나 웹을 멘토링 받으면서 만들어보기 (2학기)
                        </p>
                    </div>
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
                            4. 학기 별 개강 파티 및 종강 파티
                        </p>
                    </div>
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
                            5. MT
                        </p>
                        <p
                            className="ml-[20px] font-['PRETENDARD-LIGHT'] text-[14px] text-left text-black"
                        >
                            4월 중순 쯤 AO 전체 MT 진행
                        </p>
                    </div>
                    <div
                        className="w-[100%] h-auto rounded-[20px] bg-white/70 px-[25px] py-[12px]"
                        // style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1);"
                        style={{
                            boxShadow: "0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="font-['PRETENDARD-SEMIBOLD'] text-[20px] text-left text-black">
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

            <div className="mt-[65px]"></div>
        </>
    )
}

export default About
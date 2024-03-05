import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react';


import Mt1Image from "@/common/assets/images/MT1.png";
import Mt2Image from "@/common/assets/images/MT2.png";
import Study1Image from "@/common/assets/images/서버파트1.png";
import Study2Image from "@/common/assets/images/서버파트2.png";
import Dinner1Image from "@/common/assets/images/전체회식1.png";
import Dinner2Image from "@/common/assets/images/전체회식2.png";
import Meeting1Image from "@/common/assets/images/총회1.png";
import Meeting2Image from "@/common/assets/images/총회2.png";
import Meeting3Image from "@/common/assets/images/총회3.png";
import Slide from './components/Caption';
import Tag from './components/Tag';

const index = () => {
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
            <main className="mb-[43px] flex-grow pt-[93.67px]">

                <div
                    className="embla overflow-hidden"
                    ref={emblaRef}
                >
                    <div className="embla__container flex whitespace-nowrap gap-[10px]">
                        <Slide
                            title="전체 MT"
                            explanation="신나게 놀고 먹는 전체 MT"
                            image={Mt1Image}
                        />
                        <Slide
                            title="전체 MT"
                            explanation="신나게 놀고 먹는 전체 MT"
                            image={Mt2Image}
                        />
                        <Slide
                            title="전체 회식"
                            explanation="즐거운 FIRE AO 전체 회식"
                            image={Dinner1Image}
                        />
                        <Slide
                            title="전체 회식"
                            explanation="즐거운 FIRE AO 전체 회식"
                            image={Dinner2Image}
                        />
                        <Slide
                            title="서버파트 스터디"
                            explanation="함께, 또 따로 열심히!"
                            image={Study1Image}
                        />
                        <Slide
                            title="서버파트 스터디"
                            explanation="함께, 또 따로 열심히!"
                            image={Study2Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting1Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting2Image}
                        />
                        <Slide
                            title="AO 총회"
                            explanation="선배들과 함께하는 AO 총회"
                            image={Meeting3Image}
                        />
                    </div>
                </div>


                <div className="flex justify-end items-center gap-[10px] flex-wrap">

                    <Tag tag="#AO 전체 회식" />
                    <Tag tag="#전체 MT" />
                    <Tag tag="#서버파트 스터디" />
                    <Tag tag={<>
                        <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block w-4 h-[18px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M5.00005 16.0001C5.00005 18.4149 6.79091 19.0001 9.00005 19.0001C12.7587 19.0001 14 16.5001 11.5 11.5001C8.00005 16.0001 7.50005 9.00006 8.00005 7.00006C6.50005 10.0001 5.00005 12.8178 5.00005 16.0001Z"
                                stroke="#D9D9D9"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M9 19C14.0495 19 17 16.0956 17 11.125C17 6.15444 9 1 9 1C9 1 1 6.15444 1 11.125C1 16.0956 3.95054 19 9 19Z"
                                stroke="#D9D9D9"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                        <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:hidden w-4 h-[18px]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M5.00005 16.0001C5.00005 18.4149 6.79091 19.0001 9.00005 19.0001C12.7587 19.0001 14 16.5001 11.5 11.5001C8.00005 16.0001 7.50005 9.00006 8.00005 7.00006C6.50005 10.0001 5.00005 12.8178 5.00005 16.0001Z"
                                stroke="#2C2C2C"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M9 19C14.0495 19 17 16.0956 17 11.125C17 6.15444 9 1 9 1C9 1 1 6.15444 1 11.125C1 16.0956 3.95054 19 9 19Z"
                                stroke="#2C2C2C"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg></>
                    } />
                    <Tag tag="#AO 총회" />
                    <Tag tag="Alpha부터 Omega까지!" />

                </div>
            </main>
        </>
    )
}

export default index
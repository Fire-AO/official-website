import UpperSide from "@/pages/home/page/assets/images/UpperSide.png"
import UpperSideDark from "@/pages/home/page/assets/images/UpperSide-dark.png"
import { RootState } from "@/common/redux/store";
import { useSelector } from "react-redux";
import React from "react";

interface CardNewsProps {
    name: string;
    description: React.ReactNode;
    image: string;
}

const CardNews: React.FC<CardNewsProps> = React.memo(({ name, description, image }) => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <div
            className="w-[333px] h-[334px] text-center pt-[24px] flex flex-col items-center
            border-2 rounded-[34px] border-[#8473f2] dark:border-none"
            style={{
                backgroundImage: `url(${isDarkMode ? UpperSideDark : UpperSide})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <p className="text-white mt-[8px] font-['Pretendard-ExtraBold'] text-[20px] font-[700]">
                {name}
            </p>
            <img src={image} alt={`${name} thumbnail`} className="w-[119px] mb-[19px]" />
            <p
                className="dark:font-normal dark:text-white font-['PRETENDARD-REGULAR'] text-black/80
                mt-[8px] text-[11.5px] w-[292px] leading-[1rem]"
            >
                {description}
            </p>
        </div>
    );
});

export default CardNews;
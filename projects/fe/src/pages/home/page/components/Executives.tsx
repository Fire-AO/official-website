import "@/pages/home/page/assets/css/Executives.css";
import { useState, useEffect } from "react";
import CardNews from "@/pages/home/page/components/CardNews";

import { Executive } from "@/pages/home/page/types/executive";

import ApplyButton from "@/common/components/ApplyButton";
import { executives } from "@/pages/home/page/utils/executives";
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";

function Executives() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    setSelectedExecutive(executives[0]);
  }, []);

  return (
    <>
      <div className="executive-container dark:bg-black clip">
        <div className="exeEng">
          <p>Fire AO</p>
        </div>
        <div className="exeKor">
          <p>Fire AO와 함께하는 임원진</p>
        </div>
        <div className="scroll-container">
          {executives.map((executive) => (
            <div
              key={executive.id}
              className={`executive cursor-pointer ${selectedExecutive?.id  === executive.id - 1 && "animate-bounce"}`}
              onClick={() => setSelectedExecutive(executive)}
            >
              <img
                src={isDarkMode ? executive.avatarDark : executive.avatar}
                alt={executive.name}
                className="people"
              />
              <p className="executive-name text-black/70 dark:text-white font-['PRETENDARD-SEMIBOLD']">{executive.name}</p>
            </div>
          ))}
        </div>
        {selectedExecutive && (
          <CardNews
            name={selectedExecutive.name}
            description={selectedExecutive.description}
            image={isDarkMode ? selectedExecutive.biggerAvatarDark : selectedExecutive.biggerAvatar}
          />
        )}
      </div>
      <ApplyButton />
    </>
  );
}

export default Executives;

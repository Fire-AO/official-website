import AoJc from "@/common/assets/images/new종찬형님.png";
import Aosj from "@/common/assets/images/ao 세진형님.jpg";
import Aojh from "@/common/assets/images/ao 제희형님.jpg";
import Aoce from "@/common/assets/images/ao신초은.jpg";
import Aoyn from "@/common/assets/images/ao최윤아.jpg";

import JcIcon from "@/common/assets/images/ao김종찬아바타.jpg";
import SjIcon from "@/common/assets/images/ao박세진아바타.jpg";
import JhIcon from "@/common/assets/images/ao천제희아바타.jpg";
import CeIcon from "@/common/assets/images/ao신초은아바타.jpg";
import YnIcon from "@/common/assets/images/ao최윤아아바타.jpg";

import Aokh from "@/common/assets/images/박기현사진.jpg";
import Aoys from "@/common/assets/images/유용석사진.jpg";
import Aojm from "@/common/assets/images/송정민사진.jpg";
import Aoij from "@/common/assets/images/정익재사진.jpg";

import { useState } from "react";

const index = () => {
  const [avatar, setAvatar] = useState<string>(AoJc)
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const showChange = () => {
    console.log("Clicked");
  }

  return (
    <>
      <div className="mt-[20px] mb-[70px]">

        <div className="w-[131px] h-[129px] absolute top-[190px] mr-[180px]">
          <svg
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[86px] h-[86px] absolute left-[45px] top-0"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_5742_1324)">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="1.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="10.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="19.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="28.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="37.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="46.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="55.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="64.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="73.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
              <circle cx="82.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
            </g>
            <defs>
              <clipPath id="clip0_5742_1324"
              ><rect width="86" height="86" fill="white"></rect></clipPath
              >
            </defs>
          </svg>
          <button onClick={showChange}>
            <img
              src={avatar}
              alt="메인 사진"
              className={`shadow-xl w-[99px] h-[99px] absolute left-[2px] top-[27px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover animate-bounce
                {isFlipped ? 'flipped' : ''}`}
            />
          </button>
        </div>

        {/* {#if $checkNum == 1} */}
        <div
          className="flex flex-col w-auto justify-center items-center gap-[18px] ml-[50px] mt-[40px]"
        >
          <div
            className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
          >
            <p
              className="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
            >
              배종찬
            </p>
            <p
              className="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
            >
              회장님
            </p>
            <p
              className="mt-[6px] flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
            >
              010-4939-1971
            </p>
            <a
              href="https://www.instagram.com/bnadgnohz"
              className=" flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
            >
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.00005 8.72222C7.22733 8.72222 8.22228 7.72727 8.22228 6.49999C8.22228 5.27269 7.22733 4.27777 6.00005 4.27777C4.77275 4.27777 3.77783 5.27269 3.77783 6.49999C3.77783 7.72727 4.77275 8.72222 6.00005 8.72222Z"
                  stroke="#747474"
                  stroke-width="1.16632"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1 8.72222V4.27778C1 2.74366 2.24366 1.5 3.77778 1.5H8.22222C9.75633 1.5 11 2.74366 11 4.27778V8.72222C11 10.2563 9.75633 11.5 8.22222 11.5H3.77778C2.24366 11.5 1 10.2563 1 8.72222Z"
                  stroke="#747474"
                  stroke-width="1.16632"
                ></path>
                <path
                  d="M9.0556 3.44999L9.06116 3.44382"
                  stroke="#747474"
                  stroke-width="1.16632"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="ml-[2.5px]">bnadgnohz</span>
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[25px] py-[28px] rounded-[20px] bg-white mt-[30px]"
          // style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
          style={{ boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)" }}
        >
          <p
            className="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
          >
            <span>“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span>
            <span>정승처럼 공부하고 개처럼 마시는 스터디 AO! </span>
            <span>군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span>
            <span>MT면 MT, 스터디면 스터디, 회식이면 회식! 뭐 하나 빠지지 않는</span
            >
            <span>저희 AO 스터디에서 바라왔던 대학생활 보내시면 좋겠습니다 🔥🔥”</span>
          </p>
        </div>




      </div>

      <div className="flex mt-[23px]">
        <p
          className="w-auto text-base font-['PRETENDARD-SEMIBOLD'] ml-[31px] text-left text-black dark:text-white"
        >
          AO Team Members
        </p>
      </div>

      <div className="flex justify-center items-center mt-[30px] gap-[30px]">
        <div
          className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
        >

          <div className="w-[79px] h-[75px] mb-[10px] flex justify-center">
            {/* <button onClick={SjchangeImage}> */}
            <button >
              <img
                src={Aosj}
                alt="세진형님 사진"
                className={`w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover
                  {isclick ? 'animate-bounce' : ' '}`}
                // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
                style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
              />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-px">
            <p
              className="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
            >
              박세진
            </p>
            <p
              className="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#ccc]"
            >
              코딩얼굴마담
            </p>
          </div>
        </div>

        <div className="flex-col mt-[71px]">
          <p
            className="w-auto text-base font-['PRETENDARD-SEMIBOLD'] ml-[31px] text-left text-black dark:text-white"
          >
            Developers of AO WEB
          </p>
          <p
            className="w-auto text-[14px] font-['PRETENDARD-BOLD'] ml-[31px] text-left  text-[#848484] dark:text-[#CCC]"
          >
            Team. 프링글스 양파맛 좋아합니다
          </p>
        </div>

        <div className="flex justify-center items-center mt-[15px] gap-[12px]">
          <div>
            <img
              src={Aokh}
              alt="박기현사진"
              className="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
              // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
              style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
            />
          </div>
          <div>
            <img
              src={Aoys}
              alt="유용석사진"
              className="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
              // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
              style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
            />
          </div>
          <div>
            <img
              src={Aojm}
              alt="송정민사진"
              className="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
              // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
              style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
            />
          </div>
          <div>
            <img
              src={Aoij}
              alt="정익재사진"
              className="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
              // style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
              style={{ boxShadow: "0px 0px 15px 0 rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>

        <div className="px-[15%] justify-center flex">
          <div
            className="flex flex-col justify-center items-center w-64 h-[106px] relative mt-[47px] gap-[5px]"
          >
            <div className="flex justify-left items-center w-64 h-[25px]">
              <p
                className="w-[135px] text-[13px] mr-[57px] justify-left font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
              >
                Mentor &#x26; infra.
              </p>
              <p
                className="w-[135px] h-[22px] flex text-[10px] justify-left items-center font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
              >
                천제희 Cheon Jehee
              </p>
            </div>

            <div className="w-64 h-[35px] flex justify-left items-center">
              <p
                className="w-[135px] h-[22px] text-[13px] flex justify-left font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
              >
                Frontend.
              </p>
              <p
                className="w-[135px] ml-[57px] h-[22px] flex flex-col justify-start text-[10px] font-['PRETENDARD-LIGHT'] text-left text-black"
              >
                <span
                  className="w-auto text-[10px] mt-[1px] flex justify-left font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
                >박기현 Park Kihyun</span
                ><span
                  className="w-auto text-[10px] mt-[1px] flex justify-left font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
                >유용석 Yoo Yongseok</span
                >
              </p>
            </div>

            <div className="flex w-64 h-9 justify-left items-center">
              <p
                className="w-[135px] h-[22px] text-[13px] font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
              >
                Backend.
              </p>
              <p
                className="flex flex-col ml-[57px] justify-start w-[135px] h-[22px] text-[10px] font-['PRETENDARD-LIGHT'] text-left text-black"
              >
                <span
                  className="w-auto h-[22px] text-[10px] mt-[1px] font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
                >
                  송정민 Song Jeongmin
                </span>
                <span
                  className="w-auto h-[22px] text-[10px] mt-[1px] font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
                >
                  정익재 Jeong Ikjae
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default index
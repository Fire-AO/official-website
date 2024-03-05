<script>
  import { onMount } from "svelte";
  import JcIcon from "../images/ao김종찬아바타.jpg";
  import Photo from "../images/photo.png";
  import AoJc from "../images/new종찬형님.png";
  import Aosj from "../images/ao 세진형님.jpg";
  import Aojh from "../images/ao 제희형님.jpg";
  import Aoce from "../images/ao신초은.jpg";
  import Aoyn from "../images/ao최윤아.jpg";
  import SjIcon from "../images/ao박세진아바타.jpg";
  import JhIcon from "../images/ao천제희아바타.jpg";
  import CeIcon from "../images/ao신초은아바타.jpg";
  import YnIcon from "../images/ao최윤아아바타.jpg";
  import Aokh from "../images/박기현사진.jpg";
  import Aoys from "../images/유용석사진.jpg";
  import Aojm from "../images/송정민사진.jpg";
  import Aoij from "../images/정익재사진.jpg";
  import { darkMode } from "../store";
  //import { checkNum , changeValue, changeValue2, changeValue3, changeValue4, changeValue5} from "../store";
  import { checkNum } from "../store";

  import "../App.css";

  let isFlipped = false;
  let showImg = AoJc;
  let isclick = true;

  function showChange() {
    isFlipped = !isFlipped;
    if (showImg == AoJc) {
      showImg = JcIcon;
    } else if (showImg == JcIcon) {
      showImg = AoJc;
    } else if (showImg == Aosj) {
      showImg = SjIcon;
    } else if (showImg == SjIcon) {
      showImg = Aosj;
    } else if (showImg == Aojh) {
      showImg = JhIcon;
    } else if (showImg == JhIcon) {
      showImg = Aojh;
    } else if (showImg == Aoce) {
      showImg = CeIcon;
    } else if (showImg == CeIcon) {
      showImg = Aoce;
    } else if (showImg == Aoyn) {
      showImg = YnIcon;
    } else if (showImg == YnIcon) {
      showImg = Aoyn;
    }

    //showImg = isFlipped ? IconPhoto : ImgChange();
  }

  function JcChangeImg() {
    showImg = AoJc;
    checkNum.set(1);
    isFlipped = false;
  }

  function SjchangeImage() {
    showImg = Aosj;
    checkNum.set(2);
    isclick = false;
    isFlipped = false;
  }

  function JhchangeImage() {
    showImg = Aojh;
    checkNum.set(3);
    isFlipped = false;
  }

  function CechangeImage() {
    showImg = Aoce;
    checkNum.set(4);
    isFlipped = false;
  }

  function YnchangeImage() {
    showImg = Aoyn;
    checkNum.set(5);
    isFlipped = false;
  }

  function reset() {
    JcChangeImg();
  }
  onMount(() => {
    // 페이지가 로드될 때 애니메이션 CSS를 추가
    reset();
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotate {
        0% { transform:  rotateY(0deg); }
        100% { transform: rotateY(360deg);}
      }
      .flipped {
        animation: rotate 0.4s;
      }
      @keyframes bounce {
        0%, 100% {
          transform: translateY(-5%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        30% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        
    `;
    document.head.appendChild(style);

    return () => {
      // 컴포넌트가 언마운트 될 때 애니메이션 CSS를 제거
      document.head.removeChild(style);
    };
  });
</script>

<div
  class="flex flex-col justify-center items-center h-[338px] gap-2.5 w-screen bg-[#E3E3E3] dark:bg-[#EEE] rounded-tl-lg rounded-tr-lg"
  style="border-top-left-radius: 30px; border-top-right-radius: 30px;"
>
  <div class="w-[131px] h-[129px] absolute top-[190px] mr-[180px]">
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[86px] h-[86px] absolute left-[45px] top-0"
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
    <button on:click={showChange}>
      <img
        src={showImg}
        alt="메인 사진"
        class="shadow-xl w-[99px] h-[99px] absolute left-[2px] top-[27px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover animate-bounce
        {isFlipped ? 'flipped' : ''}"
        class:selected={isFlipped}
      />
    </button>
  </div>

  {#if $checkNum == 1}
    <div
      class="flex flex-col w-auto justify-center items-center gap-[18px] ml-[50px] mt-[40px]"
    >
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
        >
          배종찬
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          회장님
        </p>
        <p
          class="mt-[6px] flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          010-4939-1971
        </p>
        <a
          href="https://www.instagram.com/bnadgnohz"
          class=" flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
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
          <span class="ml-[2.5px]">bnadgnohz</span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[25px] py-[28px] rounded-[20px] bg-white mt-[30px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p
        class="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
      >
        <span>“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span>
        <span>정승처럼 공부하고 개처럼 마시는 스터디 AO! </span>
        <span>군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span>
        <span>MT면 MT, 스터디면 스터디, 회식이면 회식! 뭐 하나 빠지지 않는</span
        >
        <span
          >저희 AO 스터디에서 바라왔던 대학생활 보내시면 좋겠습니다 🔥🔥”
        </span>
      </p>
    </div>
  {:else if $checkNum == 2}
    <div
      class="flex flex-col justify-center w-auto items-center gap-[18px] ml-[50px] mt-[40px]"
    >
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
        >
          박세진
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          코딩얼굴마담
        </p>
        <a
          href="https://www.instagram.com/re_alworld"
          class="mt-[6px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
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
          <span class="ml-[2.5px]">re_alworld</span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[24px] py-[24px] rounded-[20px] bg-white mt-[35px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p
        class="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
      >
        <span>“안녕하세요~~ 19학번 석유 박세진입니다!</span>
        <span>A(lcohol)O(nly)는 여러분 인생에서 처음일 수 있는</span>
        <span> 신입생 생활을 책임져 드립니다!!</span>
        <span>또한 컴공 관련 정보도 많이 얻을 수 있어요. </span>
        <span>안 올 이유가 없다고 볼 수 있죠. AO에서 같이 성장해 보아요!"</span>
      </p>
    </div>
  {:else if $checkNum == 3}
    <div
      class="flex flex-col justify-center w-auto items-center gap-[18px] ml-[50px] mt-[10px] mb-[20px]"
    >
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
        >
          천제희
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          AO GPT
        </p>
        <a
          href="https://www.instagram.com/jeheecheon"
          class="mt-[6px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
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
          <span class="ml-[2.5px]">jeheecheon</span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[25px] py-[35px] rounded-[20px] bg-white top-[25px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p
        class="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
      >
        <span>“Fire🔥 AO 18학번 천제희입니다. </span>
        <span>AO만큼 활발한 스터디! 여기 말고 절대 없어요</span>
        <span>같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요" </span>
      </p>
    </div>
  {:else if $checkNum == 4}
    <div
      class="flex flex-col justify-center w-auto items-center gap-[18px] ml-[50px] mt-[10px] mb-[20px]"
    >
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
        >
          신초은
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          코드킹메이커
        </p>
        <a
          href="https://www.instagram.com/ch01_63"
          class="mt-[6px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
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
          <span class="ml-[2.5px]">cho01_63</span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[23px] py-[35px] rounded-[20px] bg-white top-[25px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p
        class="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
      >
        <span>“안녕하세요 FIRE AO 20학번 신초은입니다☺ </span>
        <span
          >족보, 인맥, 정보, 각종 스터디 등 생각보다 얻어갈 수 있는게 정말
          많아요!</span
        >
        <span>밥 잘 사주는 스터디 AO에서 슬기로운 대학생활 해보아요" </span>
      </p>
    </div>
  {:else if $checkNum == 5}
    <div
      class="flex flex-col justify-center w-auto items-center gap-[18px] ml-[50px] mt-[10px] mb-[20px]"
    >
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[13px] font-['PRETENDARD-BOLD'] text-left text-black"
        >
          최윤아
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          고민상담사
        </p>
        <a
          href="https://www.instagram.com/yuna_co_2"
          class="mt-[6px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-auto text-[10px] font-['PRETENDARD-MEDIUM'] text-left text-[#747474]"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5"
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
          <span class="ml-[2.5px]">yuna_co_2</span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[87%] relative overflow-hidden px-[13px] py-[28px] rounded-[20px] bg-white top-[25px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p
        class="font-['PRETENDARD-MEDIUM'] gap-[3px] flex flex-col flex-grow-0 flex-shrink-0 text-[10px] text-center text-black"
      >
        <span>“안녕하세요 스터디 AO 21학번 최윤아입니다!! </span>
        <span>학과 생활 하면서 필요한 정보들과 족보, </span>
        <span>인맥 또한 행복하고 즐겁게 얻어갈 수 있습니다🫶</span>
        <span
          >좋은 사람들을 많이 사귀고, 성적을 잘 받고 싶은 학우들이라면 함께
          해요!🍀"
        </span>
      </p>
    </div>
  {/if}
</div>

<div class="flex mt-[23px]">
  <p
    class="w-auto text-base font-['PRETENDARD-SEMIBOLD'] ml-[31px] text-left text-black dark:text-white"
  >
    AO Team Members
  </p>
</div>

<div class="flex justify-center items-center mt-[30px] gap-[30px]">
  <div
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
  >
    <div class="w-[79px] h-[75px] mb-[10px] flex justify-center">
      <button on:click={SjchangeImage}>
        <img
          src={Aosj}
          alt="세진형님 사진"
          class="w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover
           {isclick ? 'animate-bounce' : ' '} "
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center gap-px">
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
      >
        박세진
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#ccc]"
      >
        코딩얼굴마담
      </p>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
  >
    <div class="w-[79px] h-[75px] mb-[10px] flex justify-center">
      <button on:click={JhchangeImage}>
        <img
          src={Aojh}
          alt="제희형님 사진"
          class="w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center gap-px">
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
      >
        천제희
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#ccc]"
      >
        AO GPT
      </p>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
  >
    <div class="w-[79px] h-[75px] mb-[10px] flex justify-center">
      <button on:click={JcChangeImg}>
        <img
          src={AoJc}
          alt="종찬형님 사진"
          class="w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center gap-px">
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
      >
        배종찬
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#ccc]"
      >
        회장님
      </p>
    </div>
  </div>
</div>

<div class="flex justify-center items-center mt-[30px] gap-[30px]">
  <div
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
  >
    <div class="w-[79px] h-[75px] mb-[10px] flex justify-center">
      <button on:click={CechangeImage}>
        <img
          src={Aoce}
          alt="신초은 사진"
          class="w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center gap-px">
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
      >
        신초은
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#CCC]"
      >
        코드킹메이커
      </p>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0"
  >
    <div class="w-[79px] h-[75px] mb-[10px] flex justify-center">
      <button on:click={YnchangeImage}>
        <img
          src={Aoyn}
          alt="최윤아 사진"
          class="w-[71px] h-[71px] border-solid border-2 border-[#EEE] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
    </div>
    <div class="flex flex-col justify-center items-center gap-px">
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-xs font-['PRETENDARD-BOLD'] text-center text-black dark:text-neutral-50"
      >
        최윤아
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-[71px] text-[9px] font-['PRETENDARD-MEDIUM'] text-center text-[#8a8a8a] dark:text-[#CCC]"
      >
        고민상담사
      </p>
    </div>
  </div>
</div>

<div class="flex-col mt-[71px]">
  <p
    class="w-auto text-base font-['PRETENDARD-SEMIBOLD'] ml-[31px] text-left text-black dark:text-white"
  >
    Developers of AO WEB
  </p>
  <p
    class="w-auto text-[14px] font-['PRETENDARD-BOLD'] ml-[31px] text-left  text-[#848484] dark:text-[#CCC]"
  >
    Team. 프링글스 양파맛 좋아합니다 
  </p>
</div>
<div class="flex justify-center items-center mt-[15px] gap-[12px]">
  <!-- 만든사람1 -->
  <div>
    <img
      src={Aokh}
      alt="박기현사진"
      class="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
      style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
    />
  </div>
  <div>
    <img
      src={Aoys}
      alt="유용석사진"
      class="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
      style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
    />
  </div>
  <div>
    <img
      src={Aojm}
      alt="송정민사진"
      class="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
      style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
    />
  </div>
  <div>
    <img
      src={Aoij}
      alt="정익재사진"
      class="w-[71px] h-[71px] rounded-[100px] object-cover border-solid border-2 border-[#EEE]"
      style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
    />
  </div>
</div>

<div class="px-[15%] justify-center flex">
  <div
    class="flex flex-col justify-center items-center w-64 h-[106px] relative mt-[47px] gap-[5px]"
  >
    <div class="flex justify-left items-center w-64 h-[25px]">
      <p
        class="w-[135px] text-[13px] mr-[57px] justify-left font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
      >
        Mentor &#x26; infra.
      </p>
      <p
        class="w-[135px] h-[22px] flex text-[10px] justify-left items-center font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
      >
        천제희 Cheon Jehee
      </p>
    </div>

    <div class="w-64 h-[35px] flex justify-left items-center">
      <p
        class="w-[135px] h-[22px] text-[13px] flex justify-left font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
      >
        Frontend.
      </p>
      <p
        class="w-[135px] ml-[57px] h-[22px] flex flex-col justify-start text-[10px] font-['PRETENDARD-LIGHT'] text-left text-black"
      >
        <span
          class="w-auto text-[10px] mt-[1px] flex justify-left font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
          >박기현 Park Kihyun</span
        ><span
          class="w-auto text-[10px] mt-[1px] flex justify-left font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
          >유용석 Yoo Yongseok</span
        >
      </p>
    </div>

    <div class="flex w-64 h-9 justify-left items-center">
      <p
        class="w-[135px] h-[22px] text-[13px] font-['PRETENDARD-MEDIUM'] text-left text-black dark:text-neutral-50"
      >
        Backend.
      </p>
      <p
        class="flex flex-col ml-[57px] justify-start w-[135px] h-[22px] text-[10px] font-['PRETENDARD-LIGHT'] text-left text-black"
      >
        <span
          class="w-auto h-[22px] text-[10px] mt-[1px] font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
          >송정민 Song Jeongmin</span
        ><span
          class="w-auto h-[22px] text-[10px] mt-[1px] font-['PRETENDARD-LIGHT'] text-left text-black dark:text-neutral-200"
          >정익재 Jeong Ikjae</span
        >
      </p>
    </div>
  </div>
</div>

<script>
  import { Link } from "svelte-routing";
  import { darkMode } from "../store";
  import Aosimbol from "../images/AOsimbol.png";

  import ScrollOut from "scroll-out";
  import { onMount } from "svelte";
  import "../App.css";
  import TypeIt from "typeit";

  let ischeck = false;
  let isFinish = false;
  let isZoom = false;
  let isVision = false;
  let isUp = false;
  let isSimbolUp = false;
  let isTextTy = false;
  let isActivity = false;
  let isActivity2 = false;
  let isActivity3 = false;
  let isActivity4 = false;
  let isActivity5 = false;
  let isActivity6 = false;
  let isActivity7 = false;
  let isViewBtn = false;
  let observer;

  function setupObserver() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 요소가 화면에 나타나면 TypeIt 효과 적용
        if (entry.isIntersecting) {
          if (entry.target.id === "up1" || entry.target.id === "up2") {
            isUp = true;
            observer.unobserve(entry.target);
          }
          if (entry.target.id === "get1") {
            isTextTy = true;
            new TypeIt("#get1", {
              speed: 40,
              cursor: false,
            })
              .exec(() => {
                isVision = true;
                new TypeIt("#get2", {
                  speed: 40,
                  cursor: false,
                }).go();
              })
              .go();
          }
          if (entry.target.id === "up3") {
            setTimeout(() => {
              isSimbolUp = true;
            }, 3000);
            setTimeout(() => {
              isActivity = true;
            }, 4000);
            setTimeout(() => {
              isActivity2 = true;
            }, 4500);
            setTimeout(() => {
              isActivity3 = true;
            }, 5000);
            setTimeout(() => {
              isActivity4 = true;
            }, 5500);
            setTimeout(() => {
              isActivity5 = true;
            }, 6000);
            setTimeout(() => {
              isActivity6 = true;
            }, 6500);
            setTimeout(() => {
              isActivity7 = true;
            }, 7000);
            setTimeout(() => {
              isViewBtn = true;
            }, 7500);
          }
          observer.unobserve(entry.target);
        }
      });
    });

    let getid = document.getElementById("get1");
    let getid2 = document.getElementById("get2");
    let getup = document.getElementById("up1");
    let getup2 = document.getElementById("up2");
    let getup3 = document.getElementById("up3");
    observer.observe(getid);
    observer.observe(getid2);
    observer.observe(getup);
    observer.observe(getup2);
    observer.observe(getup3);
  }

  // 페이지가 언로드 될 때 실행되는 함수
  function removeObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  // 페이지 로딩 시 IntersectionObserver 설정
  onMount(() => {
    setupObserver();
  });

  // 페이지가 이동되기 전에 IntersectionObserver 해제
  window.addEventListener("beforeunload", removeObserver);

  // 스크롤 이벤트에 반응하여 요소 이동
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY; // 스크롤 위치
    var currentPos;
    var stopPositions = [
      840, 840, 840, 720, 720, 720, 900, 900, 900, 900, 780, 780, 780, 660, 660,
      660, 960, 960, 960,
    ];
    var stopPositionsX = [
      -35, -35, -35, -10, -10, -10, 15, 15, 15, 15, 30, 30, 30, 10, 10, 10, 10,
      10, 10,
    ];
    var startPositionsX = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    const content = document.querySelector(".content"); // 콘텐츠 부분 선택
    const zoomTarget = document.getElementById("zoomTarget");
    const zoomCircleTarget = document.getElementById("zoomCircleTarget");
    const changeBack = document.getElementById("change");

    // 각 글자에 대한 참조를 가져옵니다.
    var textElements = [
      document.getElementById("scrollingTextF"),
      document.getElementById("scrollingTextF2"),
      document.getElementById("scrollingTextF3"),

      document.getElementById("scrollingTextI"),
      document.getElementById("scrollingTextI2"),
      document.getElementById("scrollingTextI3"),

      document.getElementById("scrollingTextR"),
      document.getElementById("scrollingTextR2"),
      document.getElementById("scrollingTextR3"),
      document.getElementById("scrollingTextR4"),

      document.getElementById("scrollingTextE"),
      document.getElementById("scrollingTextE2"),
      document.getElementById("scrollingTextE3"),

      document.getElementById("scrollingTextA"),
      document.getElementById("scrollingTextA2"),
      document.getElementById("scrollingTextA3"),

      document.getElementById("scrollingTextO"),
      document.getElementById("scrollingTextO2"),
      document.getElementById("scrollingTextO3"),
    ];

    if (scrollValue >= 845) {
      isFinish = true;
    } else {
      isFinish = false;
    }

    currentPos = scrollValue * 1.2;
    textElements.forEach(function (textElement, index) {
      if (textElement) {
        // null 체크
        if (currentPos < stopPositions[index]) {
          textElement.style.top = scrollValue + "px";
          ischeck = false;
        } else {
          textElement.style.top = startPositionsX[index] + "px";
          ischeck = true;
        }
      }
    });

    // const startZoomScrollPosition = 900; // 확대가 시작되는 스크롤 위치
    // const maxScale = 1000; // 최대 확대 배율

    // let scale = 1;

    // if (scrollY > startZoomScrollPosition) {
    //   if (scrollY > startZoomScrollPosition + 45) {
    //     isZoom = true;
    //   }
    //   scale += (scrollY - startZoomScrollPosition) / 100; // 스크롤에 따라 scale이 증가
    //   scale = Math.min(scale, maxScale); // scale 값을 maxScale로 제한
    //   if(scrollY > startZoomScrollPosition + 50){
    //   zoomCircleTarget.style.transform = 'scale(94)';

    //   }
    // } else {
    //   isZoom = false;
    //   if (zoomCircleTarget != null)
    //     zoomCircleTarget.style.transform = "scale(0)";
    //   if (zoomTarget != null) zoomTarget.style.transform = "scale(0)";
    // }

    // if (zoomTarget != null) zoomTarget.style.transform = `scale(${scale})`;

    let isDarkMode = false;
    if (changeBack != null) {
      darkMode.subscribe((value) => {
        isDarkMode = value;
        if (isDarkMode === true) {
          if (scrollY > 980) {
            changeBack.style.backgroundColor = "#FF4A3F";
          } else {
            changeBack.style.backgroundColor = "";
          }
        } else {
          if (scrollY > 980) {
            changeBack.style.backgroundColor = "#684DEF";
            //backgroundColor = "#684DEF";
          } else {
            changeBack.style.backgroundColor = "";
          }
        }
      });
    }
  });

  ScrollOut({});
</script>

<div class="flex-col overflow-x-hidden">
  <div class="flex justify-center items-center whitespace-nowrap w-screen">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee'} whitespace-nowrap w-[100%]"
    >
      <p
        id="first"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
      <p
        id="second"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO2"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
      <p
        id="third"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO3"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee2'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F] overflow-visible"
          >R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR2"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F] overflow-visible"
          >R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR3"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F] overflow-visible"
          >R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR4"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F] overflow-visible"
          >R</span
        >UNNING DEV
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee3'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >F</span
        >RONTEND'CLASS'
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >F</span
        >RONTEND'CLASS'
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >F</span
        >RONTEND'CLASS'
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee4'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >E</span
        >VELOPING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >E</span
        >VELOPING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >E</span
        >VELOPING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee5'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >I</span
        >NTERACTION/&gt;
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >I</span
        >NTERACTION/&gt;
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >I</span
        >NTERACTION/&gt;
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee6'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >A</span
        >RNING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >A</span
        >RNING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative overflow-visible"
          >A</span
        >RNING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center ml-[15px] whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee7'} whitespace-nowrap w-[100%] gap-4"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
    </div>
  </div>
  <div class="mb-[600px]"></div>
</div>

<!-- <div id="zoomTarget"> -->
<div
  class=" mt-[200px] transition-transform ease origin-center sticky flex font-['5MAL6LAMPEN'] justify-center items-center text-[#684DEF] dark:text-[#FF4A3F] text-[40px] data-scroll {isFinish
    ? 'data-scroll in'
    : 'data-scroll out'} "
>
  F I R E A O
</div>
<!-- </div> -->

<!-- <div
  id="zoomCircleTarget"
  class="{isZoom
    ? ''
    : 'invisible'} absolute transition-transform origin-center ease left-[49.5%] w-1 h-1 bg-[#684DEF] dark:bg-[#FF4A3F] rounded-full m-0
      data-scroll {isZoom ? 'data-scroll in' : 'data-scroll out'}"
></div> -->

<!-- 밑에 내용들 -->
<div
  id="change"
  class=" pb-[400px] {isZoom ? 'data-scroll in ' : 'data-scroll out'}"
></div>

<div
  class="rounded-tr-[280px] rounded-tl-[280px] content flex flex-col bg-[#684DEF] dark:bg-[#FF4A3F] w-full h-auto text-white dark:text-black mx-auto"
>
  <div
    class="pl-[46px] mb-[100px] mt-20 {isUp
      ? ''
      : 'invisible'} data-scroll {isUp ? 'data-scroll in ' : 'data-scroll out'}"
  >
    <span
      id="up1"
      class="font-['PRETENDARD-BLACK'] text-3xl text-left text-white dark:text-black"
      >Welcome to</span
    ><br /><span
      id="up2"
      class="font-['PRETENDARD-BLACK'] text-3xl text-left text-white dark:text-black"
      >Fire AO!</span
    >
    <p
      id="get1"
      class="mt-[14px] flex-grow-0 flex-shrink-0 text-xl text-left cursordel {isTextTy
        ? ''
        : 'invisible'}"
    >
      <span
        class="font-['PRETENDARD-BLACK'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >Alpha</span
      ><span
        class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >부터
      </span><span
        class="font-['PRETENDARD-BLACK'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >Omega</span
      ><span
        class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >까지!</span
      >
    </p>
    <span
      id="get2"
      class="font-['PRETENDARD-SEMIBOLD'] text-[13px] text-left text-white dark:text-black {isVision
        ? ' '
        : 'invisible'}"
    >
      대학 생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.
    </span>
  </div>

  <!-- 로고부터 위에 소개글 -->
  <div
    id="up3"
    class="flex flex-col justify-center items-center mb-[59px] {isSimbolUp
      ? ''
      : 'invisible'} data-scroll {isSimbolUp
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <img
      src={Aosimbol}
      alt="AO 심볼로고"
      class="w-[45px] h-[45px] object-cover mb-[10px]"
    />
    <p
      class="font-['Montserrat'] font-black text-[30px] mb-[10px] text-center text-white dark:text-black"
    >
      Fire AO
    </p>
    <span
      class="font-['PRETENDARD-MEDIUM'] text-[13px] text-center text-white dark:text-black"
      >AO는 Alpha의 A, Omega의 O를 합친 것으로<br /></span
    ><span
      class="font-['PRETENDARD-MEDIUM'] text-[13px] text-center text-white dark:text-black"
      >처음부터 끝까지 함께하겠다는 의미를 담고 있습니다.</span
    >
  </div>

  <!-- 주요활동 내용 -->
  <div
    class="ml-[24px] px-[8px] {isActivity
      ? ''
      : 'invisible'} data-scroll {isActivity
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <span
      class="font-['Montserrat'] font-black text-[30px] mb-[10px] text-lfet text-white dark:text-black"
    >
      Fire AO<br />
    </span>
    <span
      class="font-['PRETENDARD-BOLD'] text-[18px] text-left text-white dark:text-black"
      >주요 활동 내용</span
    >
  </div>

  <div
    class="{isActivity2 ? '' : 'invisible'} data-scroll {isActivity2
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[46px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        1. 스터디 활동
      </p>
      <p
        class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
      >
        알고리즘, 책 스터디등
      </p>
    </div>
    <p
      class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <div
    class="{isActivity3 ? '' : 'invisible'} data-scroll {isActivity3
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[17px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        2. 세미나
      </p>
      <p
        class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
      >
        개발 관련 주제 선정 후 발표 (2주에 한 번)
      </p>
    </div>
    <p
      class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <div
    class="{isActivity4 ? '' : 'invisible'} data-scroll {isActivity4
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[17px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        3. 프로젝트
      </p>
      <p
        class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
      >
        직접 앱이나 웹을 멘토링 받으면서 만들어보기<br />(2학기)
      </p>
    </div>
    <p
      class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <div
    class="{isActivity5 ? '' : 'invisible'} data-scroll {isActivity5
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[17px] mb-[17px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        4. 학기 별 개강 파티 및 종강 파티
      </p>
    </div>
    <p
      class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <div
    class="{isActivity6 ? '' : 'invisible'} data-scroll {isActivity6
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[17px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        5. MT
      </p>
      <p
        class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
      >
        4월 중순 쯤 AO 전체 MT 진행
      </p>
    </div>
    <p
      class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <div
    class="{isActivity7 ? '' : 'invisible'} data-scroll {isActivity7
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <div class="ml-[24px] px-[8px] mt-[17px]">
      <p
        class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
      >
        6. 총회
      </p>
      <p
        class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
      >
        11월 말 쯤 AO 선배님들과의 총회 진행
      </p>
    </div>
    <p
      class="mx-[16px] mb-[66px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
    ></p>
  </div>

  <!-- 지원하러가기 버튼 -->
  <div
    class="{isViewBtn ? '' : 'invisible'} data-scroll {isViewBtn
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    <Link to="/apply" class="flex justify-center items-center mb-[149px]">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] gap-1 p-2.5 rounded-[100px] active:scale-95 bg-white dark:bg-black"
      >
        <p
          class="flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
        >
          <span
            class="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
            >FIRE AO
          </span>
          <span
            class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
            >지원하러 가기</span
          >
        </p>
        {#if $darkMode}
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M7.15643 1.6792L11.9377 6.00022L7.15643 10.3212M11.2736 6.00022L1.57831 6.00022"
              stroke="#FF4A3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        {:else}
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M7.15643 1.6792L11.9377 6.00022L7.15643 10.3212M11.2736 6.00022L1.57831 6.00022"
              stroke="#684DFF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        {/if}
      </div>
    </Link>
  </div>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-90.33333%);
    }
  }

  @keyframes marquee2 {
    0% {
      transform: translateX(-100.33333%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .animate-marquee {
    animation: marquee 10s linear infinite;
  }

  .animate-marquee2 {
    animation: marquee2 20s linear infinite;
  }

  .animate-marquee3 {
    animation: marquee 7s linear infinite;
  }

  .animate-marquee4 {
    animation: marquee2 10s linear infinite;
  }

  .animate-marquee5 {
    animation: marquee 10s linear infinite;
  }

  .animate-marquee6 {
    animation: marquee2 25s linear infinite;
  }

  .animate-marquee7 {
    animation: marquee 40s linear infinite;
  }

  .data-scroll {
    opacity: 0;
    will-change: transform, scale, opacity;
    transform: translateY(6rem) scale(0.93);
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .data-scroll.in {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .data-scroll.out {
    opacity: 0;
  }

  .cursordel {
    cursor: false;
  }
</style>

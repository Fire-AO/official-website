<script>
  import "../App.css";
  import Mt1Image from "../images/MT1.png";
  import Mt2Image from "../images/MT2.png";
  import Study1Image from "../images/서버파트1.png";
  import Study2Image from "../images/서버파트2.png";
  import Dinner1Image from "../images/전체회식1.png";
  import Dinner2Image from "../images/전체회식2.png";
  import Meeting1Image from "../images/총회1.png";
  import Meeting2Image from "../images/총회2.png";
  import Meeting3Image from "../images/총회3.png";
  import { darkMode } from "../store";

  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";

  let emblaApi;
  let options = { loop: false };
  let plugins = [Autoplay()];

  function onInit(event) {
    emblaApi = event.detail;
    console.log(emblaApi.slideNodes()); // Access API
  }
</script>

<div class="ml-[31px] mb-[40px]">
  <p
    class="font-['Montserrat'] text-2xl font-bold text-[#0d0d0d] dark:text-neutral-50"
  >
    Archive AO
  </p>
  <p
    class="font-['PRETENDARD-SEMIBOLD'] text-sm text-left mt-[4px] text-[#313131] dark:text-neutral-200"
  >
    Fire AO 활동 모음집
  </p>
</div>

<!-- 이미지 캐로우셀 -->
<div
  class="embla overflow-hidden"
  use:emblaCarouselSvelte={{ options, plugins }}
  on:emblaInit={onInit}
>
  <div class="embla__container flex whitespace-nowrap gap-[10px]">
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 ml-[44px] w-[250px] h-[360px]"
    >
      <img src={Mt1Image} alt="MT1_image" class="object-cover" />
      <div
        class="absolute left-[85.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          MT
        </p>
        <p class=" text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          신나게 놀고 먹는 전체 MT
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Mt2Image} alt="MT2_image" class="object-cover" />
      <div
        class="absolute left-[347.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] font-bold text-white ml-[27px] mt-[5.5px] mb-0"
        >
          MT
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          신나게 놀고 먹는 전체 MT
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-360px]"
    >
      <img src={Dinner1Image} alt="DINNER1_image" class="object-cover" />
      <div
        class="absolute left-[607.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          전체 회식
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          즐거운 FIRE AO 전체 회식
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Dinner2Image} alt="DINNER2_image" class="object-cover" />
      <div
        class="absolute left-[867.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          전체 회식
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          즐거운 FIRE AO 전체 회식
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Study1Image} alt="STUDY1_image" class="object-cover" />
      <div
        class="absolute left-[1127.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          서버파트 스터디
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          함께, 또 따로 열심히!
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Study2Image} alt="STUDY2_image" class="object-cover" />
      <div
        class="absolute left-[1387.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          서버파트 스터디
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          함께, 또 따로 열심히!
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Meeting1Image} alt="MEETING1_image" class="object-cover" />
      <div
        class="absolute left-[1647.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          AO 총회
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          선배들과 함께하는 AO 총회
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px]"
    >
      <img src={Meeting2Image} alt="MEETING2_image" class="object-cover" />
      <div
        class="absolute left-[1907.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          AO 총회
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          선배들과 함께하는 AO 총회
        </p>
      </div>
    </div>
    <div
      class="embla__slide flex-shrink-0 flex-grow-0 min-w-0 w-[250px] h-[360px] mr-[44px]"
    >
      <img src={Meeting3Image} alt="MEETING3_image" class="object-cover" />
      <div
        class="absolute left-[2167.5px] bottom-[56.7px] rounded-[15px] bg-white/[0.15] backdrop-blur-md w-[164px] h-[49px]"
      >
        <p
          class=" text-[15px] font-['PRETENDARD-BOLD'] text-white ml-[27px] mt-[5.5px] mb-0"
        >
          AO 총회
        </p>
        <p class="text-[10px] font-['PRETENDARD-LIGHT'] text-white ml-[27px]">
          선배들과 함께하는 AO 총회
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 해시태그들 -->
<div class="max-w-4xl mx-auto px-[21px] flex justify-center">
  <div
    class="bg-white dark:bg-black flex flex-col justify-center items-start gap-[10px]"
  >
    <!-- 첫줄 -->
    <div class="flex justify-center items-center gap-[10px]">
      <div
        class="w-[35px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-MEDIUM'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          #
        </p>
      </div>
      <div
        class="w-[93px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          전체 MT
        </p>
      </div>
      <div
        class="w-[124px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          AO 전체 회식
        </p>
      </div>
    </div>
    <!-- 두번째줄 -->
    <div class="flex justify-center items-center gap-[10px]">
      <div
        class="w-[164px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          서버파트 스터디
        </p>
      </div>
      <div
        class="w-[35px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] flex justify-center items-center"
      >
        {#if $darkMode}
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-[18px]"
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
        {:else}
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-[18px]"
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
          </svg>
        {/if}
      </div>
    </div>

    <!-- 세번째줄 -->
    <div class="flex items-center justify-center gap-[10px]">
      <div
        class="w-[89px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          AO 총회
        </p>
      </div>
      <div
        class="w-[235px] h-[35px] rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5"
      >
        <p
          class="text-lg font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9]"
        >
          Alpha부터 Omega까지!
        </p>
      </div>
    </div>

    <!-- 추가 해시태그 -->
    <!-- 구조는 위와 동일하며, 텍스트 내용만 변경하면 됩니다. -->
  </div>
</div>

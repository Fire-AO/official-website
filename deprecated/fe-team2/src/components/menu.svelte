<script>
  import { Link } from "svelte-routing";
  export let menuVisible = false;
  import { fade } from "svelte/transition";
  import { darkMode } from "../store";

  function closeMenu() {
    menuVisible = false;
  }
</script>

{#if menuVisible}
  <div
    class="menu overflow-hidden fixed top-0 left-0 bg-[#684DFF] dark:bg-[#FF4A3F] w-screen h-screen text-white z-50"
    transition:fade
  >
    <header class="mb-[27px]">
      <div
        class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px]"
      >
        <div class="w-[27px] h-[28px]"></div>

        <Link to="/">
          <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
            <span
              class="font-['Montserrat'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
              >Fire
            </span><span
              class="font-['Montserrat'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
              >AO</span
            >
          </p>
        </Link>
        <div class="w-[22px] h-[22px]"></div>
      </div>
    </header>
    <!-- 메뉴 로고, 닫기 버튼 -->

    <!-- 메뉴 항목들 -->
    <div class="flex flex-col items-start justify-start h-full ml-[18px]">
      <Link
        to="/about"
        class="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">About AO</p>
      </Link>
      <Link
        to="/archive"
        class="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t-0 border-r-0 border-b-0 border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">Archive AO</p>
      </Link>
      <Link
        to="/team"
        class="w-[95%] font-['PRETENDARD-REGULAR'] text-2xl border-t border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">AO Team</p>
      </Link>
      <!-- ... 나머지 메뉴 항목 ... -->
    </div>

    <div class="absolute w-full bottom-[80px]">
      <Link to="/apply" class="flex justify-center items-center z-50">
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
    <p
      class="absolute bottom-0 w-full text-[13px] font-['PRETENDARD-REGULAR'] mx-[67px]= mb-[23px] text-center text-neutral-200"
    >
      ⓒ Fire AO. 2024 All rights reserved
    </p>
  </div>
{/if}

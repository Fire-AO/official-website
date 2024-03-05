<script>
  import Menu from "./menu.svelte";
  import { Router, Link } from "svelte-routing";
  import { darkMode } from "../store";
  import "../App.css";

  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;
  }

  function toggleDarkMode() {
    darkMode.update((current) => {
      const newValue = !current;
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newValue;
    });
  }
</script>

<div
  class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 border-[#0d0d0d]"
>
  <button on:click={toggleDarkMode}>
    {#if $darkMode}
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-[27px] h-[27px]"
        preserveAspectRatio="none"
      >
        <circle cx="13.5" cy="14" r="13.5" fill="white"></circle>
        <path
          d="M13.5 17.5454C15.4581 17.5454 17.0455 15.958 17.0455 13.9999C17.0455 12.0418 15.4581 10.4545 13.5 10.4545C11.5419 10.4545 9.95459 12.0418 9.95459 13.9999C9.95459 15.958 11.5419 17.5454 13.5 17.5454Z"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M19.4089 14H19.9998"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M13.5 8.09091V7.5"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M13.5 20.5V19.9091"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.2273 18.7273L17.6364 18.1364"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.2273 9.27271L17.6364 9.86361"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8.77283 18.7273L9.36374 18.1364"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8.77283 9.27271L9.36374 9.86361"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M7 14H7.59091"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    {:else}
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[27px] h-[27px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="13.5" cy="13.5" r="13.5" fill="black"></circle>
        <path
          d="M8 12.6711C8 16.1665 10.8336 19 14.3289 19C16.8139 19 18.9644 17.5679 20 15.4839C14.3289 15.4839 11.5161 12.6711 11.5161 7C9.43214 8.03563 8 10.1861 8 12.6711Z"
          stroke="white"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    {/if}
  </button>
  <Link to="/">
    <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
      <span
        class="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-3xl text-left text-[#0d0d0d] dark:text-white"
        >Fire
      </span>
      <span
        class="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-3xl text-left text-black dark:text-white"
        >AO
      </span>
    </p>
  </Link>

  <button on:click={toggleMenu} class=" z-[100]">
    <!-- 햄버거 메뉴 버튼 -->
    <div
      class="relative w-[23px] h-[18px] gap-[4.7px] flex flex-col justify-between items-center"
    >
      <!-- 상단 선 -->
      <div
        class={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${
          menuVisible
            ? "-rotate-45 translate-y-[7px] translate-x-[0.1px] bg-white"
            : ""
        }`}
      ></div>
      <!-- 중간 선 (메뉴 열림 시 사라짐) -->
      <div
        class={`w-full h-[3px] bg-black rounded-md dark:bg-white transition-opacity duration-300 ${
          menuVisible ? "opacity-0" : ""
        }`}
      ></div>
      <!-- 하단 선 -->
      <div
        class={`w-full h-[3px] bg-black rounded-md dark:bg-white transform transition duration-300 ${
          menuVisible
            ? "rotate-45 -translate-y-[7.9px] -translate-x-[0.2px] bg-white"
            : ""
        }`}
      ></div>
    </div>
  </button>
</div>
<Menu {menuVisible} />

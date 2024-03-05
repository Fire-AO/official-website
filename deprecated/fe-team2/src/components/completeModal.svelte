<!-- completeModal.svelte -->
<script>
  import { showModal } from "../store";
  // export let showModal;
  // export let closeModal;
  function handleClick() {
    showModal.set(false);
  }
</script>

{#if $showModal}
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-neutral-800 opacity-70"></div>
    <div class="z-10 p-6 rounded-xl">
      <div
        class="flex flex-col justify-start items-start w-[300px] gap-2.5 p-6 rounded-xl bg-[#dcdcdc] dark:bg-[#000] border border-[#dcdcdc] dark:border-[#000]"
      >
        <div
          class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[18px]"
        >
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-neutral-950 dark:text-[#F2F2F2]"
            >
              성공적으로 지원되었습니다!
            </p>
          </div>
          <div
            class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[252px] gap-2.5"
          >
            <button
              type="button"
              class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-lg bg-[#684def] dark:bg-[#FF4A3F]"
              on:click={handleClick}
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white cursor-pointer"
              >
                확인
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

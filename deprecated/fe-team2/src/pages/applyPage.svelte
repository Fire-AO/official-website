<script>
  import ApplyHeader from "../components/applyHeader.svelte";
  import ApplyMain from "../components/applyMain.svelte";
  import ApplyForm from "../components/applyForm.svelte";
  import { onMount } from "svelte";
  import CompleteModal from "../components/completeModal.svelte";

  // 모달 상태를 관리하는 변수
  let showModal = false;

  // "지원하기 버튼을 눌렀을 때 모달을 열기"
  function openModal() {
    showModal = true;
  }

  // 모달 닫기
  function closeModal() {
    showModal = false;
  }

  // 페이지가 로드될 때 실행되는 함수
  onMount(() => {});
</script>

<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>
<div class="bg-white dark:bg-black h-screen">
  <div class=" mb-[52px]">
    <ApplyHeader />
  </div>
  <div
    class="w-screen overflow-hidden pr-4 pl-4 bg-white dark:bg-black mx-auto"
  >
    <div class="mb-[42px] flex justify-center">
      <ApplyMain />
    </div>
    <div class="mb-[34px] flex justify-center">
      <ApplyForm />
    </div>
    <CompleteModal />
  </div>
</div>
<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>

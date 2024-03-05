<script>
  import NewHeader from "../components/newHeader.svelte";
  import TeamIntro from "../components/teamIntro.svelte";
  import TeamMain from "../components/teamMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>
<div
  class="bg-white dark:bg-black relative overflow-hidden flex flex-col h-full"
>
  <div class="fixed top-0 left-0 z-[1000]">
    <NewHeader />
  </div>
  <div class="pt-[93.67px] flex-grow">
    <TeamIntro />
  </div>
  <div class="mt-[20px] mb-[70px]">
    <TeamMain />
  </div>
  <NewFooter />
</div>
<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>

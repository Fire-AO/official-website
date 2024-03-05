<script>
  import NewHeader from "../components/newHeader.svelte";
  import NewMain from "../components/newMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div class="fixed -z-10 bg-white dark:bg-black h-screen w-screen"></div>
<div
  class="bg-white dark:bg-black overflow-y-auto flex flex-col min-h-screen h-auto"
>
  <div class="fixed top-0 left-0 z-[1000]">
    <NewHeader />
  </div>
  <main class="pt-[95.67px] flex-grow">
    <NewMain />
  </main>
  <NewFooter />
</div>
<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>

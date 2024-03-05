<script>
  import NewHeader from "../components/newHeader.svelte";
  import AboutAoIntro1 from "../components/aboutAoIntro1.svelte";
  import AboutAoIntro2 from "../components/aboutAoIntro2.svelte";
  import AboutAoIntro3 from "../components/aboutAoIntro3.svelte";
  import AboutAoArticle1 from "../components/aboutAoArticle1.svelte";
  import AboutAoActivity from "../components/aboutAoActivity.svelte";
  import ApplyButton from "../components/applyButton.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div class="fixed -z-10 bg-white dark:bg-black h-screen w-screen"></div>
<div
  class=" bg-white dark:bg-black relative overflow-hidden flex flex-col min-h-screen"
>
  <div class="fixed top-0 left-0 z-[1000]">
    <NewHeader />
  </div>
  <div class="pt-[93.67px] flex-grow mb-[10px]">
    <AboutAoIntro1 />
  </div>
  <div
    class="w-screen h-full dark:bg-[#EEEEEE] bg-[#E4E4E4] rounded-tl-lg rounded-tr-lg"
    style="border-top-left-radius: 30px; border-top-right-radius: 30px;"
  >
    <div class="mt-[51px]">
      <AboutAoIntro2 />
    </div>
    <div class="mt-[43px]">
      <AboutAoIntro3 />
    </div>
    <div class="mt-[56px]">
      <AboutAoArticle1 />
    </div>
    <div class="mt-[51px]">
      <AboutAoActivity />
    </div>
    <div class="mt-[51px]">
      <ApplyButton />
    </div>
    <div class="mt-[65px]"></div>
  </div>
  <NewFooter />
</div>
<div class="fixed -z-10 bg-white dark:bg-black w-screen h-screen"></div>

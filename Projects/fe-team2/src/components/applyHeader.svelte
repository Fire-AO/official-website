<script>
  import "../App.css";
  import { Link } from "svelte-routing";
</script>

<div
  class="flex justify-center items-center w-screen relative overflow-hidden py-[11px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 border-[#0d0d0d]"
>
  <p class="font-['Montserrat'] font-black text-3xl">
    <Link to="/">
      <span class="text-black dark:text-white">Fire AO</span>
    </Link>
  </p>
</div>

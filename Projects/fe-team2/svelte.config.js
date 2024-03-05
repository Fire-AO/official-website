import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

{/* <style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style> */}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}

<script lang="ts">
  import MenuButton from "./MenuButton.svelte";

  let show = true;
  let lastScrollPosition = 0;
</script>

<svelte:window
  on:scroll={() => {
    var currentScrollposition = document.documentElement.scrollTop; //Get current scroll position
    if (
      currentScrollposition > 100 &&
      currentScrollposition > lastScrollPosition
    ) {
      show = false;
    } else {
      show = true;
    }
    lastScrollPosition = currentScrollposition;
  }}
/>

<header class:hidden-header={!show} class="padding-container">
  <div class="flex w-full justify-between px-2">
    <h1>Site</h1>
    <MenuButton />
  </div>
</header>

<style lang="postcss">
  header {
    @apply flex w-full h-14 items-center justify-center fixed mt-8 top-0 z-10;
    @apply transition-all duration-500;
  }

  .hidden-header {
    @apply -translate-y-full transition-all duration-500 mt-0;
  }
</style>

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import InViewAnimated from "$lib/components/InViewAnimated.svelte";
  import { fade, slide, fly } from "svelte/transition";
  import fundo from "$lib/images/fundo.jpg";

  import { Parallax } from "svelte-parallax";
  import Card from "$lib/components/Card.svelte";
  import CardsParallax from "$lib/components/CardsParallax.svelte";
</script>

<div id="app">
  <div class="grid max-h-screen h-screen gap-11 grid-rows-[80px_1fr]">
    <Header />

    <article class="w-full flex padding-container py-4 row-start-2">
      <InViewAnimated>
        <div
          class="w-full bg-white rounded-3xl shadow-lg p-6 flex gap-16 items-center justify-center"
          in:slide={{ duration: 1000, delay: 0 }}
        >
          <h2 class="text-8xl text-burgundy">Lorem Ipsum</h2>
          <div class="flex h-full">
            <img src={fundo} alt="" class="object-contain w-72" />
          </div>
        </div>
      </InViewAnimated>
    </article>
  </div>

  <CardsParallax />

  <footer class="h-24 bg-burgundy w-full flex"></footer>
</div>

<style lang="postcss">
  #app {
    @apply flex flex-col bg-light-gray;
  }
</style>

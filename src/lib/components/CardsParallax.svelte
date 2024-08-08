<script lang="ts">
  import Card from "./Card.svelte";

  import { onMount } from "svelte";
  import SvgBackground from "./SvgBackground.svelte";

  let scroll = 0;
  let percentage = 0;
  let size = 0;

  let cards = [
    {
      title: "Card 1",
      description: "Description 1",
    },
    {
      title: "Card 2",
      description: "Description 2",
    },
    {
      title: "Card 3",
      description: "Description 3",
    },
  ];

  onMount(() => {
    const parallax = document.getElementById("parallax");

    window.addEventListener("scroll", () => {
      let rect = parallax?.getBoundingClientRect();
      let positionInitial = parallax?.offsetTop!;

      scroll =
        window.scrollY >= positionInitial
          ? window.scrollY <= rect?.height!
            ? window.scrollY - positionInitial
            : rect?.height! - window.innerHeight
          : 0;

      size = rect?.height!;

      percentage = scroll / (rect?.height! - window.innerHeight);
    });
  });
</script>

<div id="parallax" class="w-full h-[600vh] flex">
  <div class="h-screen w-full flex sticky top-0">
    <SvgBackground {percentage} />
    <div class="padding-container flex flex-col w-full h-screen justify-around">
      <h1 class="text-6xl text-dark-gray">Parallax</h1>
      <div class="grid grid-cols-3 gap-6 w-full slots">
        {#each cards as card, index}
          <div
            class="slot"
            style={`transform: translateY(${(size / cards.length) * index >= scroll ? (size / cards.length) * index - scroll : ""}px);`}
          >
            <Card title={card.title} description={card.description} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .slot {
    @apply sticky top-0 transition-transform duration-500 ease-out p-4;
  }
</style>

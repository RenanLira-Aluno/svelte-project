<script lang="ts">
  import Card from "./Card.svelte";

  import { onMount } from "svelte";

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

<div class="w-full h-[600vh] flex" id="parallax">
  <div
    class="h-screen w-full flex bg-medium-gray sticky top-0 flex-col justify-around padding-container"
  >
    <h1 class="text-6xl text-white">Parallax</h1>
    <div class="grid grid-cols-3 gap-6 w-full slots">
      {#each cards as card, index}
        <div
          class="slot"
          style={`transform: translateY(${(size / 3) * index >= (scroll / index) * index ? (size / 3) * index - (scroll / index) * index : ""}px);`}
        >
          <Card title={card.title} description={card.description} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .slot {
    @apply sticky top-0 transition-transform duration-500 ease-out;
  }
</style>

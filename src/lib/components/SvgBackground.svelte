<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  export let percentage: number;

  let svg: SVGSVGElement;

  let polygons: NodeListOf<SVGElement>;

  onMount(() => {
    polygons = svg.querySelectorAll("polygon");
  });

  afterUpdate(() => {
    polygons.forEach((svg, key) => {
      let size = 300 * (key + 1);

      let drawLength = size * percentage;

      svg.style.transform = `translateY(${size - drawLength}px)`;
    });
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" bind:this={svg}>
  <polygon fill="#ce1000" points="957 450 539 900 1396 900" />
  <polygon fill="#ae1200" points="957 450 872.9 900 1396 900" />
  <polygon fill="#d02d2a" points="-60 900 398 662 816 900" />
  <polygon fill="#b42b20" points="337 900 398 662 816 900" />
  <polygon fill="#c8134b" points="1203 546 1552 900 876 900" />
  <polygon fill="#b43437" points="1203 546 1552 900 1162 900" />
  <polygon fill="#c51866" points="641 695 886 900 367 900" />
  <polygon fill="#9e0c55" points="587 900 641 695 886 900" />
  <polygon fill="#be2284" points="1710 900 1401 632 1096 900" />
  <polygon fill="#ac3864" points="1710 900 1401 632 1365 900" />
  <polygon fill="#ba3d9c" points="1210 900 971 687 725 900" />
  <polygon fill="#8e1986" points="943 900 1210 900 971 687" />
</svg>

<style lang="postcss">
  svg {
    @apply absolute -z-10 h-full w-full bg-[#ff7700];
  }
</style>

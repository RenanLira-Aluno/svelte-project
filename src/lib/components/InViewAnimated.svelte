<script lang="ts">
  import { inview } from "svelte-inview";

  let isInView = false;

  function handleInView({ detail }: CustomEvent<ObserverEventDetails>) {
    isInView = detail.inView;
  }
</script>

<div use:inview={{}} on:inview_change={handleInView} class="flex flex-1">
  {#key isInView}
    <slot />
  {/key}
</div>

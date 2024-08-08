<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<style lang="postcss">
  .card {
    @apply bg-burgundy h-auto aspect-square p-4 rounded-md;
  }
</style>

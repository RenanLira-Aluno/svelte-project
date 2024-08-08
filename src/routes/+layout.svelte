<script>
    import "@fontsource-variable/outfit";
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div id="app">
    <Header />
    <slot />
</div>

<style lang="postcss">
    #app {
        @apply flex flex-col bg-light-gray;
    }
</style>

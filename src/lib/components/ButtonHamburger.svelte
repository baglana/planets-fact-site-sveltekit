<script lang="ts">
	import IconHamburger from '$lib/components/IconHamburger.svelte';

	export let show: boolean;
</script>

<button
	aria-expanded={show}
	on:click={() => show = !show}
	type="button"
>
	<IconHamburger />
</button>

<style>
    button {
        display: flex;
        justify-content: center;

        @media (min-width: 48rem) {
            display: none;
        }
    }
</style>
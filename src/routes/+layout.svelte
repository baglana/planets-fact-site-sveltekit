<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header planets={data.planets} />

<slot />

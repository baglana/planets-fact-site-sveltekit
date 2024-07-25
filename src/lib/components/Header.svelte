<script lang="ts">
	import '../../app.css';
	import IconLogo from '$lib/components/IconLogo.svelte';
	import Menu from '$lib/components/Menu.svelte';

	export let planets: {
		id: number;
		name: string;
	}[];

</script>

<header
	class="max-w-[1440px] w-full mx-auto pl-8 pr-10 pt-5 pb-7 border-b-[1px] border-white border-opacity-20"
>
	<a href="/" on:click>
		<IconLogo />
	</a>

	<nav>
		<Menu items={planets} />
	</nav>

</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

        & * {
            /*border: 1px solid white;*/
        }

        @media (min-width: 48rem) {
            padding: 2rem 3.31rem 1.69rem 3.19rem;
            flex-direction: column;
            gap: 2.44rem;
        }

        @media (min-width: 90rem) {
            padding: 0 2.5rem 0 1.38rem;
            flex-direction: row;
            gap: 0;
        }
    }
</style>

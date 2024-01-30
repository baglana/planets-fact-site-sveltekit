<script lang="ts">
	import IconHamburger from '$lib/components/IconHamburger.svelte';
	import IconChevron from '$lib/components/IconChevron.svelte';

	export let items: {
		id: string;
		name: string;
	}[];

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function handlePlanetClick() {
	}
</script>

<button
	aria-expanded={isMobileMenuOpen}
	on:click={toggleMobileMenu}
	type="button"
>
	<IconHamburger />
</button>

<menu>
	{#each items as item (item.id)}
		<li>
			<a href="/{item.id}">
				<span></span>

				<p>{item.name}</p>

				<IconChevron />
			</a>
		</li>
	{/each}
</menu>

<style>
    button {
        display: flex;
        justify-content: center;
    }

    menu {
        width: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 3.75rem;
        left: 0;
        z-index: 1;
        background-color: hsla(240, 67%, 8%, 1);
    }

    li:not(:first-child) {
        border-top: 0.0625rem solid hsla(0, 0%, 100%, 0.1);
    }

    a {
        padding: 1.25rem 0.5rem 1.25rem 0;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 1.5rem;
    }

    p {
        color: #FFF;
        font-family: 'League Spartan Variable', sans-serif;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.08525rem;
        text-transform: uppercase;
    }

    span {
        content: '';
        width: 1.25rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--color, #fff);
    }

    @media (min-width: 48rem) {
        button {
            display: none;
        }

        menu {
            flex-direction: row;
            gap: 2.06rem;
            position: static;
            background-color: hsla(240, 67%, 8%, 1);
        }

        li:not(:first-child) {
            border-top: none;
        }

        a {
            padding: 0;
            grid-template-columns: auto;
        }

        p {
            color: #FFF;
            font-family: 'League Spartan Variable', sans-serif;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.08525rem;
            text-transform: uppercase;
        }

        span {
            display: none;
        }

    }

</style>
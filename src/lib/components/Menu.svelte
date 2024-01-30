<script lang="ts">
	import IconChevron from '$lib/components/IconChevron.svelte';
	import ButtonHamburger from '$lib/components/ButtonHamburger.svelte';

	export let items: {
		id: string;
		name: string;
	}[];

	function handleMenuItemClick(e: Event) {
		removeActive();
		const { target } = e;
		if (target instanceof HTMLAnchorElement) {
			target.classList.toggle('active');
			console.log(target.id);
		}

		function removeActive() {
			const a = document.querySelector('a.active');
			if (a) {
				a.removeAttribute('active');
			}
		}
	}


	let isMobileMenuOpen = false;
	$: {
		if (isMobileMenuOpen) {
			const menu = document.querySelector('menu');
			if (menu instanceof HTMLMenuElement) {
				menu.classList.toggle('visible');
				console.log(menu.classList);
			}
		}
	}
</script>

<ButtonHamburger show={isMobileMenuOpen} />
<menu>
	{#each items as item (item.id)}
		<li>
			<a href="/{item.id}" on:click={handleMenuItemClick}>
				<span></span>

				<p>{item.name}</p>

				<IconChevron />
			</a>
		</li>
	{/each}
</menu>

<style>
    .active {
        border-top: 4px solid hsla(222, 87%, 56%, 1);
    }

    .visible {
        visibility: visible;
    }

    menu {
        visibility: hidden;
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
        menu {
            visibility: visible;
            flex-direction: row;
            gap: 2.06rem;
            position: static;
            padding: 0;
            background-color: hsla(240, 67%, 8%, 1);
        }

        li:not(:first-child) {
            border-top: none;
        }

        a {
            display: block;
            padding: 0;
        }

        p {
            color: hsla(0, 0%, 100%, 0.75);
            font-size: 0.75rem;
            line-height: 1.5625rem; /* 227.273% */
            letter-spacing: 0.16069rem;
        }


        span {
            display: none;
        }
    }

    @media (min-width: 90rem) {
        menu {
            background-color: hsla(240, 67%, 8%, 1);
        }

        li:not(:first-child) {
            border-top: none;
        }

        a {
            padding-top: 1.81rem;
            padding-bottom: 1.69rem;
        }

        span {
            display: none;
        }

    }
</style>
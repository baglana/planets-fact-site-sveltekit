<script lang="ts">
	import type { PageData } from './$types';
	import Earth from '$lib/images/planet-earth.svg';
	import Jupiter from '$lib/images/planet-jupiter.svg';
	import Mars from '$lib/images/planet-mars.svg';
	import Mercury from '$lib/images/planet-mercury.svg';
	import Neptune from '$lib/images/planet-neptune.svg';
	import Saturn from '$lib/images/planet-saturn.svg';
	import Uranus from '$lib/images/planet-uranus.svg';
	import Venus from '$lib/images/planet-venus.svg';
	import EarthStructure from '$lib/images/planet-earth-internal.svg';
	import JupiterStructure from '$lib/images/planet-jupiter-internal.svg';
	import MarsStructure from '$lib/images/planet-mars-internal.svg';
	import MercuryStructure from '$lib/images/planet-mercury-internal.svg';
	import NeptuneStructure from '$lib/images/planet-neptune-internal.svg';
	import SaturnStructure from '$lib/images/planet-saturn-internal.svg';
	import UranusStructure from '$lib/images/planet-uranus-internal.svg';
	import VenusStructure from '$lib/images/planet-venus-internal.svg';
	import GeologyEarth from '$lib/images/geology-earth.png';
	import GeologyJupiter from '$lib/images/geology-jupiter.png';
	import GeologyMars from '$lib/images/geology-mars.png';
	import GeologyMercury from '$lib/images/geology-mercury.png';
	import GeologyNeptune from '$lib/images/geology-neptune.png';
	import GeologySaturn from '$lib/images/geology-saturn.png';
	import GeologyUranus from '$lib/images/geology-uranus.png';
	import GeologyVenus from '$lib/images/geology-venus.png';

	type PlanetImages = {
		overview: string;
		structure: string;
		geology: string;
	};

	type PlanetImagesObject = {
		[key in
			| 'earth'
			| 'jupiter'
			| 'mars'
			| 'mercury'
			| 'neptune'
			| 'saturn'
			| 'uranus'
			| 'venus']: PlanetImages;
	};

	const img: PlanetImagesObject = {
		earth: {
			overview: Earth,
			structure: EarthStructure,
			geology: GeologyEarth
		},
		jupiter: {
			overview: Jupiter,
			structure: JupiterStructure,
			geology: GeologyJupiter
		},
		mars: {
			overview: Mars,
			structure: MarsStructure,
			geology: GeologyMars
		},
		mercury: {
			overview: Mercury,
			structure: MercuryStructure,
			geology: GeologyMercury
		},
		neptune: {
			overview: Neptune,
			structure: NeptuneStructure,
			geology: GeologyNeptune
		},
		saturn: {
			overview: Saturn,
			structure: SaturnStructure,
			geology: GeologySaturn
		},
		uranus: {
			overview: Uranus,
			structure: UranusStructure,
			geology: GeologyUranus
		},
		venus: {
			overview: Venus,
			structure: VenusStructure,
			geology: GeologyVenus
		}
	};

	let activeTab = 'overview';

	function setActiveTab(tab: string) {
		activeTab = tab;
	}

	export let data: PageData;

</script>

<!--	<div-->
<!--		class="md:max-w-[1110px] w-full mx-auto flex md:flex-row md:justify-end md:items-center md:gap-[300px] md:pt-32 text-white sm:pt-12 sm:gap-9 sm:items-center sm:flex-col"-->
<!--	>-->
<div class="layout text-white">
	<div class="tabs px-6">
<!--			<div class="md:max-w-[1110px] w-full mx-auto md:flex md:flex-col md:gap-20 px-6">-->
			<button class={`${activeTab === 'overview' ? 'active-tab' : ''}`}
							on:click={() => setActiveTab('overview')}
			>
				<span>
					Overview
				</span>
			</button>
			<button class={`${activeTab === 'structure' ? 'active-tab' : ''}`}
							on:click={() => setActiveTab('structure')}
			>
				<span>
					Structure
				</span>
			</button>
			<button class={`${activeTab === 'surface' ? 'active-tab' : ''}`}
							on:click={() => setActiveTab('surface')}
			>
				<span>
					Surface
				</span>
			</button>
<!--		</div>-->
	</div>
	<div class="image relative">
			{#if activeTab === 'geology'}
				<img
					class=""
					src={img[data.planet.id]['overview']}
					alt={`planet - ${data.planet.name} - Geology`}
				/>
				<img
					class="w-[169px] h-[199px] absolute bottom-[-70px] left-1/2 transform -translate-x-1/2"
					src={img[data.planet.id][activeTab]}
					alt={`planet - ${data.planet.name} - Geology`}
				/>
			{:else}
				<img
					class=""
					src={img[data.planet.id][activeTab]}
					alt={`planet - ${data.planet.name} - ${activeTab}`}
				/>
			{/if}
		</div>
<!--		<div-->
<!--			class="md:max-w-[350px] w-full flex md:flex-col md:gap-10 sm:max-w-full sm:flex-row sm:items-center sm:gap-[69px]"-->
<!--		>-->
		<div class="description px-6 flex flex-col min-h-[155px] sm:max-w-[339px]">
			<h1 class="font-['Antonio'] text-[80px] uppercase">{data.planet.name}</h1>

			<p class="text-sm leading-6">{data.planet[`${activeTab}`].content}</p>

			<p class="">
				Source :
				<a class="" href={data.planet[`${activeTab}`].source} target="_blank">
					<span class="tracking-wider font-normal underline">Wikipedia</span>
					<i class=""></i>
				</a>
			</p>
		</div>
<!--		</div>-->
	</div>

<style>
		.tabs {
        display: grid;
				grid-template-columns: repeat(3, 1fr);

				border-top: 1px solid hsla(0, 0%, 100%, 0.2);
				border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

				& button {
						height: 3.12rem;
            width: 5rem;
            padding-top: 1.25rem;
            padding-bottom: 1.06rem;
						margin-bottom: -0.0625rem;
            border-bottom: 4px solid transparent;

						&:nth-child(2) {
								justify-self: center;
						}
						&:nth-child(3) {
								justify-self: end;
						}

						opacity: 0.5;
            color: #FFF;
            font-family: "League Spartan Variable", sans-serif;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.16069rem;
            text-transform: uppercase;
				}
		}

		.layout {
				display: grid;
				grid-template-rows: auto auto auto;

				& > div {
						border: 1px solid red;
				}
		}

    .image {
        justify-self: center;
				width: 100%;
				height: 19rem;
				display: grid;
				place-content: center;

				& img {
						transform: scale(calc(111 / 290));
				}
    }

		.description {
				text-align: center;

				& h1 {
            color: #FFF;
            font-family: 'Antonio Variable', sans-serif;
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-transform: uppercase;
				}

				& > p {
						margin-top: 1rem;
            color: #FFF;
            font-family: 'League Spartan Variable', sans-serif;
            font-size: 0.95rem;
            font-style: normal;
            font-weight: 100;
            line-height: 1.5625rem; /* 178.571% */
				}

        & > p:nth-of-type(2) {
            opacity: 0.5;

						& i {
                display: inline-block;
                width: 0.75rem;
                height: 0.75rem;
								margin-bottom: -0.2rem;
                background: url('$lib/images/assets/icon-source.svg');
                background-repeat: no-repeat;
                background-size: cover; /* stretch the background to cover the whole element */
								color: hsla(0, 0%, 100%, 1);
            }
				}
		}


    @media (min-width: 768px) {
				.layout {
					grid-template: auto auto / 1fr 1fr;
					grid-template-areas:
									"image image"
									"desc tabs";
					justify-items: center;

				}

				.image {
						grid-area: image;
				}

				.description {
						grid-area: desc;
				}

				.tabs {
						grid-area: tabs;
				}
		}

    @media (min-width: 1440px) {
				.layout {
            grid-template: auto auto / auto auto;
            grid-template-areas:
										"image desc"
										"image tabs";
						align-items: flex-end;
        }

				.image {
						align-self: center;
				}
    }

	.tabs {
		& .active-tab {
				opacity: 1;
				border-bottom: 4px solid #419EBB;

				@media (min-width: 768px) {
					background-color: #419ebb;
				}
		}
	}
</style>

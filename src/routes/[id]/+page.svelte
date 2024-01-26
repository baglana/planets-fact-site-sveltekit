<script lang="ts">
	// import type { PageData } from './$types';
	// import Earth from '$lib/images/planet-earth.svg';
	// import Jupiter from '$lib/images/planet-jupiter.svg';
	// import Mars from '$lib/images/planet-mars.svg';
	// import Mercury from '$lib/images/planet-mercury.svg';
	// import Neptune from '$lib/images/planet-neptune.svg';
	// import Saturn from '$lib/images/planet-saturn.svg';
	// import Uranus from '$lib/images/planet-uranus.svg';
	// import Venus from '$lib/images/planet-venus.svg';
	// import EarthStructure from '$lib/images/planet-earth-internal.svg';
	// import JupiterStructure from '$lib/images/planet-jupiter-internal.svg';
	// import MarsStructure from '$lib/images/planet-mars-internal.svg';
	// import MercuryStructure from '$lib/images/planet-mercury-internal.svg';
	// import NeptuneStructure from '$lib/images/planet-neptune-internal.svg';
	// import SaturnStructure from '$lib/images/planet-saturn-internal.svg';
	// import UranusStructure from '$lib/images/planet-uranus-internal.svg';
	// import VenusStructure from '$lib/images/planet-venus-internal.svg';
	// import GeologyEarth from '$lib/images/geology-earth.png';
	// import GeologyJupiter from '$lib/images/geology-jupiter.png';
	// import GeologyMars from '$lib/images/geology-mars.png';
	// import GeologyMercury from '$lib/images/geology-mercury.png';
	// import GeologyNeptune from '$lib/images/geology-neptune.png';
	// import GeologySaturn from '$lib/images/geology-saturn.png';
	// import GeologyUranus from '$lib/images/geology-uranus.png';
	// import GeologyVenus from '$lib/images/geology-venus.png';

	// type PlanetImages = {
	// 	overview: string;
	// 	structure: string;
	// 	geology: string;
	// };

	// type PlanetImagesObject = {
	// 	[key in
	// 		| 'earth'
	// 		| 'jupiter'
	// 		| 'mars'
	// 		| 'mercury'
	// 		| 'neptune'
	// 		| 'saturn'
	// 		| 'uranus'
	// 		| 'venus']: PlanetImages;
	// };

	// const img: PlanetImagesObject = {
	// 	earth: {
	// 		overview: Earth,
	// 		structure: EarthStructure,
	// 		geology: GeologyEarth
	// 	},
	// 	jupiter: {
	// 		overview: Jupiter,
	// 		structure: JupiterStructure,
	// 		geology: GeologyJupiter
	// 	},
	// 	mars: {
	// 		overview: Mars,
	// 		structure: MarsStructure,
	// 		geology: GeologyMars
	// 	},
	// 	mercury: {
	// 		overview: Mercury,
	// 		structure: MercuryStructure,
	// 		geology: GeologyMercury
	// 	},
	// 	neptune: {
	// 		overview: Neptune,
	// 		structure: NeptuneStructure,
	// 		geology: GeologyNeptune
	// 	},
	// 	saturn: {
	// 		overview: Saturn,
	// 		structure: SaturnStructure,
	// 		geology: GeologySaturn
	// 	},
	// 	uranus: {
	// 		overview: Uranus,
	// 		structure: UranusStructure,
	// 		geology: GeologyUranus
	// 	},
	// 	venus: {
	// 		overview: Venus,
	// 		structure: VenusStructure,
	// 		geology: GeologyVenus
	// 	}
	// };

	let activeTab = 'overview';

	function setActiveTab(tab: string) {
		activeTab = tab;
	}
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
<!--	<div class="image md:w-[400px] md:h-[400px] sm:w-[369px] sm:h-[369px] relative">-->
<!--			{#if activeTab === 'geology'}-->
<!--				<img-->
<!--					class="w-full"-->
<!--					src={img[data.planet.id]['overview']}-->
<!--					alt={`planet - ${data.planet.name} - Geology`}-->
<!--				/>-->
<!--				<img-->
<!--					class="w-[169px] h-[199px] absolute bottom-[-70px] left-1/2 transform -translate-x-1/2"-->
<!--					src={img[data.planet.id][activeTab]}-->
<!--					alt={`planet - ${data.planet.name} - Geology`}-->
<!--				/>-->
<!--			{:else}-->
<!--				<img-->
<!--					class="w-full"-->
<!--					src={img[data.planet.id][activeTab]}-->
<!--					alt={`planet - ${data.planet.name} - ${activeTab}`}-->
<!--				/>-->
<!--			{/if}-->
<!--		</div>-->
<!--		<div-->
<!--			class="md:max-w-[350px] w-full flex md:flex-col md:gap-10 sm:max-w-full sm:flex-row sm:items-center sm:gap-[69px]"-->
<!--		>-->
<!--		<div class="description flex flex-col gap-6 min-h-[155px] sm:max-w-[339px]">-->
<!--			<h1 class="font-['Antonio'] text-[80px] uppercase">{data.planet.name}</h1>-->
<!--			<p class="min-h-[155px] text-sm leading-6">{data.planet[`${activeTab}`].content}</p>-->
<!--			<div class="flex gap-2 items-center">-->
<!--				<p class="text-xs tracking-[2.5px] opacity-50 leading-6">Source :</p>-->
<!--				<a class="flex gap-2 items-center underline" href={data.planet[`${activeTab}`].source}>-->
<!--					<p class="text-sm tracking-[2.5px] opacity-50 font-bold leading-6">Wikipedia</p>-->
<!--					<div class="">-->
<!--						<svg-->
<!--							xmlns="http://www.w3.org/2000/svg"-->
<!--							width="12"-->
<!--							height="12"-->
<!--							viewBox="0 0 12 12"-->
<!--							fill="none"-->
<!--						>-->
<!--							<path-->
<!--								opacity="0.5"-->
<!--								fill-rule="evenodd"-->
<!--								clip-rule="evenodd"-->
<!--								d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"-->
<!--								fill="white"-->
<!--							/>-->
<!--						</svg>-->
<!--					</div>-->
<!--				</a>-->
<!--			</div>-->
<!--		</div>-->
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
						/*border: 1px solid red;*/
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

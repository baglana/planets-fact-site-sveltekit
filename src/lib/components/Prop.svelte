<script lang="ts">
	export let name: string;
	export let value: string;
</script>

<div>
	<p>{name}</p>
	<span>{value}</span>
</div>

<style>
    p {
        line-height: normal;
        margin-bottom: -0.375rem;

        color: hsla(0, 0%, 100%, 0.5);
        font-family: 'League Spartan Variable', sans-serif;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem; /* 200% */
        letter-spacing: 0.04544rem;
        text-transform: uppercase;
    }

    div {
        padding: 0.56rem 1.5rem 0.81rem;

        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;

        border: 1px solid hsla(0, 0%, 100%, 0.2);
    }

    span {
        color: hsla(0, 0%, 100%, 1);
        font-family: 'Antonio Variable', sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.04688rem;
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        div {
            padding: 1rem 0.94rem 1.19rem;

            grid-template-columns: none;
            grid-template-rows: auto auto;
            grid-auto-flow: column;
            grid-gap: 0.38rem;
        }

        p {
            font-size: 0.625rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1rem; /* 227.273% */
            letter-spacing: 0.0625rem;
            text-transform: uppercase;
        }

        span {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.05625rem;
            text-transform: uppercase;
        }
    }
</style>
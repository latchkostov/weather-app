<script>
	import DayCard from '../lib/DayCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	export const prerender = true;
</script>

<div class="w-full h-screen flex flex-col">
	<h1 class="header text-center text-md uppercase">{data.title}</h1>
	<div class="body flex justify-center flex-grow w-full">
		<div class="cards-container grid w-full px-5 py-5">
			<DayCard day="Monday" />
			<DayCard day="Tuesday" />
			<DayCard day="Wednesday" />
			<DayCard day="Thursday" />
			<DayCard day="Friday" />
			<DayCard day="Saturday" />
			<DayCard day="Sunday" />
		</div>
	</div>
</div>

<style>
	.header {
		background-color: var(--primary-color);
		opacity: 0.9;
		color: rgba(255,255,255,0.85);
		padding-block: 10px;
	}
	.body {
		background-color: #e5e5e5;
	}
	.cards-container {
		max-width: 1200px;
		height: fit-content;
		row-gap: 20px;
		column-gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-content: center;
	}
</style>

<script>
	import DayCard from '../lib/DayCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="w-full h-screen flex flex-col">
	<h1 class="header text-center text-2xl">{data.title}</h1>
	<div class="body">
		<div class="h-full flex justify-between items-center px-5">
			<DayCard />
			<DayCard />
			<DayCard />
			<DayCard />
			<DayCard />
		</div>
	</div>
</div>

<style>
	.header {
		border: 1px red solid;
		background-color: skyblue;
		padding-block: 10px;
	}
	.body {
		border: 1px red solid;
		background-color: skyblue;
		flex-grow: 1;
	}
</style>

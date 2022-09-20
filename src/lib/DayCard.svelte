<script lang="ts">
	import rain from '$lib/assets/rain.png';
	import sun from '$lib/assets/sun.png';
	export let day: string = 'Day';
</script>

<div
	class="day-card-container shadow-lg rounded flex flex-col justify-between flex-shrink-0 items-center"
>
	<div class="card-header-container rounded-t flex justify-center w-full mb-3">
		<h1 class="text-sm my-2 uppercase">{day}</h1>
	</div>
	<div class="weather-image-container">
		<img alt="" src={sun} />
	</div>
	<div class="flex flex-col py-2">
		<span class="text-xs">Low: 75 F</span>
		<span class="text-xs">High: 82 F</span>
	</div>
</div>

<style>
    .card-header-container {
        background-color: var(--primary-color);
        opacity: 0.7;
    }
    .card-header-container > h1 {
        color: rgba(255,255,255,1);
    }
	.day-card-container {
		max-width: 200px;
		height: 170px;
		background-color: white;
	}
	.weather-image-container {
		width: 70px;
		height: 70px;
	}
</style>

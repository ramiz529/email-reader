<script>
	import { goto } from '$app/navigation';

	let noClickCount = 0;

	function handleNoClick() {
		noClickCount += 1;
	}

	function handleYesClick() {
		goto('/success');
	}

	$: scaleValue = 1 + noClickCount * 0.15;
</script>

<main class="min-h-screen w-full flex items-center justify-center p-0">
	<div class="min-h-screen w-full bg-pink-200 rounded-none flex items-center justify-center p-4">
		<div
			class="w-80 h-96 bg-pink-100 border-2 border-white rounded-lg shadow-lg flex flex-col items-center pt-10 px-8"
		>
			<h1 class="text-black text-center text-2xl font-bold leading-tight">
				Will you be my Valentines?
			</h1>
			<img
				src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzV2c3lzanBrZ2J4dGhiYWpycjhtYzVxNzF5dmc5eGpyaXBpMDNlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifB1v1W3Db0GIW7uTA/giphy.gif"
				alt="Valentine's GIF"
				class="mt-4 w-full h-auto rounded-lg"
			/>
			<div class="relative flex gap-3 mt-8 w-full">
				<button
					onclick={handleYesClick}
					class="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg relative z-10"
					style="transform: scale({scaleValue}); transform-origin: left center;"
				>
					YES
				</button>
				<button
					onclick={handleNoClick}
					class="flex-1 bg-pink-50 hover:bg-pink-100 text-gray-900 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg border border-pink-200 relative z-0"
				>
					NO
				</button>
			</div>
		</div>
	</div>
</main>

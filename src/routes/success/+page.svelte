<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/iloveyou');
	}
</script>

<main class="min-h-screen w-full flex items-center justify-center p-0">
	<div class="min-h-screen w-full bg-pink-200 rounded-none flex items-center justify-center p-4">
		<div
			class="w-80 min-h-96 bg-pink-100 border-2 border-white rounded-lg shadow-lg flex flex-col items-center pt-10 px-8 pb-8"
		>
			<h1 class="text-black text-center text-3xl font-bold leading-tight">
				YAY! Happy Valentine's Day my baby! 💕
			</h1>
			<img
				src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dGxvYzliZXRpdzdpdzRiMzF1MzU3cGN6NWExeG02YWpneHlnazc1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KmxmoHUGPDjfQXqGgv/giphy.gif"
				alt="Valentine's GIF"
				class="mt-6 w-full h-auto rounded-lg max-h-64 object-contain"
			/>
			<div class="relative flex gap-3 mt-8 w-full">
				<button
					onclick={handleClick}
					class="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg relative z-10"
				>
					CLICK ME
				</button>
			</div>
		</div>
	</div>
</main>

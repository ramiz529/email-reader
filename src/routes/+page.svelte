<!-- This is TypeScript -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	function goToStartPage() {
		goto('/start');
	}
</script>

<!-- HTML code -->
<div class="mt-5 flex flex-col gap-12 items-center">
	<h1 class="text-4xl">Welcome</h1>
	<Button class="w-fit py-4 px-8 text-xl" onclick={goToStartPage}>Start</Button>
</div>

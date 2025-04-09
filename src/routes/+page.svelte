<!-- This is TypeScript -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	function goToStartPage() {
		goto('/start');
	}
</script>

<!-- HTML code -->
<Button class="bg-blue-400 text-white p-6" variant="outline" onclick={goToStartPage}>Button</Button>

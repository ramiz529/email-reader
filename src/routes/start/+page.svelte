<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { LoaderCircle } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import markdown from '@wcj/markdown-to-html';

	// State
	let selectedFile = $state<File | null>(null);
	let emailDescription = $state<string>('');
	let isLoading = $state<boolean>(false);
	// Actions
	function onFileSelect(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files?.[0]) {
			selectedFile = target.files?.[0];
		}
	}

	async function uploadFile() {
		if (!selectedFile) {
			return;
		}
		isLoading = true;

		const response = await fetch('/api/extract', {
			method: 'POST',
			body: selectedFile,
			headers: {
				'Content-Type': selectedFile.type
			}
		});

		const jsonResponse = await response.json();
		emailDescription = jsonResponse.answer;
		isLoading = false;
	}
</script>

<div class="grid w-full max-w-sm items-center gap-1.5">
	<Input id="picture" type="file" onchange={onFileSelect} />
</div>

<Button onclick={uploadFile} disabled={isLoading}>
	{#if isLoading}
		<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
		Uploading
	{:else}
		Upload
	{/if}
</Button>

<div>{@html markdown(emailDescription)}</div>

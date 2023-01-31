<script lang="ts">
	import type { Client, Location, Device, ServiceCall, Contract } from '@prisma/client';

	export let data: {
		cilents: Client[];
		locations: Location[];
		devices: Device[];
		calls: ServiceCall[];
		contracts: Contract[];
	};
</script>

{data.cilents}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

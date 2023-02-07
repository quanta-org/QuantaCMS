<script lang="ts">
    import { enhance } from '$app/forms';
	import { Label, Input, Select } from 'flowbite-svelte';
	import type { SelectOptionType } from 'flowbite-svelte/types';
	import type { Client, Location } from '@prisma/client';
    import type { ActionData, PageData } from './$types';
    import ToastPopup from '$lib/ToastPopup.svelte';
	import ModalPopup from '$lib/ModalPopup.svelte';

	export let data: PageData;
	export let form: ActionData;

	let clients: Client[] | undefined = data.clients;
	let location: Location | undefined = data.location;
	let uid = location?.uid ?? '';
	let address = location?.address ?? '';
	let clientId = location?.clientId ?? '';

	let deleteButton: HTMLButtonElement;
    let showModel = false;
    let options: SelectOptionType[] = [];

	clients.forEach((client) => {
		options.push({
			name: client.name,
			value: client.uid
		});
	});
</script>

<div class="flex justify-center mt-20">
	<form class="w-96" method="POST" use:enhance>
		<h1 class="text-2xl font-bold text-center">{address}</h1>
		<Input defaultClass="hidden" type="hidden" id="uid" name="uid" bind:value={uid} />
		<Label for="adderss">Address</Label>
		<Input id="address" name="address" type="text" bind:value={address} />
		<Label for="salesRep" class="pt-2">Client</Label>
		<Select name="salesRepId" class="mt-2" items={options} bind:value={clientId} />
		<div class="flex justify-center gap-2 mt-2">
			{#if uid}
				<button
					class="bg-blue-700 rounded-md p-2 px-4 text-white hover:bg-blue-600"
					formaction="?/update">Save</button
				>
				<button class="hidden" bind:this={deleteButton} formaction="?/delete" />
				<button
					class="bg-red-700 rounded-md p-2 px-4 text-white hover:bg-red-800"
					type="button"
					on:click={() => (showModel = true)}>Delete</button
				>
			{:else}
				<button
					class="bg-blue-700 rounded-md p-2 px-4 text-white hover:bg-blue-600"
					formaction="?/create">Add</button
				>
			{/if}
		</div>
	</form>
</div>

<ModalPopup bind:open={showModel} button={deleteButton} name={address} />
<ToastPopup show={form?.error ?? false} message="Could not delete due to dependencies!" />
<script lang="ts">
    import { enhance } from '$app/forms';
	import { Label, Input, Select } from 'flowbite-svelte';
	import type { SelectOptionType } from 'flowbite-svelte/types';
	import type { SalesRep, Client } from '@prisma/client';
    import type { ActionData, PageData } from './$types';
    import ToastPopup from '$lib/ToastPopup.svelte';
	import ModalPopup from '$lib/ModalPopup.svelte';

	export let data: PageData;
	export let form: ActionData;

	let salesReps: SalesRep[] | undefined = data.salesReps;
	let client: Client | undefined = data.client;
	let uid = client?.uid ?? '';
	let name = client?.name ?? '';
	let salesRepId = client?.salesRepId ?? '';

	let deleteButton: HTMLButtonElement;
    let showModel = false;
    let options: SelectOptionType[] = [];

	salesReps.forEach((rep) => {
		options.push({
			name: rep.name,
			value: rep.uid
		});
	});
</script>

<div class="flex justify-center mt-20">
	<form class="w-96" method="POST" use:enhance>
		<h1 class="text-2xl font-bold text-center">{name}</h1>
		<Input defaultClass="hidden" type="hidden" id="uid" name="uid" bind:value={uid} />
		<Label for="name">Name</Label>
		<Input id="name" name="name" type="text" bind:value={name} />
		<Label for="salesRep" class="pt-2">Sales Rep</Label>
		<Select name="salesRepId" class="mt-2" items={options} bind:value={salesRepId} />
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

<ModalPopup bind:open={showModel} button={deleteButton} {name} />
<ToastPopup show={form?.error ?? false} message="Could not delete due to dependencies!" />
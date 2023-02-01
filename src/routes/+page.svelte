<script lang="ts">
	import type { Prisma, Location, Device, ServiceCall, Contract, SalesRep, Client } from '@prisma/client';
	import {
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox
	} from 'flowbite-svelte';

	export let data: {
		clients: Prisma.ClientGetPayload<{include: { salesRep: true }}>[];
		locations: Location[];
		devices: Device[];
		calls: ServiceCall[];
		contracts: Contract[];
		salesReps: SalesRep[];
	};
</script>

<div class="flex justify-center gap-2 mt-5">
	<!-- Sales Reps -->
	<div id="salesreps" class="border p-5 rounded-xl">
		<Table>
			<caption
				class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
			>
				Sales Representatives
			</caption>
			<TableHead>
				<TableHeadCell>
					<span />
				</TableHeadCell>
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Comments</TableHeadCell>
				<TableHeadCell>
					<a class="bg-blue-700 p-1 rounded-md text-white hover:bg-blue-500 block" href="/salesrep">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</a>
				</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each data.salesReps as rep}
					<TableBodyRow>
						<TableBodyCell class="!p-4">
							<Checkbox />
						</TableBodyCell>
						<TableBodyCell>{rep.name}</TableBodyCell>
						<TableBodyCell>{rep.comments}</TableBodyCell>
						<TableBodyCell class="text-center">
							<a
								href="/salesrep/{rep.uid}"
								class="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>

	<!-- Cilents -->
	<div id="salesreps" class="border p-5 rounded-xl">
		<Table>
			<caption
				class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
			>
				Clients
			</caption>
			<TableHead>
				<TableHeadCell>
					<span />
				</TableHeadCell>
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Sales Rep</TableHeadCell>
				<TableHeadCell>
					<a class="bg-blue-700 p-1 rounded-md text-white hover:bg-blue-500 block" href="/client">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</a>
				</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each data.clients as client}
					<TableBodyRow>
						<TableBodyCell class="!p-4">
							<Checkbox />
						</TableBodyCell>
						<TableBodyCell>{client.name}</TableBodyCell>
						<TableBodyCell>{client.salesRep.name}</TableBodyCell>
						<TableBodyCell class="text-center">
							<a
								href="/client/{client.uid}"
								class="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Edit
							</a>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

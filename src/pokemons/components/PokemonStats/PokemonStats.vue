<script setup lang="ts">
import type { IPokemonStats } from './interfaces';
defineProps<IPokemonStats>()
</script>

<template>
	<table class="stats">
		<caption class="caption-top">
			<h2 class="stats__title mb-4">{{ pokemonName }} - Stats</h2>
		</caption>
		<thead>
			<tr>
				<th class="border-y">Stat</th>
				<th class="border-y">Value</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="{ name, value } in stats"
				:key="name"
			>
				<td class="capitalize">{{ name }}</td>
				<td>{{ value }}</td>
			</tr>
			<tr>
				<td>Height</td>
				<td>{{ height }} m</td>
			</tr>
			<tr>
				<td>Weight</td>
				<td>{{ weight }} Kg</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
.stats {
	width: 100%;
	max-width: 768px;
	margin-inline: auto;
	text-align: left;
	table-layout: auto;
}

.stats__title {
	text-align: center;
	font-weight: 600;
	text-transform: capitalize;
}
</style>
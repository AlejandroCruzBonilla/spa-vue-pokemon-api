<script setup lang="ts">
import type { IPokemonTypes } from './interfaces';
defineProps<IPokemonTypes>()
</script>

<template>
	<h2 class="types__title mb-4">Pokemon Types</h2>
	<div class="types">
		<div
			v-for="{ name } in types"
			:key="name"
			class="type"
			:style="`--color-pokemon-type: var(--color-pokemon-type-${name})`"
		>{{ name }}</div>
	</div>
</template>

<style scoped>
.types {
	display: flex;
	gap: 0.5rem;
}

.types__title {
	text-align: center;
	font-weight: 600;
}

.type {
	flex-grow: 1;
	max-width: 50%;
	font-weight: 600;
	margin-inline: auto;
	text-align: center;
	display: block;
	padding: 0.1rem 0.5rem;
	border-radius: 50px;
	text-transform: capitalize;
	background-color: var(--color-pokemon-type);
	text-shadow: 1px 1px 1px var(--color-background);
}
</style>
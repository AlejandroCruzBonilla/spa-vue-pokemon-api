<script setup lang="ts">
import type { IPokemonSprites } from './interfaces';
defineProps<IPokemonSprites>()
</script>

<template>
	<h2 class="title mb-4">Sprites</h2>
	<div class="sprites">

		<div>
			<img
				:src="sprites.frontDefault"
				:alt="pokemonName"
				width="130"
				height="130"
			>
		</div>
		<div>
			<img
				:src="sprites.backDefault"
				:alt="pokemonName"
				width="130"
				height="130"
			>
		</div>
		<div>
			<img
				:src="sprites.frontShiny"
				:alt="pokemonName"
				width="130"
				height="130"
			>
		</div>
		<div>
			<img
				:src="sprites.backShiny"
				:alt="pokemonName"
				width="130"
				height="130"
			>
		</div>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
	font-weight: 600;
	text-shadow: 1px 1px 1px #000000;
}

.sprites {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-column-gap: 0.5rem;
	grid-row-gap: 0.5rem;
	justify-items: center;
}

@screen md {
	.sprites {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}
</style>
<script setup lang="ts">
import { PokemonCard } from '@/pokemons/components/PokemonCard';
import type { IPokemonList } from './interfaces';
defineProps<IPokemonList>();

</script>
<template>
	<div class="list">
		<PokemonCard
			v-for="pokemon in pokemons"
			:key="pokemon.id"
			:pokemon="pokemon"
		/>
	</div>
</template>


<style scoped>
.list {
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 1rem;
	column-gap: 1rem;
}

@screen sm {
	.list {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@screen md {
	.list {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@screen xl {
	.list {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}
</style>
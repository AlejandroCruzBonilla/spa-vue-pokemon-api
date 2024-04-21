<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { IPokemonCard } from './interfaces';
const props = defineProps<IPokemonCard>();

const router = useRouter()

const navigateToPokemon = () => {
	router.push({
		name: 'pokemon-id',
		params: { id: props.pokemon.id }
	})
}

</script>

<template>
	<article
		class="card accent-section hover:pokemon-font"
		@click="navigateToPokemon"
	>
		<header class="card__header">

			<img
				class="card__image"
				:src="pokemon.sprite"
				:alt="pokemon.name"
				width="150"
				height="150"
			>
		</header>

		<div class="card__body">

			<h2 class="card__title">
				{{ pokemon.name }}
			</h2>
		</div>
	</article>
</template>


<style scoped>
.card {
	cursor: pointer;
}

.card__image {
	display: block;
	margin-inline: auto;
}

.card__title {
	text-align: center;
	text-transform: capitalize;
	font-weight: 600;
}
</style>
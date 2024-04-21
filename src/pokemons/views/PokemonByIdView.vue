<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import usePokemonQuery from '@/pokemons/composables/usePokemonQuery';
import { LoadingTemplate } from '@/shared/components/LoadingTemplate';
import { ErrorMessage } from '@/shared/components/ErrorMessage';
import { PokemonHeader } from '@/pokemons/components/PokemonHeader';
import { PokemonSprites } from '@/pokemons/components/PokemonSprites';
import { PokemonTypes } from '@/pokemons/components/PokemonTypes';
import { PokemonStats } from '@/pokemons/components/PokemonStats';


const route = useRoute()
const { id } = route.params

const { isLoading, isError, error, pokemon } = usePokemonQuery(id.toString())

onMounted(() => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
})

</script>

<template>

	<LoadingTemplate v-if="isLoading" />

	<ErrorMessage v-else-if="isError">
		<h2 class="text-center p-8">{{ error }}</h2>
	</ErrorMessage>

	<article
		v-else-if="pokemon"
		class="pokemon"
	>
		<section class="pokemon__header accent-section my-4">
			<PokemonHeader
				:pokemon-id="pokemon.id"
				:pokemon-name="pokemon.name"
				:sprite="pokemon.sprites.frontDefault"
			/>
		</section>

		<section class="accent-section my-4">
			<PokemonTypes :types="pokemon.types" />
		</section>

		<section class="accent-section my-4">
			<PokemonSprites
				:pokemon-name="pokemon.name"
				:sprites="pokemon.sprites"
			/>
		</section>

		<section class="accent-section my-4">
			<PokemonStats
				:pokemon-name="pokemon.name"
				:stats="pokemon.stats"
				:height="pokemon.height"
				:weight="pokemon.weight"
			/>
		</section>


	</article>

</template>


<style scoped>
.pokemon__header {
	display: flex;
	justify-content: center
}

.pokemon__text {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.pokemon__title {
	font-size: 3.5rem;
	line-height: 1.2;
	text-transform: capitalize;
}

.pokemon__id {
	font-size: 4rem;
	line-height: 1.2;
	text-transform: capitalize;
}
</style>
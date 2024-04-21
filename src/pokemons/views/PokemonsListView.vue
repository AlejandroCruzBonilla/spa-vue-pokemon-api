<script setup lang="ts">
import { watch } from 'vue';
import { LoadingTemplate } from '@/shared/components/LoadingTemplate';
import { ErrorMessage } from '@/shared/components/ErrorMessage';
import usePokemonsQuery from '@/pokemons/composables/usePokemonsQuery';
import { PokemonList } from '@/pokemons/components/PokemonList';
import { PaginationNumbers } from '@/shared/components/PaginationNumbers';

const { pageCount, pageOffset, isLoading, isError, error, pokemons, currentPage, totalPages, setCurrentPage } = usePokemonsQuery()

watch(pokemons, () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
})

</script>
<template>

	<div>
		<h1 class="title mb-4">
			Pokemon List
		</h1>
		<h3 class="subtitle">
			Current Page: <span>{{ currentPage }}</span>
		</h3>
		<h3 class="subtitle">
			Pokemons Numbers: <span class="inline-block">{{ pageOffset + 1 }} - {{ pageOffset + pageCount }}</span>
		</h3>
		<h3 class="subtitle mb-4">
			Pokemons Count: <span class="inline-block">{{ pageCount }}</span>
		</h3>

		<div class="mb-4">
			<PaginationNumbers
				:current-page="currentPage"
				:total-pages="totalPages"
				@change-page="setCurrentPage"
			/>
		</div>

		<LoadingTemplate v-if="isLoading" />

		<ErrorMessage v-else-if="isError">
			<h2 class="text-center p-8">{{ error }}</h2>
		</ErrorMessage>

		<PokemonList
			v-else-if="pokemons?.length"
			:pokemons="pokemons"
		/>
		<div class="mt-4">
			<PaginationNumbers
				:current-page="currentPage"
				:total-pages="totalPages"
				@change-page="setCurrentPage"
			/>
		</div>
	</div>

</template>


<style scoped>
.title,
.subtitle {
	font-weight: 600;
	text-shadow: 1px 1px 1px #000000;
}
</style>
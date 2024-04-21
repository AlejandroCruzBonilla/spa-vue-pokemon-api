<script setup lang="ts">
import type { IPokemonHeader } from './interfaces';
defineProps<IPokemonHeader>()
</script>

<template>
	<div class="header">
		<img
			class="header__image"
			:src="sprite"
			:alt="pokemonName"
		>
		<h1 class="header__title">
			<span class="header__name pokemon-font">{{ pokemonName }}</span>
			<span class="header__id "> #{{ pokemonId }}</span>
		</h1>
	</div>
</template>

<style scoped>
.header {
	display: grid;
	align-items: center;
	justify-items: center;
}

@screen md {
	.header {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-column-gap: 0.5rem;
	}
}

.header__image {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1;
}


.header__title {
	text-transform: capitalize;
}

@screen md {
	.header__title {
		grid-column: 2/4
	}

}

.header__name,
.header__id {
	font-size: clamp(1.2rem, 10vw, 2.5rem);
	line-height: 1.2;
}

@screen md {

	.header__name,
	.header__id {
		font-size: clamp(2.5rem, 10vw, 4.5rem)
	}
}
</style>
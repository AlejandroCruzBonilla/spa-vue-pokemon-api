<script setup lang="ts">
import { pokemonRouteLinks } from '@/pokemons/router/list-routes';
</script>

<template>
	<div>

		<div class="flex justify-end my-4">
			<RouterLink
				class="nav__link"
				v-for="{ name, title } in pokemonRouteLinks"
				:key="name"
				:to="{ name }"
			>{{ title }}
			</RouterLink>
		</div>

		<RouterView />
	</div>
</template>

<style scoped>
.nav__link {
	border-radius: 50px;
	padding: 0.1rem 0.7rem;
	font-weight: 600;
	text-shadow: 1px 1px 1px #000000;
	background-color: var(--color-primary);
}

.nav__link.router-link-active {
	background-color: transparent;
	color: var(--color-primary);
}
</style>

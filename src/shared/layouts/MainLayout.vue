<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
	<div class="container mx-auto">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>

		<footer>
			<slot name="footer"></slot>
		</footer>

	</div>
	<VueQueryDevtools />
</template>


<style scoped>
header,
main,
footer {
	padding: 0 1rem;
}

main {
	min-height: 100vh;
	padding-top: 2rem;
	padding-bottom: 2rem;
}
</style>
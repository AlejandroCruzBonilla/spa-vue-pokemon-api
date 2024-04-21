<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/shared/layouts/MainLayout.vue';
import { NavBar } from '@/shared/components/NavBar';
import { MainRouteLinks } from '@/router/list-routes';
import { FooterPage } from '@/shared/components/FooterPage';

</script>

<template>

	<MainLayout>
		<template #header>
			<NavBar
				show-logo
				title="Pokemon Page"
				:items="MainRouteLinks"
			/>

		</template>
		<template #default>
			<RouterView />
		</template>
		<template #footer>

			<FooterPage />
		</template>
	</MainLayout>
</template>

<style scoped></style>

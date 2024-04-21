<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MenuMobile } from '@/shared/components/MenuMobile';
import { SwitchTheme } from '@/shared/components/SwitchTheme';
import type { INavBar } from './interfaces';

withDefaults(defineProps<INavBar>(), {
	showLogo: false
})

</script>

<template>
	<nav class="navbar">

		<RouterLink
			:to="{ name: 'home' }"
			class="navbar__brand"
		>
			<img
				v-if="showLogo"
				alt="Vue Logo"
				class="logo"
				src="@/assets/logo.svg"
				width="40"
				height="40"
			/>
			<span>{{ title }}</span>
		</RouterLink>

		<div class="navbar__links">
			<RouterLink
				class="navbar__link"
				v-for="{ name, title } in items"
				:key="name"
				:to="{ name }"
			>{{ title }}
			</RouterLink>
		</div>
		<div class="navbar__menu">
			<MenuMobile />
		</div>

		<SwitchTheme />

	</nav>
</template>

<style scoped>
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	padding: 1rem 0;
}

.navbar__brand {
	display: flex;
	gap: 0.5rem;
}

.navbar__links {
	display: none;
	gap: 1rem;
}

@screen md {
	.navbar__links {
		margin-left: auto;
		display: flex;
	}
}

.navbar__menu {
	display: block;
	margin-left: auto;
	gap: 1rem;
}

@screen md {
	.navbar__menu {
		display: none;
	}
}

.navbar__link:hover {
	color: var(--color-primary);
}

.navbar__link.router-link-active {
	color: var(--color-primary);
}
</style>
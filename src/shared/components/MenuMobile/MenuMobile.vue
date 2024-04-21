<script setup lang="ts">
import { MainRouteLinks } from '@/router/list-routes';
import { onMounted, ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

const handleClickOutside = (event: MouseEvent) => {
	const menu = document.querySelector('.menu');
	if (menu && !menu.contains(event.target as Node)) {
		isOpen.value = false;
	}
}

</script>

<template>
	<div class="menu">
		<button
			class="menu__button"
			@click="toggleMenu"
		>
			<span>
				{{ isOpen ? 'X' : '=' }}
			</span>
		</button>
		<nav :class="`menu__nav accent-section ${isOpen ? 'block' : 'hidden'}`">
			<ul>
				<li
					v-for="{ name, title } in MainRouteLinks"
					:key="name"
				>
					<RouterLink
						:to="{ name }"
						@click="isOpen = false"
						class="menu__link"
					>
						{{ title }}
					</RouterLink>

				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped>
.menu {
	position: relative;
}

.menu__button {
	display: inline-block;
	line-height: 1;
	width: 30px;
	height: 30px;
	border: solid 1px var(--color-primary);
	border-radius: 5px;
}

.menu__nav {
	border: solid 1px var(--color-primary);
	width: 190px;
	position: absolute;
	right: 0;
}

.menu__link {
	width: 100%;
}

.menu__link:hover {
	color: var(--color-primary);
}

.menu__link.router-link-active {
	color: var(--color-primary);
}
</style>
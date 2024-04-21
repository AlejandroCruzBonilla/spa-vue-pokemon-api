<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAppTheme } from '@/shared/composables/useAppTheme';
import SunIcon from '@/shared/components/icons/SunIcon.vue';
import MonIcon from '@/shared/components/icons/MonIcon.vue';
import DisplayIcon from '@/shared/components/icons/DisplayIcon.vue';

const {
	appTheme,
	setLightTheme,
	setDarkTheme,
	setDefaultTheme
} = useAppTheme()
const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside);
});

const getCurrentIcon = () => {
	switch (appTheme.value) {
		case 'dark':
			return MonIcon
		case 'light':
			return SunIcon
		default:
			return DisplayIcon
	}
}

const handleClickOutside = (event: MouseEvent) => {
	const menu = document.querySelector('.menu-theme');
	if (menu && !menu.contains(event.target as Node)) {
		isOpen.value = false;
	}
}

const switchThemeItems = [
	{
		label: 'Light',
		icon: SunIcon,
		command: () => {
			setLightTheme()
			isOpen.value = false;
		},
	},
	{
		label: 'Dark',
		icon: MonIcon,
		command: () => {
			setDarkTheme()
			isOpen.value = false;
		},
	},
	{
		label: 'OS Default',
		icon: DisplayIcon,
		command: () => {
			setDefaultTheme()
			isOpen.value = false;
		},
	}
]
</script>

<template>
	<div class="menu-theme">
		<button
			class="menu-theme__button"
			@click="toggleMenu"
		>
			<component
				v-bind:is="getCurrentIcon()"
				width="20"
				height="20"
				fill="currentColor"
			/>
		</button>
		<nav :class="`menu-theme__nav accent-section ${isOpen ? 'block' : 'hidden'}`">
			<ul>
				<li
					v-for="{ label, icon, command } in switchThemeItems"
					:key="label"
					class="menu-theme__item"
					@click="command"
				>
					<component
						v-bind:is="icon"
						width="20"
						height="20"
						fill="currentColor"
					/>
					{{ label }}
				</li>
			</ul>
		</nav>
	</div>
</template>


<style scoped>
.menu-theme {
	position: relative;
}

.menu-theme__button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border: solid 1px var(--color-primary);
	border-radius: 5px;
}

.menu-theme__nav {
	border: solid 1px var(--color-primary);
	width: 190px;
	position: absolute;
	right: 0;
}

.menu-theme__item {
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 1rem;
}

.menu-theme__item:hover {
	color: var(--color-primary)
}
</style>

<script setup lang="ts">
import VueJsIcon from '@/shared/components/icons/VueJsIcon.vue';
import LinkedinIcon from '@/shared/components/icons/LinkedinIcon.vue';
import GitHubIcon from '@/shared/components/icons/GitHubIcon.vue';
</script>

<template>
	<div class="footer">
		<RouterLink
			:to="{ name: 'home' }"
			class="footer__brand"
		>
			<VueJsIcon
				width="40"
				height="40"
			/>
			<span>Pokemon Page</span>
		</RouterLink>

		<div class="footer__links">
			<a
				href="https://www.linkedin.com/in/alejandro-cruz-bonilla/"
				target="_blank"
			>
				<LinkedinIcon
					width="35"
					height="35"
				/>
			</a>
			<a
				href="https://github.com/AlejandroCruzBonilla"
				target="_blank"
			>
				<GitHubIcon
					width="35"
					height="35"
				/>
			</a>
		</div>
	</div>
</template>

<style scoped>
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem 0;
}

.footer__brand {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.footer__links {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
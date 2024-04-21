<script setup lang="ts">
import SpinnerIcon from '@/shared/components/icons/SpinnerIcon.vue';
</script>

<template>
	<div class="loading">
		<SpinnerIcon
			width="100"
			height="100"
		/>
	</div>
</template>

<style scoped>
.loading {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 50svh;
}
</style>
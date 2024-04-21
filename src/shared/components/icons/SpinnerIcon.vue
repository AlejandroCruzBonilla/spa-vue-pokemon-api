<template>
	<svg
		class="spinner-svg"
		viewBox="0 0 50 50"
	>
		<circle
			class="spinner-circle"
			cx="25"
			cy="25"
			r="20"
			fill="none"
			stroke-width="5"
		></circle>
	</svg>
</template>

<style scoped>
.spinner-svg {

	animation: rotate 1s linear infinite;
}

.spinner-circle {
	stroke: var(--color-primary);
	stroke-dasharray: 20;
}

@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}
</style>
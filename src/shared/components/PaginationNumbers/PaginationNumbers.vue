<script setup lang="ts">

import type { IPaginationNumbers, IPaginationNumbersEmits } from './interfaces';
import { ref, toRef, watch } from 'vue';

const props = defineProps<IPaginationNumbers>()
const emits = defineEmits<IPaginationNumbersEmits>()

const totalPages = toRef(props, 'totalPages')
const currentPage = toRef(props, 'currentPage')
const pagesNumbers = ref<number[]>([])
const currentPagesNumbers = ref<number[]>([])

const getPageNumbers = () => {
	const pages = [...Array(totalPages.value).keys()]
	return pages.map((page) => page + 1)
}

const getCurrentPageNumbers = () => {
	let previous: number | null = currentPage.value - 1;
	let next: number | null = currentPage.value + 1;

	if (currentPage.value === 1) previous = null;

	if (currentPage.value === pagesNumbers.value[pagesNumbers.value.length - 1]) next = null;
	const currentPageNumbers = pagesNumbers.value.filter(num => {
		return num === previous || num === currentPage.value || num === next;
	});

	return currentPageNumbers;
};

watch(totalPages, () => {
	pagesNumbers.value = getPageNumbers()
}, { immediate: true })

watch(currentPage, () => {
	currentPagesNumbers.value = getCurrentPageNumbers()
}, { immediate: true })

</script>
<template>
	<div class="flex flex-wrap justify-center gap-1">
		<button
			:disabled="currentPage === 1"
			@click="emits('changePage', 1)"
			class="btn"
		>
			&lt; &lt;
		</button>
		<button
			:disabled="currentPage === 1"
			@click="emits('changePage', currentPage - 1)"
			class="btn"
		>
			&lt;
		</button>
		<button
			:class="{
				active: currentPage === number,
				btn: true
			}"
			v-for="number in currentPagesNumbers"
			:key="number"
			@click="emits('changePage', number)"
		>
			{{ number }}
		</button>
		<button
			:disabled="currentPage === totalPages"
			@click="emits('changePage', currentPage + 1)"
			class="btn"
		>
			&gt;
		</button>
		<button
			:disabled="currentPage === totalPages"
			@click="emits('changePage', totalPages)"
			class="btn"
		>
			&gt;&gt;
		</button>
	</div>
</template>


<style scoped>
.btn {
	width: 35px;
	height: 35px;
	line-height: 1;
	border-radius: 5px;
	font-size: 0.9rem;
	font-weight: 600;
	text-shadow: 1px 1px 1px var(--color-background);
	padding: 5px;
}

@screen xs {
	.btn {
		font-size: 1rem;
		width: 40px;
		height: 40px;
		padding: 8px;
	}
}

.btn:not(:disabled):hover {
	background-color: var(--color-primary);
}

.active {
	background-color: var(--color-primary);
	cursor: not-allowed;
}

button:disabled {
	cursor: not-allowed;
}
</style>
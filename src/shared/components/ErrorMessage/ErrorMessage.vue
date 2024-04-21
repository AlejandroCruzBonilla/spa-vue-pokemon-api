<template>

	<div class="error">
		<slot>
			<h2 class="text-center p-8">
				!!Oops An unexpected error occurred, please try again later
			</h2>
		</slot>
	</div>

</template>

<style scoped>
.error {
	font-size: 2rem;
	font-weight: 600;
}
</style>

<template>
	<div class="home">
		<h1 class="mb-6">Por Alejandro Cruz Bonilla</h1>
		<section>
			<p>Esta página fue construida con diversas tecnologías y librerías de JavaScript como:</p>

			<ul class="my-8">
				<li>
					<a
						href="https://vuejs.org"
						target="_blank"
					>Vue.js
					</a>
				</li>
				<li>
					<a
						href="https://router.vuejs.org"
						target="_blank"
					>Vue Router
					</a>
				</li>
				<li>
					<a
						href="https://pinia.vuejs.org"
						target="_blank"
					>Pinia
					</a>
				</li>
				<li>
					<a
						href="https://tanstack.com/query/latest/docs/framework/vue/overview"
						target="_blank"
					>Tanstack Vue Query
					</a>
				</li>
				<li>
					<a
						href="https://tailwindcss.com"
						target="_blank"
					>Tailwindcss
					</a>
				</li>
				<li>
					<a
						href="https://www.typescriptlang.org"
						target="_blank"
					>TypeScript
					</a>
				</li>
				<li>
					<a
						href="https://vitejs.dev"
						target="_blank"
					>Vite
					</a>
				</li>
			</ul>

			<p>Esta Aplicación fue desplegada en un <a
					href="https://aws.amazon.com/es/s3/"
					target="_blank"
				>Bucket S3 de AWS</a> como pagina
				estática y distribuida en <a
					href="https://aws.amazon.com/es/cloudfront/"
					target="_blank"
				>CloudFront de AWS</a>
				como CDN.</p>

			<p>Toda la información relacionada con los pokemon es consumida con la api REST de <a
					href="https://pokeapi.co"
					target="_blank"
				>PokeApi</a>.
			</p>

			<p>El repositorio publico donde esta esta aplicación esta en mi <a
					href="https://github.com/AlejandroCruzBonilla/spa-vue-pokemon-api"
					target="_blank"
				>GitHub</a> </p>
		</section>

		<section>
			<p>
				Otros Proyectos en mi pagina personal <a
					href="https://alex139139.com/proyectos"
					target="_blank"
				>https://alex139139.com/proyectos</a>
			</p>
		</section>
	</div>
</template>

<style scoped>
.home ul {
	list-style: circle;
	padding-left: 2rem;
}

.home a {
	color: var(--color-primary);
}
</style>
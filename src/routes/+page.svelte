<script>
	let { data } = $props();
</script>

<main class="page">
	<section class="hero">
		<h1>{data.homepage.heroHeading}</h1>
		<p>{data.homepage.heroText}</p>
		<button>{data.homepage.buttonText}</button>
	</section>
</main>
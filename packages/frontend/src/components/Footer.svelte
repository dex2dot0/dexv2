<script lang="ts">
	import Linkedin from './brand-logos/Linkedin.svelte';
	import Github from './brand-logos/Github.svelte';
	import Discord from './brand-logos/Discord.svelte';

	let logoClassName =
		'w-12 h-12 fill-500 dark:fill-tertiary-500 hover:fill-tertiary-700 dark:hover:fill-tertiary-300 transition-colors';
</script>

<footer class="bg-tertiary-700/50 dark:bg-surface-800/50 pt-3">
	<hr class="h-1 bg-tertiary-500/50 dark:bg-surface-600/50 lg:mx-12 md:mx-0" />
	<div class="container mx-auto px-6 lg:px-8 py-4">
		<div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
			<div class="mb-4 lg:mb-0">
				<p class="text-xl font-bold text-900 dark:text-tertiary-500">cliff johnson | dex2.0</p>
			</div>
			<div class="flex justify-center lg:justify-start">
				<a
					href="https://github.com/dex2dot0"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-4"
				>
					<Github className={logoClassName} />
				</a>
				<a
					href="https://www.linkedin.com/in/cliffjjohnson/"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-4"
				>
					<Linkedin className={logoClassName} />
				</a>
				<a
					href="https://discordapp.com/users/dex2dot0"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-4"
				>
					<Discord className={logoClassName} />
				</a>
			</div>
		</div>
	</div>
</footer>

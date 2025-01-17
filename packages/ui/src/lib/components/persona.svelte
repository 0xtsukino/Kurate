<script lang="ts">
	import UserMultiple from './icons/user-multiple.svelte'
	import Forum from './icons/forum.svelte'

	let cls: string | undefined = undefined
	export { cls as class }
	export let name: string | undefined
	export let description: string | undefined
	export let postsCount: number
	export let picture: string | undefined
</script>

<div class="persona-card-wrapper">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class={`root ${cls}`} on:click>
		<div class="picture"><img src={picture} alt="persona" /></div>
		<div class="details">
			<div class="header">{name}</div>
			<div class="description">{description}</div>
			<div class="post-count">
				<div>
					<UserMultiple size={18} />
					{postsCount}
				</div>
				<div>
					<Forum size={18} />
					{postsCount}
				</div>
			</div>
		</div>
	</div>
	<hr />
</div>

<style lang="scss">
	.persona-card-wrapper {
		width: 100%;
		display: flex;
		align-items: flex-end;

		hr {
			@media (min-width: 688px) {
				display: none;
			}
		}
	}
	.root {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: nowrap;
		gap: var(--spacing-12);
		padding: var(--spacing-24);
		cursor: pointer;
		width: 100%;
		max-width: 498px;
		margin-inline: auto;

		@media (min-width: 1242px) {
			min-width: 350px;
		}

		&:hover {
			background-color: var(--grey-150);
		}

		@media (prefers-color-scheme: dark) {
		}
	}

	.picture {
		flex: 0 0 90px;
		aspect-ratio: 1;

		@media (min-width: 412px) {
			flex-basis: 100px;
		}

		@media (min-width: 688px) {
			flex-basis: 90px;
		}

		@media (min-width: 844px) {
			flex-basis: 100px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);

		.header {
			font-size: 16px;
			font-weight: 600;
		}

		.description {
			font-size: 14px;
		}

		.post-count {
			font-size: 12px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: nowrap;
			gap: var(--spacing-12);

			> div {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: nowrap;
				gap: var(--spacing-3);
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.root {
			&:not(:last-child) {
				border-bottom-color: var(--grey-500);
			}

			&:hover {
				background-color: var(--grey-500);
			}
		}

		:global(svg) {
			fill: var(--grey-100);
			width: 16px;
			height: 16px;
		}
	}
</style>

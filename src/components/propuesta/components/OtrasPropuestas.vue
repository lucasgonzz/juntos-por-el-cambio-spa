<template>
	<b-row 
	class="row-otras-propuestas">
		<b-col
		cols="12"
		lg="8">
			<div 
			class="otras-propuestas">
				<h3  
				data-aos="zoom-out"
				class="title">
					Otras propuestas
				</h3>
				<vue-horizontal-list 
				:items="items" :options="options">
					<template v-slot:default="{ item }">
						<propuesta
						with_margin
						:propuesta="item"></propuesta>	
					</template>
				</vue-horizontal-list>
			</div>
		</b-col>
	</b-row>
</template>
<script>
import propuestas from '@/mixins/propuestas'
export default {
	mixins: [propuestas],
	components: {
		VueHorizontalList: () => import('vue-horizontal-list'),
		Propuesta: () => import('@/components/home/propuestas/Propuesta'),
	},
	computed: {
		options() {
			return {
				responsive: [
					{ end: 576, size: 1 },
					{ start: 576, end: 768, size: 2 },
					{ start: 768, size: 3 },
				],
				navigation: {
					start: 0,
				},
				items: {
					padding: 10,
				},
				list: {
					// 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
					windowed: 1000,

					// Because: #app {padding: 80px 24px;}
					padding: 40,
				},
				position: {
					start: 1,
				},
				autoplay: { play: true, repeat: true, speed: 3000 },
			}
		},
		items() {
			return this.propuestas
		}
	},
	methods: {
		img(url) {
			return require('@/assets/contacto/'+url+'.png')
		},
		setItem(item) {
			window.open(item.link)
		}
	}
}
</script>
<style lang="sass">
.row-otras-propuestas
	background: #face14 
.otras-propuestas
	width: 100% 
	padding: 20px
	// margin-left: -15px
	// background: url('@/assets/propuestas/background1.svg')
	// background-position: -170px 50px
	h3 
		font-size: 40px
		margin: 40px 0
	.propuesta
		width: 90%
		margin: auto
</style>
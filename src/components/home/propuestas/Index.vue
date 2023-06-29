<template>
	<b-row
	id="propuestas">
		<b-col
		cols="12"
		lg="9">
			<h2
			data-aos="zoom-in-right">
				Nuestras Propuestas
			</h2>
			<div class="cont-propuestas">
				<propuesta
				v-for="(propuesta, i) in propuestas"
				:key="i"
				:propuesta="propuesta"></propuesta>
			</div>
		</b-col>
	</b-row>
</template>
<script>
import propuestas from '@/mixins/propuestas'
export default {
	mixins: [propuestas],
	components: {
		Propuesta: () => import('@/components/home/propuestas/Propuesta'),
	},
}
</script>
<style lang="sass">
.cont-propuestas
	display: flex 
	flex-direction: row 
	flex-wrap: wrap
	background: #FFF
	.propuesta
		@media screen and (max-width: 576px)
			width: 100%
		@media screen and (min-width: 576px) and (max-width: 768px)
			width: 48%
		@media screen and (min-width: 768px) and (max-width: 1200px)
			width: 31%
		@media screen and (min-width: 1200px) 
			width: 23%
		margin: 0 1% 50px
</style>
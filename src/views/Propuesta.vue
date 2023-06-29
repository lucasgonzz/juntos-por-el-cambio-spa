<template>
	<div>
		<b-row>
			<b-col
			cols="12"
			lg="8">
				<h3
				class="propuesta-descriptions"
				data-aos="flip-down"
				data-aos-duration="1500"
				v-for="(description, i) in propuesta.descriptions"
				:key="i">
					{{ description }}
				</h3>
				<div
				class="propuestas"
				data-aos="zoom-in"
				data-aos-duration="1500"
				v-for="(_propuesta, i) in propuesta.propuestas"
				:key="'f-'+i">
					<h6
					class="description-title">
						{{ _propuesta.title }}
					</h6>
					<p
					v-for="(description, i) in _propuesta.descriptions"
					:key="'g-'+i">
						{{ description }}
					</p>
				</div>

			</b-col>
		</b-row>
		<otras-propuestas></otras-propuestas>
	</div>
</template>
<script>
import propuestas from '@/mixins/propuestas'
export default {
	mixins: [propuestas],
	components: {
		OtrasPropuestas: () => import('@/components/propuesta/components/OtrasPropuestas'),
	},
	computed: {
		propuesta() {
			return this.propuestas.find(propuesta => {
				return propuesta.name == this.$route.params.propuesta.replaceAll('-', ' ')
			})
		}
	},
	// created() {
	// 	this.$scrollToTop()
	// },
}
</script>
<style lang="sass">
.propuesta-descriptions
	margin: 70px 0 
	font-weight: bold
	font-size: 25px 
	text-align: justify

.propuestas
	margin-bottom: 50px

.description-title 
	text-align: left 
	margin: 20px 0
	font-weight: bold
	font-size: 20px

p
	text-align: left 
	margin: 10px 0
</style>
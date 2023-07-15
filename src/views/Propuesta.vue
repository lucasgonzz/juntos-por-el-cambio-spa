<template>
	<div>
		<b-row>
			<b-col
			cols="12"
			md="10"
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
				data-aos="fade-right"
				data-aos-duration="1500"
				v-for="(_propuesta, i) in propuesta.propuestas"
				:key="'f-'+i">
					<h6
					class="description-title">
						{{ _propuesta.title }}
					</h6>
					<div
					v-for="(description, i) in _propuesta.descriptions"
					:key="'g-'+i">
						<p
						v-if="typeof description == 'string'">
							{{ description }}
						</p>
						<div
						v-else-if="typeof description == 'object' && typeof description.descriptions != 'undefined'">
							<p
							class="sub-description"
							v-for="(_description, i) in description.descriptions"
							:key="'h-'+i">
								{{ _description }}
							</p>
						</div>
						<div
						data-aos="zoom-in-left"
						class="description-with-image"
						v-else-if="typeof description == 'object'">
							<img :src="getImage(description.img, false)" alt="">
							<p>
								{{ description.text }}
							</p>
						</div>
					</div>
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

.description-with-image
	display: flex 
	flex-direction: row 
	justify-content: left
	align-items: flex-start 
	margin: 0 0 15px 30px
	img
		width: 25px
		margin-right: 15px
	p 
		text-align: left
		margin: 0

.sub-description
	padding-left: 30px
</style>
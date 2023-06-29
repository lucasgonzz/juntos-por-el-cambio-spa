<template>
	<div 
	data-aos="flip-down"
	data-aos-duration="500"
	class="propuesta">
		<div class="hover">
			<h4>
				{{ propuesta.name }}
			</h4>
			<p
			class="description">
				{{ propuesta_description }}
			</p>
			<button
			@click="verPropuesta(propuesta)">
				Ver mas
			</button>
		</div>

		<img :src="getImage(propuesta)" alt="">
		<h4>
			{{ propuesta.name }}
		</h4>
		<p
		class="description">
			{{ propuesta_description }}
		</p>
	</div>
</template>
<script>
import propuestas from '@/mixins/propuestas'
export default {
	mixins: [propuestas],
	props: {
		propuesta: Object,
	},
	computed: {
		propuesta_description() {
			if (this.propuesta.descriptions[0].length >= 170) {
				return this.propuesta.descriptions[0].substring(0, 170)+'...'
			}
			return this.propuesta.descriptions[0]
		}
	},
	methods: {
		verPropuesta(propuesta) {
			this.$router.push({name: 'propuesta', params: {propuesta: propuesta.name.replaceAll(' ', '-')}})
			setTimeout(() => {
				this.$scrollToTop()
			}, 200)
		},
	}
}
</script>
<style lang="sass">
@import '@/sass/_custom.scss'
.propuesta 
	padding: 15px
	
	transition: all .1s
	cursor: pointer
	border-radius: 5px
	position: relative
	overflow-x: hidden
	img 
		width: 120px
		margin-bottom: 30px
	h4
		font-weight: bold
		margin-bottom: 30px
	.description
		text-align: justify
	.hover 
		width: 100%
		height: 100%
		position: absolute
		left: 0
		top: 0
		background-image: url('@/assets/propuestas/background3.png')
		background-position: right
		// background: $blue
		// background: linear-gradient(90deg, $blue 0%, ligthen($blue, 50) 82%, ligthen($blue, 100) 100%)
		transform: translateY(-110%)
		transition: all .3s
		color: #FFF
		padding: 30px 15px 0
		h1 
			margin-top: 30px
		button 
			background: none
			color: #FFF
			border: none
			padding: 10px 20px
			position: relative
			transition: 0.5s
			margin-top: 15px
			&::before,
			&::after 
				content: ''
				position: absolute
				width: 0.6em
				height: 0.6em
				background-color: $blue
				border-radius: 50%
				transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5)
				top: calc(50% - 0.6em / 2)
			

			&::before 
				left: 0 
				z-index: -1
			&::after 
				right: 0 
				z-index: -2

			&:hover 
				color: #333
			

			&:hover::before,
			&:hover::after 
				width: 100%
				height: 100%
				border-radius: 0
				background-color: $blue
			

			&:hover::before 
				top: 0
			

			&:hover::after 
				right: -0.4em
				filter: brightness(0.8)
			
	&:hover 
		transform: scale(1.02)
		& > .hover 
			transform: translateX(0)


</style>
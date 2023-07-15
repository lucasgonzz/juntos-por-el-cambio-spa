<template>
	<div 
	:class="route_name == 'home' ? 'nav-full-height' : 'nav-short-height'"
	class="nav-banner">
		<div 
		:class="route_name == 'home' ? 'img-background-home' : 'img-background-propuesta'"></div>
		<div 
		:class="scroll > 0 ? 'nav-scroll' : ''"
		class="nav">
			<img 
			@click="toHome"
			src="@/assets/icon.png" alt="" 
			class="img-brand c-p apretable">

			<div 
			:class="route_name == 'home' ? 'items-black-sm' : ''"
			class="items">
				<div 
				@click="toHome"
				class="item d-none d-lg-inline-block">
					Inicio
				</div>
				<div 
				@click="scrollTo('#propuestas')"
				class="item">
					Propuestas
				</div>
				<div 
				@click="scrollTo('#contacto')"
				class="item">
					Contacto
				</div>
			</div>
		</div>

		<div 
		v-if="route_name == 'home'"
		class="banner">
			<h1
			data-aos="zoom-in"
			data-aos-duration="1500">
				Juntos por el Desarrollo
			</h1>
			<h4
			data-aos="zoom-in"
			data-aos-duration="2000">
				Sí, es por acá!
			</h4>
		</div>
		<div
		data-aos="zoom-in"
		class="banner-propuesta"
		v-else-if="route_name == 'propuesta'">
			<h2>
				{{ propuesta.name }}
			</h2>
			<img :src="getImage(propuesta)" alt="">
		</div>
	</div>
</template>
<script>
import propuestas from '@/mixins/propuestas'
export default {
	mixins: [propuestas],
	data() {
		return {
			scroll: 0,
			scroll_bottom: false,
		}
	},
	created() {
		window.addEventListener('scroll', () => {
			if (this.scroll < window.scrollY) {
				if (window.scrollY >= 80) {
					this.scroll_bottom = true
				}
			} else {
				this.scroll_bottom = false
			} 
			this.scroll = window.scrollY
		})
	},
	computed: {
		route_name() {
			return this.$route.name
		},
		propuesta() {
			return this.propuestas.find(propuesta => {
				return propuesta.name == this.$route.params.propuesta.replaceAll('-', ' ')
			})
		}
	},
	methods: {
		toHome() {
			if (this.route_name != 'home') {
				this.$router.push({name: 'home'})
			}
			this.$scrollToTop()
		},
		scrollTo(element) {
			if (this.route_name != 'home') {
				this.$router.push({name: 'home'})
				setTimeout(() => {
					this.$scrollTo(element)
				}, 500) 
			} else {
				this.$scrollTo(element)
			}
		},
	}
}
</script>
<style lang="sass">
@import '@/sass/_custom.scss'
.nav-full-height
	height: 100vh

.nav-short-height
	// @media screen and (max-width: 768px)
	// 	height: calc(100px + 70vh)
	// @media screen and (min-width: 768px)
	// 	height: calc(100px + 50vh)
	height: calc(100px + 50vh)

.nav-banner
	// width: 100vw
	position: relative
	overflow: hidden

	.img-background-home
		width: 100vw
		height: 100vh
		background-image: url('@/assets/banner.jpg')
		background-size: cover
		background-position: center

	.img-background-propuesta
		width: 100vw
		background-image: url('@/assets/propuestas/background.svg')
		background-size: cover
		background-position: center
		// @media screen and (max-width: 768px)
		// 	height: calc(70vh + 100px)
		// @media screen and (min-width: 768px)
		// 	height: calc(50vh + 100px)
		height: calc(50vh + 100px)

	.nav 
		position: fixed 
		left: 0
		top: 0
		height: 100px
		width: 100%
		display: flex 
		flex-direction: row 
		align-items: center 
		justify-content: space-between
		transition: all .4s
		z-index: 1000
		@media screen and (max-width: 768px)
			padding: 0 20px
		@media screen and (min-width: 768px)
			padding: 0 50px
		.items 
			display: flex 
			flex-direction: row 
			justify-content: flex-end
			.item 
				margin: 0 20px
				cursor: pointer 	
				font-weight: bold
				color: #FFF
		.img-brand 
			width: 100px
			transition: all .4s
		.items-black-sm
			.item
				@media screen and (max-width: 930px)
					color: #333 !important
					// text-shadow: 2px 2px 3px rgba(255,255,255,0.4) 
			
	.nav-scroll 
		background: #FFF
		height: 70px
		.img-brand 
			width: 70px
		.items 
			.item 
				color: #333
	.banner 
		position: absolute
		height: calc(100vh - 100px)
		width: 100%
		top: 100px 
		left: 0
		color: #fff
		@media screen and (max-width: 768px)
			padding-top: 260px 
		@media screen and (min-width: 768px)
			padding-top: 300px 
		h1 
			font-weight: bold
			margin-bottom: 50px
			text-shadow: 2px 2px 3px rgba(0,0,0,0.4) 
			@media screen and (max-width: 768px)
				font-size: 60px
			@media screen and (min-width: 768px)
				font-size: 80px

	.banner-propuesta	
		position: absolute
		top: 100px 
		left: 0
		display: flex 
		z-index: 500
		@media screen and (max-width: 768px)
			flex-direction: column
			justify-content: center
			align-items: center
			// height: 70vh
		@media screen and (min-width: 768px)
			flex-direction: row-reverse
			justify-content: center
			align-items: center
			padding: 0 100px
		height: 50vh
		width: 100%
		h2 
			font-weight: bold
			text-shadow: 2px 2px 3px rgba(0,0,0,0.4) 
			@media screen and (max-width: 768px)
				margin: 0px 20px 20px !important
				font-size: 50px !important
				color: #FFF
			@media screen and (min-width: 768px)
				color: #FFF
				width: 50%
				font-size: 60px !important
		img 
			@media screen and (max-width: 768px)
				width: 120px
			@media screen and (min-width: 768px)
				width: 300px
</style>
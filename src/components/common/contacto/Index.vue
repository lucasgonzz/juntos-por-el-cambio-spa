<template>
	<b-row
	id="contacto"
	class="contact-info">
		<b-col
		cols="12"
		md="10"
		lg="8"
		xl="6">
			<h3  
			data-aos="zoom-in-right"
			class="title">
				Contacto
			</h3>
			<vue-horizontal-list 
			:items="items" :options="options">
				<template v-slot:default="{ item }">
					<div 
					class="contact-item"
					data-aos="flip-right"
					@click="setItem(item)">
						<img :src="img(item.img)" alt="">
						<p
						v-if="item.text">
							{{ item.text }}
						</p>
					</div>
				</template>
			</vue-horizontal-list>
		</b-col>
	</b-row>
</template>
<script>
export default {
	components: {
		VueHorizontalList: () => import('vue-horizontal-list'),
	},
	computed: {
		options() {
			return {
				responsive: [
					{ start: 0, size: 3 },
				],
				items: {
					padding: 0,
				},
				list: {
					// 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
					windowed: 0,

					// Because: #app {padding: 80px 24px;}
					padding: 10,
				},
				position: {
					start: 1,
				},
				autoplay: { play: true, repeat: true, speed: 3000 },
			}
		},
		items() {
			return [
				{
					img: 'instagram',
					link: 'https://www.instagram.com/marcelo.meda.7',
					text: 'Marcelo Meda',
				},
				{
					img: 'instagram',
					text: 'Ronald Frare',
					link: 'https://www.instagram.com/ronaldfrare_ok',
				},
				{
					img: 'instagram',
					text: 'Rosana Reynoso',
					link: 'https://www.instagram.com/rosanareynoso34',
				},
				{
					img: 'whatsapp',
					text: 'Sumate a nuestro equipo',
					link: 'https://api.whatsapp.com/send?phone=3444444056',
				},
				// {
				// 	img: 'whatsapp',
				// 	text: 'WhatsApp',
				// 	whatsapp: 'https://api.whatsapp.com/send?phone=3444622326',
				// },
				{
					img: 'mail',
					text: 'Correo',
					link: 'mailto:juntosporeldesarrolloguay@gmail.com'	
				}
			]
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
.contact-info
	background: #F1F1F1
	padding-bottom: 50px
	.title 
		font-size: 50px
		margin: 50px 0 
		text-align: center

	.contact-item 
		width: 110px
		display: flex
		flex-direction: column
		justify-content: center 
		align-items: center 
		img 
			width: 75px
			height: 75px
			cursor: pointer
			&:hover 
				transform: scale(1.07)
				transition: all .2s
		p 
			font-size: 12px
			font-weight: bold
			margin: 10px 0
			text-align: center
</style>
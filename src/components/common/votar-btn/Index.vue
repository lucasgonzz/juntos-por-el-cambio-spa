<template>
	<div 
	data-aos="flip-left"	
	class="btn-votar">
		<p>
			¿Dónde voto?
		</p>
		<img src="@/assets/votar.png" alt="">
		<a 
		href="https://padron.gob.ar" 
		target="_blank"
		class="coolBeans">
			Consultar padron 
		</a>
	</div>
</template>
<style lang="sass">
$color: #111
$primary: #FFAB9D

.btn-votar
	@media screen and (max-width: 768px)
		margin: 70px 0
	@media screen and (min-width: 768px)
		margin: 50px 0
	display: flex 
	flex-direction: column
	justify-content: center 
	align-items: center 
	p 
		font-size: 40px
		font-weight: bold
		margin: 30px 
	img 
		width: 250px
		margin-bottom: 40px 


	.coolBeans
		border: 2px solid currentColor
		border-radius: 3rem
		color: rgb(111, 199, 255)
		font-size: 30px
		font-weight: 100
		overflow: hidden
		padding: 10px 15px
		position: relative
		text-decoration: none
		transition: .2s transform ease-in-out
		will-change: transform
		z-index: 0

		&::after
			background-color: rgb(111, 199, 255)
			border-radius: 3rem
			content: ''
			display: block
			height: 100%
			width: 100%
			position: absolute
			left: 0
			top: 0
			transform: translate(-100%, 0) rotate(10deg)
			transform-origin: top left
			transition: .2s transform ease-out
			will-change: transform
			z-index: -1

		&:hover::after
			transform: translate(0, 0)

		&:hover
			border: 2px solid transparent
			color: rgb(92, 84, 106)
			transform: scale(1.05)
			will-change: transform

</style>
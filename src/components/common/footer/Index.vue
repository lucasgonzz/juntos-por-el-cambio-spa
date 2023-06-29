<template>
	<footer>
		<b-row
		class="row-info">
			<b-col
			cols="12"
			lg="4">
				<img 
				data-aos="fade-up"
				src="@/assets/icon.png" alt="">
				<h5
				data-aos="fade-up">
					Juntos por el desarrollo Gualeguay
				</h5>
				<p
				data-aos="fade-up"
				class="date">
					{{ new Date().getFullYear() }}
				</p>
			</b-col>
		</b-row>
		<b-row
		class="row-comerciocity-logo">
			<b-col
			cols="12">
				<div
				class="cont-logo">
					Desarrollado por 
					<img src="@/assets/comerciocity-logo.png" alt="">
				</div>
			</b-col>
		</b-row>
	</footer>
</template>
<style lang="sass">
footer 
	.row-info
		background: #DADADA
		img 
			width: 140px
			margin: 40px 0 -20px
		h5 
			font-size: 20px
			font-weight: bold
			margin: 40px 0
			text-align: center
		.date 
			font-size: 25px
			margin: 40px 0
			text-align: center
	.row-comerciocity-logo
		background: #A3A3A3
		.cont-logo
			display: flex
			flex-direction: row
			justify-content: flex-end
			align-items: center
			padding: 15px
		img 
			width: 80px
</style>
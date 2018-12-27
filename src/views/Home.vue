<template>
  <div class="body-container">
  	<div class="home-top-layer-container">
	    <div class="columns top-layer-container">
	    	<div class="column is-half top-left-column">
	    		<h1>discover the aquatic bowl experience</h1>
		      <a href="" class="">view the fish zones</a>
		      <img src="../assets/images/home/home-banner.jpg" class="home-banner-responsive">
	    	</div>
	    	<div class="column is-half top-right-column">
	    		<div class="home-banner"></div>
	    	</div>
	    </div>
	  </div>
  </div>
</template>

<script>
  export default {
    name: "Home",

    metaInfo: {
      title: 'Aquatic Bowl Museum | Home',
			meta: [
				{
					vmid: 'description',
        	'property': 'description',
        	'content': 'Home description'
      	},
				{
					vmid: 'og:title',
					property: 'og:title', 
					content: 'Home OG Title'
				},
				{
					vmid: 'og:type',
					property: 'og:type', 
					content: 'Home website'
				},
				{
					vmid: 'og:url',
					property: 'og:url', 
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/#/'
				},
				{
					vmid: 'og:image',
					property: 'og:image', 
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/home-banner.53bc1824.jpg'
				},
				{
					vmid: 'og:description',
        	'property': 'og:description',
        	'content': 'Home OG description'
      	}
    	]
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.home-top-layer-container {
		background: #38d6d3;
		.top-layer-container {
			margin: 0px auto;
			position: relative;
			max-width: 960px;
      width: 960px;
			@media screen and (min-width: 1472px) {
				max-width: 1344px;
    		width: 1344px;
			}
			@media screen and (min-width: 1280px) and (max-width: 1471px) {
				max-width: 1152px;
    		width: 1152px;
			}
			@media screen and (min-width: 1085px) and (max-width: 1279px) {
				max-width: 960px;
    		width: 960px;
			}
			@media (min-width: 850px) and (max-width: 1084px) {
				padding-left: 20px;
    		padding-right: 20px;
			}
    	.home-banner-responsive {
    		@media (min-width: 850px) {
    			display: none !important;
    		}
    		@media (max-width: 849px) {
    			display: block !important;
    		}
    	}
			.top-right-column {
				position: absolute;
    		top: 0px;
    		left: 50%;
    		width: 50%;
    		height: 100%;
    		padding: 0px;	
    		width: 100%;
    		display: none;
    		@media (min-width: 850px) {
    			display: block;
    		}
    		@media (max-width: 849px) {
    			display: none;
    		}
    		.home-banner {
    			background: url("../assets/images/home/home-banner.jpg");
    			background-size: cover;
    			background-position: top -221px center;
    			background-repeat: no-repeat;
    			width: 100vw;
    			height: 100%;
    			@media (min-width: 1085px) and (max-width: 1199px) {
    				background-position: top -140px center;
    			}
    			@media (min-width: 850px) and (max-width: 1084px) {
    				background-position: center center;
    			}
	        &::before {
	        	content: '';
	        	position: absolute;
	        	top: 0px;
	        	background: rgba(0,0,0,0.6);
	        	height: 100%;
	        	width: 100%;
	        	display: block;
	    		}
    		}		
			}
			.top-left-column {
				background: #38d6d3;
				padding-top: 105px;
	    	padding-bottom: 0px;
	    	padding-left: 0px;
	    	padding-right: 0px;
	    	width: 100%;
	    	@media (min-width: 850px) {
	    		width: 50%;
	    	}
	    	@media (max-width: 849px) {
	    		width: 100%;
	    	}
				h1 {
					font-size: 75px;
					line-height: 81px;
					font-weight: 800;
					text-transform: capitalize;
					color: #FFF;
					text-align: left;
					padding-top: 50px;
					@media (min-width: 850px) and (max-width: 1084px) {
						padding-right: 20px;
					}
					@media (max-width: 849px) {
						padding-left: 20px;
						padding-right: 20px;
					}
				}
				a {
					display: block;
					background: #FFF;
					color: #000;
					text-transform: uppercase;
					text-align: center;
					width: 300px;
					margin: 30px auto 105px 0px;
					border: 1px solid #FFF;
					line-height: 45px;
					height: 46px;
					transition: all 500ms ease;
					font-size: 16px;
					font-weight: 100;
					@media (max-width: 849px) {
						margin-left: 20px;
						margin-right: 20px;
					}
					&:hover {
						background: transparent;
						transition: all 500ms ease;
						color: #FFF;
					}
				}
			}
		}
	}
</style>
<template>
  <div class="body-container">
  	<div class="home-top-layer-container">
	    <div class="columns top-layer-container">
	    	<div class="column is-half top-left-column">
	    		<h1>discover the aquatic bowl experience</h1>
		      <a href="" class="">view the fish zones</a>
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
    name: "Home"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.home-top-layer-container {
		background: #38d6d3;
		.top-layer-container {
			margin: 0px auto;
			position: relative;
			@media screen and (min-width: 1472px) {
				max-width: 1344px;
    		width: 1344px;
			}
			@media screen and (1280px) and (max-width: 1471px) {
				max-width: 1152px;
    		width: 1152px;
			}
			@media screen and (min-width: 1088px) and (max-width: 1279px) {
				max-width: 960px;
    		width: 960px;
			}
			.top-right-column {
				position: absolute;
    		top: 0px;
    		left: 50%;
    		width: 50%;
    		height: 100%;
    		padding: 0px;	
    		width: 100%;	
    		.home-banner {
    			background: url("../assets/images/home-banner.jpg");
    			background-size: cover;
    			background-position: top -221px center;
    			background-repeat: no-repeat;
    			width: 100vw;
    			height: 100%;
    		}		
			}
			.top-left-column {
				background: #38d6d3;
				padding-top: 105px;
	    	padding-bottom: 0px;
	    	padding-left: 0px;
	    	padding-right: 0px;
				h1 {
					font-size: 75px;
					line-height: 81px;
					font-weight: 800;
					text-transform: capitalize;
					color: #FFF;
					text-align: left;
					padding-top: 50px;
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
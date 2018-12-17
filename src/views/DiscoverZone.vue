<template>
  <div class="body-container">
  	<div class="container">
  		<h1>discover zone</h1>
	  	<div class="discover-more-block-container">
	  		<div class="discover-more-block">
	  			<nav class="panel">
					  <p class="panel-heading">freshwater zone</p>
					  <div class="panel-block">
					  	<img src="../assets/images/zones/freshwater.jpg">
					  </div>
					  <div class="panel-block panel-footer">
					    <button class="button is-link is-outlined is-fullwidth">go to zone</button>
					  </div>
					</nav>
	  		</div>
	  		<div class="discover-more-block">
	  			<nav class="panel">
					  <p class="panel-heading">ocean zone</p>
					  <div class="panel-block">
					  	<img src="../assets/images/zones/ocean.jpg">
					  </div>
					  <div class="panel-block panel-footer">
					    <button class="button is-link is-outlined is-fullwidth">go to zone</button>
					  </div>
					</nav>
	  		</div>
	  		<div class="discover-more-block">
	  			<nav class="panel">
					  <p class="panel-heading">saltwater zone</p>
					  <div class="panel-block">
					  	<img src="../assets/images/zones/saltwater.jpg">
					  </div>
					  <div class="panel-block panel-footer">
					    <button class="button is-link is-outlined is-fullwidth">go to zone</button>
					  </div>
					</nav>
	  		</div>
	  		<div class="discover-more-block">
	  			<nav class="panel">
					  <p class="panel-heading">shark zone</p>
					  <div class="panel-block">
							<img src="../assets/images/zones/shark.jpg">
					  </div>
					  <div class="panel-block panel-footer">
					    <button class="button is-link is-outlined is-fullwidth">go to zone</button>
					  </div>
					</nav>
	  		</div>
	  	</div>
	  </div>
  </div>
</template>

<script>
  export default {
    name: "DiscoverZone",

    metaInfo: {
      title: 'Aquatic Bowl Museum | Discover Zone',
			meta: [
				{
					vmid: 'description',
        	'property': 'description',
        	'content': 'Discover Zone description'
      	},
				{
					vmid: 'og:title',
					property: 'og:title', 
					content: 'Discover Zone OG Title'
				},
				{
					vmid: 'og:type',
					property: 'og:type', 
					content: 'Discover Zone website'
				},
				{
					vmid: 'og:url',
					property: 'og:url', 
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/#/discover-zone'
				},
				{
					vmid: 'og:image',
					property: 'og:image', 
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/home-banner.53bc1824.jpg'
				},
				{
					vmid: 'og:description',
        	'property': 'og:description',
        	'content': 'Discover Zone OG description'
      	}
    	]
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
    h1 {
    	padding-top: 50px;
    	padding-bottom: 25px;
    	padding-left: 12px;
    	padding-right: 12px;
			font-size: 32px;
	    line-height: 1.2;
	    text-transform: uppercase;
	    font-weight: bold;
	    margin: 0px;
	    letter-spacing: 0.06em;
	    color: #000;
	    text-align: left;
  	}
    .discover-more-block-container {
    	.discover-more-block {
    		margin: 0px 0px 50px 0px;
    		display: inline-block;
    		width: 25%;
    		@media (min-width: 640px) and (max-width: 1199px) {
    			width: 50%;
    		}
    		@media (max-width: 639px) {
    			width: 100%;
    		}
    		.panel {
    			padding: 0px 12px;
    			.panel-heading {
    				background: none;
    				border: 1px solid #28817f;
    				text-transform: uppercase;
    				color: #363636;
    				padding-top: 0px;
    				padding-bottom: 0px;
    				line-height: 46.8px;
    				border-top-left-radius: 8px;
    				border-top-right-radius: 8px;
    			}
    			.panel-block {
    				padding: 0px;
    				border: 1px solid #28817f;
    				border-top: none;
    				&.panel-footer {
    					border-bottom-left-radius: 8px;
    					border-bottom-right-radius: 8px;
    					&:hover {
    						background: #28817f;
    					}
    				}
    				button {
    					border: none;
    					border-radius: 0px;
    					text-transform: uppercase;
    					color: #363636;
    					&:hover {
    						background: none;
    						color: #FFF;
    					}
    					&:focus {
    						background: none;
    					}
    				}
    			}
    		}
    	}
  	}
  }
</style>
<template>
  <div class="body-container">
    <div class="discover-top-layer-container">
      <div class="columns top-layer-container">
        <div class="column is-half top-left-column">
          <h1>discover zone</h1>
          <zone-tabs class="tabSection"/>
          <img src="../assets/images/zones/discover-banner.jpg" class="discover-banner-responsive">
        </div>
        <div class="column is-half top-right-column">
          <div class="discover-banner"></div>
        </div>
      </div>
    </div>
  	<div class="container">
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
  import ZoneTabs from '../components/ZoneTabs';

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
    },

    data() {
      return {

      }
    },

    components: {
      ZoneTabs
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
    .discover-top-layer-container {
      background: #008080;
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
        @media screen and (min-width: 850px) and (max-width: 1084px) {
          padding-right: 20px;
          padding-left: 20px;
        }
        @media (max-width: 849px) {
          width: 100%;
          max-width: 100%;
        }
        .discover-banner-responsive {
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
	    		@media (min-width: 850px) {
	    			display: block;
	    		}
	    		@media (max-width: 849px) {
	    			display: none;
	    		}
          .discover-banner {
            background: url("../assets/images/zones/discover-banner.jpg");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
          }   
        }
        .top-left-column {
          background: #008080;
          padding-bottom: 4.05555556rem;
          padding-top: 4.05555556rem;
          padding-left: 0px;
          padding-right: 30px;
		    	width: 100%;
		    	@media (min-width: 850px) {
		    		width: 50%;
		    	}
		    	@media (max-width: 849px) {
		    		width: 100%;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          h1 {
            font-size: 32px;
            line-height: 1.2;
            font-weight: 800;
            text-transform: capitalize;
            color: #FFF;
            text-align: left;
            @media (max-width: 849px) {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        }
      }
    }
    .discover-more-block-container {
    	margin-top: 50px;
    	.discover-more-block {
    		margin: 0px 0px 50px 0px;
    		display: inline-block;
    		width: 25%;
    		@media (min-width: 641px) and (max-width: 1199px) {
    			width: 50%;
    		}
    		@media (max-width: 640px) {
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
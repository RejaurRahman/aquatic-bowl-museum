<template>
  <footer>
  	<div class="container top-layer">
  		<div class="columns">
  			<div class="column is-4">
  				<div class="logo-column">
	  				<a href="/" class="footer-logo">
	  					<img src="../assets/images/logo.png">
	  				</a>
	  			</div>
  			</div>
  			<div class="column is-4">
  				<ul class="footer-menu">
  					<li><router-link to="/">Home</router-link></li>
      			<li><router-link to="/about">About</router-link></li>
      			<li><router-link to="/discover-zone">Discover Zone</router-link></li>
  					<li><router-link to="/privacy">Privacy Policy</router-link></li>
      			<li><router-link to="/termsofuse">Terms of Use</router-link></li>
  				</ul>
  			</div>
  			<div class="column is-4">
  				<ul class="footer-address">
  					<li>Finchley High Road</li>
  					<li>Leisure Way</li>
  					<li>Finchley</li>
  					<li>N12 0GL</li>
  					<li class="number">0800 000 0000</li>
  					<li class="email"><a href="mailto:info@aquaticbowlmuseum.com">info@aquaticbowlmuseum.com</a></li>
  				</ul>
  			</div>
  		</div>
  	</div>
  	<div class="container bottom-layer">
  		<p>Copyright {{ new Date().getFullYear() }} © Aquatic Bowl Museum. All rights reserved.</p>
  	</div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	footer {
		background: #444;
		position: relative;
    z-index: 2;
		.top-layer {
			padding: 5.16666667rem 0rem 1.38888889rem 0rem;
		}
		.bottom-layer {
			background: #4c4c4c;
			width: 100% !important;
			max-width: 100% !important;
			padding: 1.38888889rem 0rem;
			p {
				text-align: center;
				font-size: 1.125rem;
				line-height: 1.313rem;
				font-weight: 500;
				color: #FFF;
			}
		}
		.columns {
			margin: 0rem;
			.logo-column {
				height: 100%;
				.footer-logo {
					display: block;
					img {
						display: block;
						margin-right: auto;
						margin-left: auto;
						@media (max-width: 768px) {
							margin-left: 0rem;
						}
					}
				}
			}
			.footer-menu {
				@media (max-width: 768px) {
					text-align: left;
				}
				li {
					&:last-child {
						a {
							margin-bottom: 0rem;
						}
					}
					a {
						font-size: 1.125rem;
						line-height: 1.313rem;
						font-weight: 500;
						display: block;
						transition: all 500ms ease;
						cursor: pointer;
						color: #38d6d3;
						margin-bottom: 0.3125rem;
						&:hover {
							color: #FFF;
							transition: all 500ms ease;
						}
						&.router-link-exact-active {
							color: #FFF;
							transition: all 500ms ease;
						}
					}
				}
			}
			.footer-address {
				li {
					font-size: 1.125rem;
					line-height: 1.563rem;
					font-weight: 500;
					display: block;
					margin-bottom: 0rem;
					color: #FFF;
					text-align: left;
					&.number {
						margin-top: 1.875rem;
						background: transparent;
				    padding: 0rem;
				    height: inherit;
				    min-width: inherit;
				    margin-right: 0rem;
					}
					&.email {
						a {
							font-size: 1.125rem;
							line-height: 1.563rem;
							font-weight: 500;
							display: block;
							transition: all 500ms ease;
							cursor: pointer;
							color: #FFF;
							&:hover {
								color: #38d6d3;
								transition: all 500ms ease;
							}
						}
					}
				}
			}
		}
	}
</style>
<template>
  <div class="body-container">
    <div class="animal-profile-container">
      <carousel class="animal-selection" :speed="200" :paginationEnabled="true" :navigation-enabled="false" :center-mode="true" :min-swipe-distance="1" :loop="true" :perPage="1" :navigate-to="navigateTo">
        <slide>
          <div class="animal-bg">
            <img src="../assets/images/zones/saltwater/clownfish/1.jpg">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img src="../assets/images/zones/saltwater/clownfish/2.jpg">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img src="../assets/images/zones/saltwater/clownfish/3.jpg">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img src="../assets/images/zones/saltwater/clownfish/4.jpg">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img src="../assets/images/zones/saltwater/clownfish/5.jpg">
          </div>
        </slide>
      </carousel>
      <div class="box-container">
        <div class="container">
          <div class="wave-box"></div>
          <div class="animal-box">
            <h2>clownfish</h2>
            <h3>saltwater</h3>
            <p class="description">veryiuas miertyasa delouyse</p>
            <p class="description2">Beciegast nveriti vitaesaert asrtya aset aplicabrde ertyas nemo eniptaiades <br>volerna tuitaut. Binsequuntur magni dolor esieos qui ratione voluptatemsequi nesciunteas, <br>neque porro quisquam est qui dolorem.</p>
            <a href="#" class="btn-default btn1">view all</a>          
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <a @click="BackToTop()" class="backToTop">
      <img src="../assets/images/back-to-top.png">
      <span>scroll to top</span>
    </a>
  </div>
</template>

<script>
  import Footer from "../views/Footer.vue"
  import { Carousel, Slide } from "vue-carousel"

  export default {
    name: "AnimalProfile",

    data() {
      return {
        navigateTo: 0
      }
    },

    metaInfo: {
      title: 'Aquatic Bowl Museum | Animal Profile',
			meta: [
				{
					vmid: 'description',
        	'property': 'description',
        	'content': 'Animal Profile description'
      	},
				{
					vmid: 'og:title',
					property: 'og:title', 
					content: 'Animal Profile OG Title'
				},
				{
					vmid: 'og:type',
					property: 'og:type', 
					content: 'Animal Profile website'
				},
				{
					vmid: 'og:url',
					property: 'og:url', 
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/#/Animal Profile'
				},
				{
					vmid: 'og:image',
					property: 'og:image', 
					content: ''
				},
				{
					vmid: 'og:description',
        	'property': 'og:description',
        	'content': 'Animal Profile OG description'
      	}
    	]
    },

    methods:{
      BackToTop() {
        document.querySelector('.headerSection').scrollIntoView({
          behavior: 'smooth'
        });
      },
    },

    mounted() {
      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.querySelector('.backToTop').style.display = "block";
          document.querySelector('.backToTop').style.animation = "showScrollTopBtn 2s 1";
        } else {
          document.querySelector('.backToTop').style.display = "none";
          document.querySelector('.backToTop').style.animation = "hideScrollTopBtn 2s 1";
        }
      }
    },

    components: {
      Footer,
      Carousel,
      Slide
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
  }
</style>
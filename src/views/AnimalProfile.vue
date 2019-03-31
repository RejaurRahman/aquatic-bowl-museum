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
            <div class="inner-box-shadow"></div>
            <h2>clownfish</h2>
            <h3>saltwater</h3>
            <p>
              <span>Though they spend much of their lives swimming among the tentacles of their host anemone, common clownfish occasionally leave to feed. They are plankton pickers, which means they visually seek and eat individual zooplankton or phytoplankton floating in the water column. They also likely eat algae from the reef surface. Because of the protection afforded them by their host anemones, common clownfish have few predators, but they are at risk of predation when they leave the anemone to feed.</span>
              <span>The common clownfish's lifecycle is both interesting and rare. Like all clownfishes, this species changes sex throughout its lifetime. Sex change is not particularly rare, but most species change from female to male. The clownfishes change from male to female. All individuals hatch as males and eventually join groups of a few individuals living together in an anemone. The largest individual of each group is the only female, and she and the largest male are the only two that reproduce. The large, dominant female lays her eggs on the reef surface, and the male fertilizes them. Together, they guard the nest from egg predators until they hatch. If anything happens to the female, the reproductive male changes sex, becoming the dominant female. The next largest male then becomes reproductively active, and the other males in the group continue to be subordinate.</span>
              <span>The common clownfish is extremely popular in the aquarium trade. Some individuals are bright orange and white, while others are dark black and white. The stark colors and the relationship with anemones make this species highly desirable for public and private aquaria. They have long been collected for sale in that industry, but recent efforts to promote reproduction in captivity have been successful, so many of the individuals for sale in pet stores have been reared in aquaria. The conservation status of this species is currently unknown, but it has likely been depleted in some areas as a result of its collection for the pet trade. Fortunately, the continued development of a captive breeding program has reduced the pressure on wild populations.</span>
            </p>
            <div class="columns image-vector-container">
              <div class="column is-two-fifths image-vector-inner">
                <img src="../assets/images/zones/saltwater/clownfish/vector.png" class="image-vector">
              </div>
            </div>       
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
    .animal-profile-container {
      .box-container {
        background: url("../assets/images/zones/pattern.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -24px;
        .wave-box {
          width: 100%;
          height: 84px;
          top: -84px;
          display: block;
          position: absolute;
          background: url("../assets/images/zones/wave.png");
          background-size: cover;
          background-repeat: no-repeat;
        }
        .animal-box {
          background: #FFF;
          padding: 0px 30px;
          .inner-box-shadow {
            background: url("../assets/images/zones/wave2.png");
            background-repeat: no-repeat;
            background-size: cover;
            width: 68px;
            height: 232px;
            top: 0px;
            left: -55px;
            display: block;
            position: absolute;
          }
          h2 {
            text-transform: uppercase;
            font-weight: 300;
            font-size: 50px;
            line-height: 56px;
            padding: 40px 0px 0px 0px;
          }
          h3 {
            text-transform: uppercase;
            font-weight: 300;
            font-size: 30px;
            line-height: 36px;
            color: #38d6d3;
            padding-bottom: 40px;
          }
          p {
            font-size: 18px;
            font-weight: 300;
            span {
              display: block;
              margin-bottom: 20px;
            }
          }
          .image-vector-container {
            margin: 0px;
            padding-top: 30px;
            align-items: center;
            justify-content: center;
            .image-vector-inner {
              padding: 0px;
              .image-vector {

              }
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div>
    <full-page :options="options" class="home-page" id="fullpage" ref="fullpage">
      <div class="section">
        <Slide1></Slide1>
      </div>
      <div class="section">
        <Slide2></Slide2>
      </div>
      <div class="section">
        <Slide3></Slide3>
      </div>
      <div class="section">
        <Footer></Footer>
      </div>
    </full-page>
    <div id="home-nav" :class="{ 'left-side-nav': directionSliderNav }">
      <ul>
        <li v-for="(k, index) in slideNavItems" :key="index">
          <a :href="'#' + k.id" :class="[isHovering == index && k.isActive ? 'hover-view': '']" @mouseover="mouseHover(k, index)" @mouseleave="mouseHoverOut(k)" :data-menuanchor="k.id" @click="moveTo(k.id)">
            <span class="nav-icon"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Slide1 from "../views/Home/Slide1.vue"
    import Slide2 from "../views/Home/Slide2.vue"
    import Slide3 from "../views/Home/Slide3.vue"
    import Footer from '../views/Footer.vue';

  export default {
    name: "Home",

    data() {
      return {
        slideNavItems: [
        	{
          	id: 'slide1', isActive: true
        	},
        	{
          	id: 'slide2', isActive: false
        	},
        	{
          	id: 'slide3', isActive: false
        	},
        ],
        isHovering: 0,
        lastHovering: null,
        currentSlide: 0,
        options: {
          scrollBar: false,
          licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
          scrollingSpeed: 1500,
          anchors: ['slide1', 'slide2', 'slide3', 'footer'],
          lockAnchors: true,
          responsiveWidth: 1024,
          responsiveHeight: 641,
          menu: '#home-nav',
          onLeave: this.onLeave,
        },
      }
    },

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
    },

    props: ["directionSliderNav"],

    mounted() {
      if (this.currentSlide == 1) {
        this.$emit('directionSliderNav', true);
      } else {
        this.$emit('directionSliderNav', false);
      }
    },

    methods: {
      moveTo(to) {
        this.currentSlide = parseInt(to.substr(5));
        fullpage_api.moveTo(to);
      },

      onLeave (origin, destination, direction) {
        this.isHovering = this.currentSlide = destination.index;

        if (destination.index == 1) {
          this.$emit('directionSliderNav', true);
        } else {
          this.$emit('directionSliderNav', false);
        }
      },

      mouseHover(k, index) {
        this.slideNavItems.forEach(element => {
          if (element.id == k.id) {
            this.isHovering = index;
            element.isActive = true;
          } else {
            element.isActive = false;
          }
        });
      },

      mouseHoverOut(item) {
        this.slideNavItems.forEach((element, k) => {
          if (k == this.currentSlide) {
            this.isHovering = this.currentSlide;
            element.isActive = true;
          }
        });
      },
    },

    components: {
      Slide1,
      Slide2,
      Slide3,
      Footer
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
<template>
  <div class="body-container">
    <div class="animal-profile-container">
      <carousel class="animal-selection" :speed="200" :paginationEnabled="true" :navigation-enabled="false" :center-mode="true" :min-swipe-distance="1" :loop="true" :perPage="1" :navigate-to="navigateTo">
        <slide>
          <div class="animal-bg">
            <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/1.jpg')">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/2.jpg')">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/3.jpg')">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/4.jpg')">
          </div>
        </slide>
        <slide>
          <div class="animal-bg">
            <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/5.jpg')">
          </div>
        </slide>
      </carousel>
      <div class="box-container">
        <button class="previous-profile" @click="show_previous_profile()"></button>
        <button class="next-profile" @click="show_next_profile()"></button>
        <div class="container">
          <div class="wave-box"></div>
          <div class="animal-box">
            <button class="previous-zone" @click="animalProfileBack()">back to zones</button>
            <div class="inner-box-shadow"></div>
            <h2>{{ animalDetail.heading }}</h2>
            <span class="scientific-name">{{ '(' + animalDetail.scientificName + ')' }}</span>
            <h3>{{ animalDetail.animalCategory }}</h3>
            <p v-html="animalDetail.animalDescription"></p>
            <div class="columns image-vector-container">
              <div class="column is-two-fifths image-vector-inner">
                <img v-if="selectedAnimal" :src="require('../assets/images/zones/' + animalDetail.animalCategory + '/' + selectedAnimal + '/vector.png')" class="image-vector">
              </div>
              <div class="column is-three-fifths did-you-know-box">
                <div class="did-you-know-box-inner">
                  <h5>did you know?</h5>
                  <hr>
                  <h4>{{ animalDetail.didYouKnow }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="container">
          <div class="related-section">
            <div class="related-block" v-for="(animal, index) in modified_json_data()" :key="index" v-if="selectedAnimal !== animal" @click="showProfile(animal, json[animal].animalCategory)">
              <div class="related-inner">
                <img :src="getImage(animal)" class="image-header">
                <div class="related-info">
                  <h2>{{ json[animal].heading }}</h2>
                  <p>{{ json[animal].scientificName }}</p>
                  <span>view profile ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="container">
          <div class="empty-block"></div>
        </div>
        <div class="fish-info-section">
          <div class="container">
            <div class="columns fish-info-column">
              <div class="column is-one-third">
                <h4>distribution</h4>
                <p>{{ animalDetail.distribution }}</p>
              </div>
              <div class="column is-one-third">
                <h4>economy/habitat</h4>
                <p>{{ animalDetail.ecosystemHabitat }}</p>
              </div>
              <div class="column is-one-third">
                <h4>feeding habits</h4>
                <p>{{ animalDetail.feedingHabits }}</p>
              </div>
            </div>
            <div class="columns fish-info-column">
              <div class="column is-one-third">
                <h4>conservation status</h4>
                <p>{{ animalDetail.conservationStatus }}</p>
              </div>
              <div class="column is-one-third">
                <h4>taxanomy</h4>
                <p>{{ animalDetail.taxanomy }}</p>
              </div>
            </div>
            <div class="social-section">
              <p>share:</p>
              <div class="social-section-icons">
                <div class="share_twitter">
                  <a class="aquatic-bowl-museum_shareTwitter" data-destination-url="" target="_blank" title="Tweet">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path d="M34.5 16.7c0 0 3.2 0.4 4.1-0.2 -1.5 0.8-3 1.8-4.2 3 0 0 1.2 13.3-12.7 16.5 0 0-7.2 0.6-12.3-3.3 0 0 5.5 1.5 8.5-1.9 0 0-5.1 0.5-6.4-3.5 1.2 0 2.4-0.2 3.6-0.5 0 0-4.8-0.9-4.7-5.7 0.8 0.5 1.7 0.7 2.7 0.7 0 0-4-3.6-1.5-7.8 0 0 5.3 6.5 11.9 6.1 -0.8-3 1-6.1 4.1-6.9 2-0.5 4 0.1 5.4 1.5 1.4-0.3 2.7-0.9 3.9-1.9C36.8 13 36.9 14.8 34.5 16.7z"/>
                      <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                    </svg>
                  </a>
                </div>
                <div class="share_facebook">
                  <a class="aquatic-bowl-museum_shareFacebook" data-destination-url="" target="_blank" title="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path d="M19.1 20.6h-4.9V25h4.9v13h5.8V25h5.8v-4.3h-5.8v-1.7c0-1.3 1.4-4 3.4-4h2.4v-4.3h-5.1C18.5 11.5 19.1 20.6 19.1 20.6z"/>
                      <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                    </svg>
                  </a>
                </div>
                <div class="share_linkedIn">
                  <a class="aquatic-bowl-museum_shareIn" data-destination-url="" target="_blank" title="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path d="M33.3 12H13.7c-0.9 0-1.7 0.7-1.7 1.7v19.7c0 0.9 0.8 1.7 1.7 1.7h19.6c0.9 0 1.7-0.7 1.7-1.7V13.7C35 12.7 34.2 12 33.3 12zM18.8 31.6h-3.4v-11h3.4V31.6L18.8 31.6zM17.1 19.1c-1.1 0-2-0.9-2-2 0-1.1 0.9-2 2-2s2 0.9 2 2C19.1 18.2 18.2 19.1 17.1 19.1zM31.6 31.6h-3.4v-5.3c0-1.3 0-2.9-1.8-2.9 -1.8 0-2 1.4-2 2.8v5.4H21v-11h3.3v1.5h0c0.5-0.9 1.6-1.8 3.2-1.8 3.5 0 4.1 2.3 4.1 5.2L31.6 31.6 31.6 31.6z"/>
                      <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                    </svg>
                  </a>
                </div>
                <div class="share_mail">
                  <a class="aquatic-bowl-museum_shareMail" data-destination-url="" target="_blank" title="Send email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path d="M37.5 34H12c-1.1 0-2-0.9-2-2V13.3h25.5c1.1 0 2 0.9 2 2V34zM11 14.3V32c0 0.6 0.5 1 1 1h24.5V15.3c0-0.6-0.5-1-1-1H11z"/>
                        <polygon points="23.8 26.9 13.6 20.7 14.2 19.8 23.8 25.7 33.3 19.8 33.9 20.7 "/>
                      <path d="M23.5 46C11.1 46 1 35.9 1 23.5 1 11.1 11.1 1 23.5 1 35.9 1 46 11.1 46 23.5 46 35.9 35.9 46 23.5 46zM23.5 2C11.6 2 2 11.6 2 23.5 2 35.4 11.6 45 23.5 45 35.4 45 45 35.4 45 23.5 45 11.6 35.4 2 23.5 2z"/>
                    </svg>
                  </a>
                </div>
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
import profiles from '../assets/js/animal-data'
import Footer from "../views/Footer.vue"
import { Carousel, Slide } from "vue-carousel"

export default {
  name: "AnimalProfile",

  data() {
    return {
      navigateTo: 0,
      selectedAnimal: this.$route.params.animalname,
      animal_category: this.$route.params.category,
      routeParamsCountry: this.$route.params.animalname
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

  computed: {
    json () {
      return profiles
    },
    animalDetail () {
      if (this.$route.params.animalname != undefined) {
        return this.json[this.$route.params.animalname];
      } else {
        this.selectedAnimal = this.$route.params.animalname;
        return this.json[this.$route.params.animalname];
      }
    }
  },

  methods: {
    modified_json_data() {
      var fish_array = [];
      if (this.animal_category != null) {
        for (var key in this.json) {
          if (this.json[key].animalCategory == this.animal_category) {
            fish_array.push(key);
          }
        }
        return fish_array;
      } else {
        fish_array = Object.keys(this.json);
        return fish_array;
      }
    },
    show_previous_profile() {
      var selectedAnimal = this.selectedAnimal;
      var new_selected_animal = '';

      this.modified_json_data().map(function (currentValue, index, a) {
        if (currentValue == selectedAnimal && index != a.length - 1) {
          new_selected_animal = a[index - 1];
        }

        if (currentValue == selectedAnimal && index == 0 ) {
          new_selected_animal = a[a.length - 1];
        }
      }, selectedAnimal);

      if (new_selected_animal != null) {
        this.showProfile(new_selected_animal, this.animal_category);
      }
    },
    show_next_profile() {
      var selectedAnimal = this.selectedAnimal;
      var new_selected_animal = '';

      this.modified_json_data().map(function (currentValue, index, a) {
        if (currentValue == selectedAnimal && index != a.length - 1) {
          new_selected_animal = a[index + 1];
        }

        if (currentValue == selectedAnimal && index == a.length - 1 ) {
          new_selected_animal = a[0];
        }
      }, selectedAnimal);

      if (new_selected_animal != null) {
        this.showProfile(new_selected_animal, this.animal_category);
      }
    },
    showProfile(animal, animal_category) {
      this.animal_category = animal_category;
      this.selectedAnimal = animal;
      this.$router.push({ name:'animalprofile', params:{ animalname: animal }});
      this.BackToTop();
      this.modified_json_data();
    },
    getImage(animal) {
      return require('../assets/images/zones/' + this.json[animal].animalCategory + '/' + animal + '/cover.jpg');
    },
    BackToTop () {
      document.querySelector('.body-container').scrollIntoView({
        behavior: 'smooth'
      });
    },
    animalProfileBack () {
      this.$router.push('/discover-zone')
      window.scrollTo(0, 0)
    }
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
    
    if (this.$route.params.animalname != undefined) {
      this.selectedAnimal = this.$route.params.animalname;
    } else {
      this.selectedAnimal = this.$route.params.animalname;
    }

    this.modified_json_data();
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
  padding-top: 6.563rem;
  .animal-profile-container {
    .box-container {
      background: url("../assets/images/zones/pattern.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: -1.5rem;
      position: relative;
      @media screen and (max-width: 1024px) {
      	margin-top: -1.25rem;
      	background: none;
    	}
      .did-you-know-box {
        padding: 0rem 3.125rem;
        @media screen and (max-width: 768px) {
        	margin-top: 2.5rem;
        	padding: 0rem;
      	}
        .did-you-know-box-inner {
          background: #008080;
          padding: 1.875rem 2.5rem;
          h5 {
            font-size: 1rem;
            line-height: 1.25rem;
            letter-spacing: 2px;
            font-weight: 600;
            color: #FFF;
            text-transform: uppercase;
            margin-bottom: 0.9375rem;
          }
          hr {
            width: 2.188rem;
            margin-left: auto;
            margin-right: auto;
            height: 0.25rem;
            background: #38d6d3;
          }
          h4 {
            font-size: 1.5rem;
            line-height: 1.875rem;
            font-weight: bold;
            color: #FFF;
          }
        }
      }
      .previous-profile, .next-profile {
        position: fixed;
        background: url("../assets/images/back-to-top.png");
        background-repeat: no-repeat;
        background-size: cover;
        width: 3rem;
        height: 1.5rem;
        margin-top: -1.5rem;
        cursor: pointer;
        top: 50%;
        z-index: 1;
        appearance: none;
        border: none;
        padding: 0rem;
        &:focus {
          outline: none;
        }
      }
      .previous-profile {
        left: 0.9375rem;
        transform: rotate(-90deg);
        @media (max-width: 639px) {
        	left: 0.3125rem;
      	}
      }
      .next-profile {
        right: 0.9375rem;
        transform: rotate(90deg);
        @media (max-width: 639px) {
        	right: 5px;
      	}
      }
      .wave-box {
        width: 100%;
        height: 5.25rem;
        top: -5.25rem;
        display: block;
        position: absolute;
        z-index: 2;
        background: url("../assets/images/zones/wave.png");
        background-size: cover;
        background-repeat: no-repeat;
        @media screen and (max-width: 1024px) {
        	width: calc(100% - 3.75rem);
        	left: 1.875rem;
      	}
      	@media screen and (max-width: 639px) {
      		height: 3.75rem;
      		top: -3.75rem;
      	}
      }
      .animal-box {
        background: #FFF;
        padding: 0rem 1.875rem;
        @media screen and (max-width: 1024px) {
        	padding: 1.875rem 1.875rem 0rem 1.875rem;
      	}
        .inner-box-shadow {
          background: url("../assets/images/zones/wave2.png");
          background-repeat: no-repeat;
          background-size: cover;
          width: 4.25rem;
          height: 22rem;
          top: 0rem;
          left: -3.438rem;
          display: block;
          position: absolute;
          @media screen and (max-width: 1024px) {
          	display: none;
        	}
        }
        .previous-zone {
          appearance: none;
          box-shadow: none;
          border: 2px solid #008080;
          color: #008080;
          background: #FFF;
          text-transform: uppercase;
          font-weight: 300;
          position: absolute;
          top: 0rem;
          left: 2.5rem;
          cursor: pointer;
          width: 10.94rem;
          height: 2.5rem;
          font-size: 1.125rem;
          padding-left: 0.9375rem;
          padding-right: 0.9375rem;
          display: block;
          transition: all 500ms ease;
          @media screen and (max-width: 1024px) {
				    top: 1.875rem;
				    left: 1.875rem;
      		}
          &:hover {
            background: #008080;
            color: #FFF;
            transition: all 500ms ease;
          }
          &:focus {
            outline: none;
          }
        }
        h2 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 3.125rem;
          line-height: 3.5rem;
          padding: 2.5rem 0rem 0rem 0rem;
          @media screen and (max-width: 639px) {
          	margin-top: 2.5rem;
        	}
        }
        span {
          &.scientific-name {
            display: block;
            font-style: italic;
            text-transform: capitalize;
            font-size: 1.875rem;
            line-height: 2.25rem;
            font-weight: 300;
            color: #2c3e50;
            margin-bottom: 0.3125rem;
          }
        }
        h3 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: 1.875rem;
          line-height: 2.25rem;
          color: #38d6d3;
          padding-bottom: 2.5rem;
        }
        p {
          font-size: 1.125rem;
          font-weight: 300;
          span {
            display: block;
            margin-bottom: 1.25rem;
            &.highlighted-text {
              color: #38d6d3;
              font-size: 1.25rem;
            }
          }
        }
        .image-vector-container {
          margin: 0rem;
          padding-top: 1.875rem;
          align-items: center;
          justify-content: center;
          padding-bottom: 3.75rem;
          .image-vector-inner {
            padding: 0rem;
          }
        }
      }
      .divider {
        background: url("../assets/images/zones/divider.png");
        background-repeat-x: repeat;
        background-size: contain;
        height: 0.8125rem;
        width: 100%;
      }
      .related-section {
        padding: 2.813rem 0rem 3.75rem 0rem;
        background: #FFF;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .related-block {
          width: 33.33%;
          flex-basis: auto;
          cursor: pointer;
          @media screen and (min-width: 62.5rem) and (max-width: 768px) {
          	width: 50%;
        	}
        	@media screen and (max-width: 639px) {
        		width: 100%;
        	}
          .related-inner {
            padding: 1.25rem;
            .related-info {
              border-left: 1px solid #008080;
              border-right: 1px solid #008080;
              border-bottom: 1px solid #008080;
              margin-top: -0.4375rem;
              padding: 1.25rem;
              text-align: left;
              background: #008080;
              h2 {
                text-transform: uppercase;
                font-size: 1.375rem;
                line-height: 1.625rem;
                font-weight: bold;
                margin-bottom: 0.9375rem;
                color: #38d6d3;
              }
              p {
                text-transform: capitalize;
                font-size: 1.063rem;
                line-height: 1.438rem;
                font-weight: 400;
                margin-bottom: 0.9375rem;
                color: #38d6d3;
              }
              span {
                text-transform: uppercase;
                display: block;
                font-size: 1.063rem;
                line-height: 1.438rem;
                font-weight: bold;
                color: #FFF;
              }
            }
          }
        }
      }
      .empty-block {
        height: 60px;
      }
      .fish-info-section {
        background: #008080;
        padding: 2.5rem 0rem;
        position: relative;
        z-index: 2;
        .fish-info-column {
          margin: 0rem;
          text-align: left;
          h4 {
            text-transform: uppercase;
            font-size: 1.125rem;
            font-weight: 800;
            color: #000;
          }
          p {
            color: #FFF;
            font-size: 1.125rem;
            font-weight: 300;
          }
        }
        .social-section {
          margin: 2.5rem 12px 0px 12px;
          border-top: 1px solid #38d6d3;
          p {
            color: #000;
          }
          .share_twitter, .share_facebook, .share_linkedIn, .share_mail {
            a {
              svg {
                fill: #38d6d3;
              }
              &:hover {
                svg {
                  fill: #000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="body-container">
    <div class="discover-top-layer-container">
      <div class="columns top-layer-container">
        <div class="column is-half top-left-column">
          <h1>discover zone</h1>
          <zone-tabs class="tabSection" />
          <img src="../assets/images/zones/discover-banner.jpg" class="discover-banner-responsive">
        </div>
        <div class="column is-half top-right-column">
          <div class="discover-banner"></div>
        </div>
      </div>
    </div>
    <div class="discover-zone-section">
      <div class="top-section">
        <div class="left-column aligned-flex">
          <div class="left-inner position-relative">
            <img src="../assets/images/zones/discover-zone/clownfish.jpg">
            <div class="profile-copy" @click="AnimalProfileButton('clownfish', 'saltwater')">
              <div class="zone-icon">
                <img src="../assets/images/zones/discover-zone/clownfish-icon.png">
              </div>
              <h2>view the clownfish</h2>
              <hr>
              <p>The main character in the 2003 animated film Finding Nemo, was a clownfish.</p>
            </div>
          </div>
        </div>
        <div class="right-column aligned-flex">
          <div class="right-inner-top flexed-full">
            <div class="left-top-column aligned-flex">
              <div class="left-inner scaled-image" @click="AnimalProfileButton('giant-pacific-octopus', 'ocean')">
                <img src="../assets/images/zones/discover-zone/ocean.jpg">
                <div class="animal-icon">
                  <img src="../assets/images/zones/discover-zone/octopus-icon.png">
                </div>
              </div>
            </div>
            <div class="right-top-column centered-right-flex">
              <div class="right-inner" @click="AnimalProfileButton('bottlenose-dolphin', 'ocean')">
                <div class="zone-icon">
                  <img src="../assets/images/zones/discover-zone/ocean-icon.png">
                </div>
                <h2>view ocean zone</h2>
                <hr>
              </div>
            </div>
          </div>
          <div class="right-inner-bottom flexed-full">
            <div class="left-bottom-column centered-left-flex">
              <div class="left-inner" @click="AnimalProfileButton('atlantic-tarpon', 'saltwater')">
                <div class="zone-icon">
                  <img src="../assets/images/zones/discover-zone/saltwater-icon.png">
                </div>
                <h2>view saltwater zone</h2>
                <hr>
              </div>
            </div>
            <div class="right-bottom-column aligned-flex">
              <div class="right-inner scaled-image" @click="AnimalProfileButton('hippo-tang', 'saltwater')">
                <img src="../assets/images/zones/discover-zone/saltwater.jpg">
                <div class="animal-icon">
                  <img src="../assets/images/zones/discover-zone/hippo-tang-icon.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-section">
        <div class="left-column aligned-flex">
          <div class="left-inner-top flexed-full">
            <div class="left-top-column centered-left-flex">
              <div class="left-inner" @click="AnimalProfileButton('blacktip-shark', 'shark')">
                <div class="zone-icon">
                  <img src="../assets/images/zones/discover-zone/shark-icon.png">
                </div>
                <h2>view shark zone</h2>
                <hr>
              </div>
            </div>
            <div class="right-top-column aligned-flex">
              <div class="right-inner scaled-image" @click="AnimalProfileButton('scalloped-hammerhead-shark', 'shark')">
                <img src="../assets/images/zones/discover-zone/shark.jpg">
                  <div class="animal-icon">
                    <img src="../assets/images/zones/discover-zone/hammerhead-shark-icon.png">
                  </div>
              </div>
            </div>
          </div>
          <div class="left-inner-bottom flexed-full">
            <div class="left-bottom-column aligned-flex">
              <div class="left-inner scaled-image" @click="AnimalProfileButton('goldfish', 'freshwater')">
                <img src="../assets/images/zones/discover-zone/freshwater.jpg">
                <div class="animal-icon">
                  <img src="../assets/images/zones/discover-zone/goldfish-icon.png">
                </div>
              </div>
            </div>
            <div class="left-bottom-column centered-right-flex">
              <div class="right-inner" @click="AnimalProfileButton('arapaima', 'freshwater')">
                <div class="zone-icon">
                  <img src="../assets/images/zones/discover-zone/freshwater-icon.png">
                </div>
                <h2>view freshwater zone</h2>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="right-column aligned-flex">
          <div class="right-inner position-relative" @click="AnimalProfileButton('bottlenose-dolphin', 'ocean')">
            <img src="../assets/images/zones/discover-zone/dolphin.jpg">
            <div class="profile-copy">
              <div class="zone-icon">
                <img src="../assets/images/zones/discover-zone/dolphin-icon.png">
              </div>
              <h2>view the dolphin</h2>
              <hr>
              <p>Dolphins communicate with each other by clicking, whistling and other sounds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
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
    <Footer></Footer>
    <a @click="BackToTop()" class="backToTop">
      <img src="../assets/images/back-to-top.png">
      <span>scroll to top</span>
    </a>
  </div>
</template>

<script>
  import ZoneTabs from '../components/ZoneTabs';
  import Footer from "../views/Footer.vue"

  export default {
    name: "DiscoverZone",

    data() {
      return {

      }
    },

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
          content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/home-banner.jpg'
        },
        {
          vmid: 'og:description',
          'property': 'og:description',
          'content': 'Discover Zone OG description'
        }
      ]
    },

    methods:{
      BackToTop() {
        document.querySelector('.headerSection').scrollIntoView({
          behavior: 'smooth'
        });
      },
      AnimalProfileButton(animalname, animal_category) {
        this.$router.push({ path: '/animalprofile/' + animalname, name: 'animalprofile', params: { animalname: animalname, category: animal_category }})
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
    },

    components: {
      ZoneTabs,
      Footer
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 6.563rem;
    .social-section {
      margin-top: 3.125rem;
    }
    .discover-top-layer-container {
      background: #008080;
      .top-layer-container {
        margin: 0rem auto;
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
          padding-right: 1.875rem;
          padding-left: 1.875rem;
          width: 100%;
          max-width: 100%;
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
          top: 0rem;
          left: 50%;
          height: 100%;
          padding: 0rem;
          width: 100%;
          @media (min-width: 850px) and (max-width: 1024px) {
            width: 50%;
          }
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
          padding-left: 0rem;
          padding-right: 1.875rem;
          width: 100%;
          @media (min-width: 850px) {
            width: 50%;
          }
          @media (max-width: 849px) {
            width: 100%;
            padding-right: 0rem;
            padding-bottom: 0rem;
          }
          h1 {
            font-size: 2rem;
            line-height: 1.2;
            font-weight: 800;
            text-transform: capitalize;
            color: #FFF;
            text-align: left;
            @media (max-width: 849px) {
              padding-left: 1.25rem;
              padding-right: 1.25rem;
            }
          }
        }
      }
    }
  }

  .discover-zone-section {
    h2 {
      text-align: center;
      text-transform: uppercase;
      color: #444;
      font-size: 1.5rem;
      line-height: 1.1;
      font-weight: 500;
      margin-bottom: 0.625rem;
      margin-top: 0rem;
      padding: 0rem 0.9375rem;
    }
    hr {
      position: relative;
      border: none;
      margin: 0.9375rem 0rem 3.125rem 0rem;
      padding: 0rem;
      height: 0.125rem;
      background: none;
      &::before {
        content: "";
        position: absolute;
        top: 0rem;
        left: 25%;
        width: 50%;
        height: 2rem;
        background: #444;
        margin-bottom: 2.5rem;
      }
    }
    .position-relative {
      position: relative;
      .profile-copy {
        position: absolute;
        top: 0rem;
        height: calc(100% - 0.375rem);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0,0.4);
        h2, p {
          color: #FFF;
        }
        hr {
          &::before {
            background: #FFF;
          }
        }
        p {
          text-align: center;
          font-size: 1.125rem;
          line-height: 1.1;
          font-weight: 300;
          margin: 0rem;
          padding: 0rem 0.9375rem;
        }
      }
    }
    .zone-icon {
      margin-bottom: 1.875rem;
      @media (max-width: 639px) {
        margin-top: 1.875rem;
      }
    }
    .left-top-column, .left-bottom-column, .right-top-column, .right-bottom-column {
      &.aligned-flex {
        @media (min-width: 62.5rem) and (max-width: 849px) {
          width: 50%;
        }
        @media (max-width: 639px) {
          width: 100%;
        }
      }
    }
    .right-column {
      &.aligned-flex {
        @media (max-width: 849px) {
          margin-top: -0.4375rem;
        }
      }
    }
    .aligned-flex {
      display: inline-flex;
      width: 50%;
      @media (max-width: 849px) {
        width: 100%;
        .left-inner {
          &.scaled-image {
            height: 100% !important;
          }
        }
        .right-inner {
          &.scaled-image {
            height: 100% !important;
          }
        }
      }
      .left-inner {
        &.scaled-image {
          height: calc(100% - 0.375rem);
        }
      }
      .right-inner {
        &.scaled-image {
          height: calc(100% - 0.4375rem);
        }
      }
      .scaled-image {
        overflow: hidden;
        position: relative;
        &:hover {
          .animal-icon {
            opacity: 1;
            transition: all 800ms ease;
          }
          img {
            transform: scale(2);
            transition: all 800ms ease;
          }
        }
        .animal-icon {
          position: absolute;
          top: 0rem;
          height: 100%;
          width: 100%;
          transform: translateY(50%);
          opacity: 0;
          transition: all 800ms ease;
          img {
            transform: scale(1) !important;
          }
        }
        img {
          transform: scale(1);
          transition: all 800ms ease;
        }
      }
    }
    .flexed-full {
      display: flex;
      width: 100%;
      @media (max-width: 639px) {
        display: block;
      }
    }
    .centered-left-flex, .centered-right-flex {
      display: inline-flex;
      width: 50%;
      position: relative;
      @media (max-width: 639px) {
        width: 100%;
        display: block;
      }
      &::before {
        content: '';
        position: absolute;
        width: 0rem;
        height: 0rem;
        border-style: solid;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
      }
      .left-inner, .right-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        background: #e4e4e4;
        @media (max-width: 639px) {
          margin-top: -0.4375rem;
        }
      }
    }
    .centered-left-flex {
      &::before {
        border-width: 0.625rem 0rem 0.625rem 0.6875rem;
        border-color: transparent transparent transparent #e4e4e4;
        right: -0.6875rem;
      }
      .left-inner {
        height: calc(100% - 0.4375rem);
      }
    }
    .centered-right-flex {
      &::before {
        border-width: 0.625rem 0.6875rem 0.625rem 0rem;
        border-color: transparent #e4e4e4 transparent transparent;
        left: -0.6875rem;
      }
      .right-inner {
        height: calc(100% - 0.375rem);
      }
    }
    .top-section {
      display: flex;
      @media (max-width: 849px) {
        display: block;
      }
      .right-column {
        flex-wrap: wrap;
        .right-inner-bottom {
          margin-top: -0.375rem;
        }
      }
    }
    .bottom-section {
      display: flex;
      margin-top: -0.4375rem;
      @media (max-width: 849px) {
        display: block;
      }
      .left-column {
        flex-wrap: wrap;
        .left-inner-bottom {
          margin-top: -0.4375rem;
        }
      }
    }
  }
</style>

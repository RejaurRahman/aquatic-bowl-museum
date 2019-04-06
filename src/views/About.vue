<template>
  <div class="body-container">
    <div class="about-top-layer-container">
      <div class="columns top-layer-container">
        <div class="column is-half top-left-column">
          <h1>about aquatic bowl museum</h1>
          <p>We will take you on a ubelievable journey from the coastline to the ocean depths. You will be discovering a totally magical underwater world which is filled with amazing water creatures.</p>
          <p>Aquatic Bowl Museum has been located since April 2002 within Hollywood Bowl area in Finchley area, one of the most lucrative area in North London. Our Water Creature Museum hosts approximatley one million visitors every year.</p>
          <p>It is the second largest aquarium within London.</p>
          <p>Our guests will experience marine management as well as education from the top level in London as well as fun and interactive experience with all the sea and water creatures.</p>
          <a v-scroll-to="'.facilitySection'" class="scroll-down-section">view our facilities</a>
          <img src="../assets/images/about/about-banner.jpg" class="about-banner-responsive">
        </div>
        <div class="column is-half top-right-column">
          <div class="about-banner"></div>
        </div>
      </div>
    </div>
    <div class="about-opening-times">
      <div class="container about-opening-times-container">
        <div class="columns about-opening-times-columns">
          <div class="column is-full about-opening-times-inner">
            <h2>opening times</h2>
            <p>Open 7 days a week (except Christmas Day)</p>
          </div>
        </div>
      </div>
      <div class="container about-opening-times-container">
        <div class="columns about-opening-times-columns">
          <div class="column is-half about-opening-times-inner">
            <p class="schedule">
              <span>
                <span class="days">Monday - Friday</span>
                <span class="times">10.00am - 19.00pm (last entry 18.00pm)</span>
              </span>
            </p>
          </div>
          <div class="column is-half about-opening-times-inner">
            <p class="schedule">
              <span>
                <span class="days">Saturday - Sunday</span>
                <span class="times">09.00am - 19.00pm (last entry 18.00pm)</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="container about-opening-times-container">
        <div class="columns about-opening-times-columns">
          <div class="column is-full about-opening-times-inner">      
            <small>Please note that during school holidays Aquatic Bowl Museum is very busy and queues may be longer than normal. We advise our customers to look about visiting outside these dates in order to avoid the long queues by using our priority entrance tickets.</small>
          </div>
        </div>
      </div>
    </div>
    <facility :facilities="jsonData" class="facilitySection"/>
    <meet-staff :staffs="jsonData2" class="staffSection"/>
    <working-with-us :accordions="jsonData3" class="workingWithUsSection"/>
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
  import Facility from '../components/Facility';
  import facilities from '../assets/js/facilities-data';
  import MeetStaff from '../components/MeetStaff';
  import staffs from '../assets/js/staff-data';
  import WorkingWithUs from '../components/WorkingWithUs';
  import accordions from '../assets/js/accordion-data';
  import Footer from "../views/Footer.vue"

  export default {
    name: "About",

    data() {
      return {

      }
    },

    metaInfo: {
      title: 'Aquatic Bowl Museum | About Aquatic Bowl Museum',
      meta: [
        {
          vmid: 'description',
          'property': 'description',
          'content': 'About description'
        },
        {
          vmid: 'og:title',
          property: 'og:title', 
          content: 'About OG Title'
        },
        {
          vmid: 'og:type',
          property: 'og:type', 
          content: 'About website'
        },
        {
          vmid: 'og:url',
          property: 'og:url', 
          content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/#/about'
        },
        {
          vmid: 'og:image',
          property: 'og:image', 
          content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/about-banner.963b25b7.jpg'
        },
        {
          vmid: 'og:description',
          'property': 'og:description',
          'content': 'About OG description'
        }
      ]
    },

    components: {
      Facility,
      MeetStaff,
      WorkingWithUs,
      Footer
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

    methods: {
      BackToTop() {
        document.querySelector('.headerSection').scrollIntoView({
          behavior: 'smooth'
        });
      },
    },

    computed: {
      jsonData: function() {
        return facilities;
      },
      jsonData2: function() {
        return staffs;
      },
      jsonData3: function() {
        return accordions;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
    .about-top-layer-container {
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
        @media screen and (min-width:1280px) and (max-width: 1471px) {
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
        .about-banner-responsive {
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
          .about-banner {
            background: url("../assets/images/about/about-banner.jpg");
            background-size: cover;
            background-position: center;
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
          p {
            font-size: 16px;
            color: #FFF;
            text-align: left;
            font-weight: normal;
            margin-top: 20px;
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
            margin: 30px auto 0px 0px;
            border: 1px solid #FFF;
            line-height: 45px;
            height: 46px;
            transition: all 500ms ease;
            font-size: 16px;
            font-weight: 100;
            @media (max-width: 849px) {
              margin-left: 20px;
              margin-right: 20px;
              margin-bottom: 50px;
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
    .about-opening-times {
      background: #ECECEC;
      padding: 50px 0px;
      .about-opening-times-container {
        .about-opening-times-columns {
          margin: 0px;
          .about-opening-times-inner {
            padding-top: 0px;
            padding-bottom: 0px;
            h2 {
              text-transform: uppercase;
              font-size: 32px;
              line-height: 1.2;
              font-weight: 800;
              color: #000;
              padding-bottom: 20px;
            }
            p {
              font-size: 16px;
              color: #000;
              font-weight: normal;
              padding-bottom: 20px;
              &.schedule {
                padding-bottom: 0px;
                span {
                  display: block;
                  text-align: left;
                  border-top: 1px solid #000;
                  border-bottom: 1px solid #000;
                  padding: 20px 0px;
                  &.days {
                    border: none;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 0px;
                    padding-bottom: 0px;
                    text-transform: uppercase;
                    font-size: 24px;
                    line-height: 30px;
                  }
                  &.times {
                    border: none;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 0px;
                    padding-bottom: 0px;
                  }
                }
              }
            }
            small {
              text-align: left;
              color: #000;
              display: block;
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 5px;
              font-weight: normal;
            }
          }
        }
        .about-opening-times-inner+.about-opening-times-inner {
          @media (max-width: 767px) {
            .schedule {
              span {
                border-top: none !important;
              }
            }
          }
        }
      }
    }
  }
</style>
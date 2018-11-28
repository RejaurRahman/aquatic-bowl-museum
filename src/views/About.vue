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
          <a class="scroll-down-section" @click="scrollToView()">view our facilities</a>
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
  </div>
</template>

<script>
  import Facility from '../components/Facility';
  import facilities from '../assets/js/facilities-data';

  export default {
    name: "About",

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

    data() {
      return {

      }
    },

    components: {
      Facility
    },

    computed: {
      jsonData: function () {
        return facilities;
      }
    },

    methods:{
      scrollToView() {
        // document.querySelector('.facilitySection').scrollIntoView({

      }
    }
  };
</script>
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
          .about-banner {
            background: url("../assets/images/about/about-banner.jpg");
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
          h1 {
            font-size: 32px;
            line-height: 1.2;
            font-weight: 800;
            text-transform: capitalize;
            color: #FFF;
            text-align: left;
          }
          p {
            font-size: 16px;
            color: #FFF;
            text-align: left;
            font-weight: normal;
            margin-top: 20px;
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
      }
    }
  }
</style>
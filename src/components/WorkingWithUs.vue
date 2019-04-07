<template>
  <div class="work-with-us-container">
    <div class="work-with-us-heading-copy"> 
      <div class="container">
        <div class="columns no-margin">
          <div class="column is-12"> 
            <h2>working with aquatic bowl museum</h2>
            <p>All placements for 2016 have now been fully booked. We apologise in advance for any disappointment this announcement may have caused. In January 2017, we will again start to employ staff and give work experience to full-time and part-time students. If you have the interest and apetite to pursue a career within marine life then why not get hands on experience at Aquatic Bowl Museum.</p>
            <p>At Aquatic Bowl Museum we tailor each placement to meet the individuals learning requirements. Most placements here will be spent valuable time with our Guest Experience team, where they will assist with guest interaction and education at first. Then you will be speading time helping out the retail and admissions departments. We make sure your placement is both flexible and beneficial for you, so you will gain experience in the department you would like and we will help you get the most out of the experience you gain with us.</p>
            <p>For applying for a role at Aquatic Bowl Museum please send your CV and a covering letter to: <a href="mailto:work.experience@aquaticbowlmuseum.co.uk">work.experience@aquaticbowlmuseum.co.uk</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container accordion-container">
      <div class="columns accordion-columns">
        <div class="column is-10 is-offset-1 accordion-column">
          <div class="accordion" :class="[accordion.isActive == true ? 'is-open' : 'is-closed']" v-for="(accordion, index) in getAccordions" :key="index">
            <div class="accordion-header" @click="toggleAccordion(index)">
              <span class="heading-title">{{accordion.question}}</span>
              <span class="arrow"></span>
            </div>
            <div class="accordion-body">
              <div class="accordion-content" v-html="accordion.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WorkingWithUs",
    data() {
      return {
        isOpen: false,
        getAccordions: this.accordions 
      }
    },

    methods:{
      toggleAccordion: function(index) {
        this.getAccordions[index].isActive = !this.getAccordions[index].isActive;
      }
    },

    props: [
      'accordions'
    ]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .work-with-us-heading-copy {
    h2 {
      text-transform: uppercase;
      font-size: 32px;
      line-height: 38px;
      font-weight: 800;
      color: #000;
      padding-top: 50px;
      padding-bottom: 20px;
      padding-left: 30px;
      padding-right: 30px;
    }
    p {
      font-size: 16px;
      color: #000;
      font-weight: normal;
      margin-bottom: 20px;
      padding-left: 30px;
      padding-right: 30px;
      a {
        color: #008080;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  .accordion-container {
    .accordion-columns {
      margin: 0px;
      .accordion-column {
        margin-bottom: 50px;
        .accordion {
          &:last-child {
            .accordion-header {
              border-bottom: 1px solid darken(#008080, 20%);
            }
            &.is-open {
              .accordion-body {
                border-top: 0px;
                border-bottom: 1px solid darken(#008080, 20%);  
              }
            }
          }
          &.is-open {
            .accordion-header {
              .arrow {
                transform: rotate(-135deg);
                position: relative;
                top: 20px;
              }
            }
            .accordion-body {
              border-top: 1px solid darken(#008080, 20%);
              border-left: 1px solid darken(#008080, 20%);
              border-right: 1px solid darken(#008080, 20%); 
            }
          }
          &.is-closed {
            .accordion-header {
              height: 64px;
            }
            .accordion-body {
              max-height: 0px;
            }
          }
          .accordion-header {
            cursor: pointer;
            line-height: 64px;
            height: 64px;
            background: #008080;
            color: #FFF;
            font-weight: 600;
            border-top: 1px solid darken(#008080, 20%);
            border-left: 1px solid darken(#008080, 20%);
            border-right: 1px solid darken(#008080, 20%);
            font-size: 20px;
            span {
              display: inline-block;
              @media (max-width: 639px) {
                &.heading-title {
                  font-size: 15px;
                  line-height: 19px;
                  width: 75%;
                }
                &.arrow {
                  padding: 7px !important;
                }
              }
              &.heading-title {
                width: 90%;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                height: 64px;
                vertical-align: top;
              }
              &.arrow {
                padding: 15px;
                transform: rotate(45deg);
                border-style: solid;
                border-color: #FFF;
                border-width: 0px 2px 2px 0px;
              }
            }
          }
          .accordion-body {
            padding: 0px;
            max-height: 10em;
            overflow: hidden;
            transition: all 300ms ease;
            .accordion-content {
              padding: 20px;
              font-size: 16px;
              color: #000;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
</style>
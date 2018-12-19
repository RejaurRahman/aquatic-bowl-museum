<template>
  <div>
    <div class="columns facilities-columns" v-for="i in Math.ceil(facilities.length / 3)">
      <div class="column facilities-inner" :key="index" v-for="(facility, index) in facilities.slice((i - 1) * 3, i * 3)"  >
        <div  class="facility-box">
          <div class="facility-bg" v-on:mouseover="mouseOverCheck = facility.image"  v-on:mouseleave="mouseOverCheck = ''" v-bind:style="mouseOverCheck === facility.image ?   {'background-image': 'url(' + require('../assets/images/about/buggy.jpg') + ')'} : {'background-image': 'url(' + require('../assets/images/about/'+facility.image+'.jpg') + ')'} "></div>
          <!-- <div class="facility-bg" v-on:mouseover="mouseOverCheck = facility.imagehover"  v-on:mouseleave="mouseOverCheck = ''" v-bind:style="mouseOverCheck === facility.imagehover ?   {'background-image': 'url(' + require('../assets/images/about/'+facility.imagehover+'.jpg') + ')'} : {'background-image': 'url(' + require('../assets/images/about/'+facility.image+'.jpg') + ')'}"></div> -->
          <h4>{{facility.name}}</h4>
          <p v-html="facility.bodycopy"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Facility",
    data() {
      return {
          mouseOverCheck: ''
      }
    },
    props: [
      'facilities'
    ]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .facilitySection {
    .facilities-columns {
      margin-bottom: 0px;
      .facilities-inner {
        padding: 0px 0px 20px 0px;
        .facility-box {
          .facility-bg {
            height: 40vh;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          h4 {
            text-transform: uppercase;
            font-size: 32px;
            line-height: 38px;
            font-weight: 800;
            color: #000;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 30px;
            padding-right: 30px;
          }
          p {
            font-size: 18px;
            line-height: 24px;
            color: #000;
            padding-left: 30px;
            padding-right: 30px;
          }
        }
      }
    }
  }
</style>
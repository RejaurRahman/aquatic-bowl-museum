<template>
  <div>
    <!-- <div class="columns facilities-columns" v-for="(i, ind1) in Math.ceil(getFacilities.length / 3)" :key="ind1"> -->
      <!-- <div class="column facilities-inner" :key="index" v-for="(facility, index) in getFacilities.slice((i - 1) * 3, i * 3)"> -->
    <div class="facilities-columns">
      <div class="facilities-inner" :key="index" v-for="(facility, index) in getFacilities">
        <div class="facility-box" @mouseenter="facility.changeImage = true" @mouseleave="facility.changeImage = false">
          <img v-if="facility.changeImage" :src="require('../assets/images/about/hover/'+ facility.imagehover+'.jpg')" >
          <img v-else :src="require('../assets/images/about/'+ facility.image+'.jpg')" >
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
        mouseOverCheck: '',
        currentImage:'',
        getFacilities: this.facilities,
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
        width: 33.33%;
        display: inline-block;
        vertical-align: top;
        @media (min-width: 640px) and (max-width: 1199px) {
          width: 50%;
        }
        @media (max-width: 639px) {
          width: 100%;
        }
        .facility-box {
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
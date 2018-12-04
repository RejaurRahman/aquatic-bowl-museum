<template>
  <div>
    <div class="columns facilities-columns" v-for="i in Math.ceil(facilities.length / 3)">
      <div class="column facilities-inner" :key="index" v-for="(facility, index) in facilities.slice((i - 1) * 3, i * 3)" :style="{backgroundImage: 'url( ../assets/images/about/' + facility.image + '.jpg)'}">
        <h4>{{facility.name}}</h4>
        <p v-html="facility.bodycopy"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Facility",
    data() {
      return {

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
    padding-top: 15px;
    padding-bottom: 20px;
    .facilities-columns {
      margin-bottom: 0px;
      .facilities-inner {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        h4 {
          text-transform: uppercase;
          font-size: 32px;
          line-height: 38px;
          font-weight: 800;
          color: #000;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 15px;
          padding-right: 15px;
        }
        p {
          font-size: 18px;
          line-height: 24px;
          color: #000;
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }
  }
</style>
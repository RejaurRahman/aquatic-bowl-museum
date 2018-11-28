<template>
  <div>
    <div class="columns facilities-columns" v-for="i in Math.ceil(facilities.length / 3)">
      <div class="column facilities-inner" :key="index" v-for="(facility, index) in facilities.slice((i - 1) * 3, i * 3)">
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .facilities-columns {
    margin-bottom: 0px;
    .facilities-inner {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
</style>
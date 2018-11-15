<template>
	<div class="columns facilities-columns">
		<div class="column facilities-inner" v-for="facility in facilities">
		  <h4>{{facility.name}}</h4>
		  <p v-html="facility.bodycopy"></p>
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

</style>
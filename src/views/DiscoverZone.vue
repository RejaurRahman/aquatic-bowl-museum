<template>
  <div class="body-container">
    <h1>This is discover zone page</h1>
  </div>
</template>

<script>
  export default {
    name: "DiscoverZone",

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
					content: 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/img/home-banner.53bc1824.jpg'
				},
				{
					vmid: 'og:description',
        	'property': 'og:description',
        	'content': 'Discover Zone OG description'
      	}
    	]
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body-container {
    padding-top: 105px;
  }
</style>
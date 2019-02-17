<template>
    <div class="home-container">
        <div class="home-slide-section">
            <div class="home-slide-inner">
                <div class="container">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide1",

        methods: {

        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home-container {
        .home-slide-section {
            background-image: url('../../assets/images/home/backgrounds/homepage-slide-1-bg.jpg');
            background-position: center center;
            background-size: cover !important;
        }
    }
</style>
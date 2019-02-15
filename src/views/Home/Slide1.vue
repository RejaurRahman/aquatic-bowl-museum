<template>
    <div class="home-container">
        <div class="home-slide-section">
            <div class="home-slide-inner">
                <div class="container">
                    <div class="columns no-margin no-margin-auto column-reversed">
                        <div class="column is-6 main-text suitable-vertically">

                        </div>
                        <div class="column is-6 slide-1-animated"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide1",

        methods: {
            countryScorecards() {
                this.$router.push("/policy-scorecards");
                window.scrollTo(0, 0)
            },
            reportPage() {
                this.$router.push("/report");
                window.scrollTo(0, 0)
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home-container {
        .home-slide-section {
            background-image: url('../../assets/images/home/backgrounds/homepage-slide-1-bg.jpg');
            background-position: center center;
            .home-slide-inner {
                @media (max-width: 1023px) {
                    display: block;
                }
            }
            .main-text {
                @media (max-width: 1023px) {
                    width: 100%;
                    padding: 0px 20px !important;
                    h1 {
                        padding-right: 0px !important;
                        padding-top: 52px;
                    }
                    p {
                        padding-right: 0px !important;
                    }
                    .astrazeneca-social {
                        padding: 0px 0px 50px 0px;
                    }
                }
            }
            .slide-1-animated {
                @media (max-width: 1023px) {
                    width: 100%;
                }
                @media (max-width: 639px) {
                    padding-left: 0px;
                }
                .slide-1-animated-inner {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    .responsive-logo {
                        display: flex !important;
                        position: absolute;
                        right: 30px;
                        top: 0px;
                    }
                }
            }
        }
    }
</style>
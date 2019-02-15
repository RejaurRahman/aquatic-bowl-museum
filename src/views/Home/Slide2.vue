<template>
    <div class="home-container">
        <div class="home-slide-section">
            <div class="home-slide-inner">
                <div class="container">
                    <div class="columns no-margin no-margin-auto column-reversed">
                        <div class="column is-6 main-text suitable-vertically">
                            <h1>
                                <span>preventing</span>
                                <span>non-communicable</span>
                                <span>disease in youth:</span>
                                <span class="gold-text">policy scorecards</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet, volumus ancillae cotidieque ei vim. Tale pertinacia ne usu, et error meliore vel. Pro ea probo primis sapientem, ad usu omnis fastidii deserunt. Omnis debet partiendo vel ex, an noster necessitatibus his. At mucius causae nec, nam imperdiet dignissim ad. At omnis lucilius phaedrum has. Nominati salutatus cu ius, ea mea movet facilis accusata.</p>
                            <div class="columns">
                                <div class="column is-half">
                                    <button class="blue-button link-icon key-line" @click="countryScorecards()"><span>see policy scorecards</span></button>
                                    <button class="grey-button download-icon key-line"><span>download workbook</span></button>
                                </div>
                            </div>
                            <div class="astrazeneca-social display-responsive">
                                <div class="astrazeneca_share_facebook">
                                    <a href="https://en-gb.facebook.com/astrazeneca/home/slide2" class="shareFacebook" target="_blank" title="Share on Facebook">
                                        <div class="facebook-icon"></div>
                                    </a>
                                </div>
                                <div class="astrazeneca_share_twitter">
                                    <a href="https://twitter.com/astrazeneca/home/slide2" class="shareTwitter" target="_blank" title="Tweet">
                                        <div class="twitter-icon"></div>
                                    </a>
                                </div>
                                <div class="astrazeneca_share_linkedIn">
                                    <a href="https://uk.linkedin.com/astrazeneca/home/slide2" class="shareIn" target="_blank" title="Share on LinkedIn">
                                        <div class="linkedin-icon"></div>
                                    </a>
                                </div>
                                <div class="astrazeneca_share_mail">
                                    <a href="mailto:?subject=astrazeneca%20home%20slide2" class="shareMail" target="_blank" title="Send email">
                                        <div class="mail-icon"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="display-alternate-desktop slide-2-image column is-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: "Slide2",

        methods: {
            countryScorecards() {
                this.$router.push("/policy-scorecards");
                window.scrollTo(0, 0)
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home-container {
        .home-slide-section {
            background-image: url('../../assets/images/home/backgrounds/homepage-slide-2-bg.jpg');
            background-position: right;
            background-size: contain !important;
            .home-slide-inner {
                @media (max-width: 1023px) {
                    padding-top: 0px;
                    .main-text {
                        width: 100%;
                        padding: 0px 20px !important;
                        h1 {
                            padding-right: 0px !important;
                            padding-top: 0px;
                            margin-top: -110px;
                        }
                        p {
                            padding-right: 0px !important;
                        }
                        .astrazeneca-social {
                            padding: 0px 0px 50px 0px;
                        }
                    }
                    .slide-2-image {
                        position: relative;
                        z-index: -1;
                        padding: 0px;
                        margin-top: 0px;
                        width: 100%;
                        img {
                            margin-right: 0px !important;
                        }
                    }
                }
            }
        }
    }
</style>
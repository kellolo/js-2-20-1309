<template>
    <div>
    <!-------------------------------HEADER START----------------------------->
        
        <siteheader />

        <headrnavigtion />


        
        <!-------------------------------HEADER END----------------------------->

        <topbanner />

        <!-------------------------------OFFER ST----------------------------->
        <main>
            <offer />
            <!-------------------------------OFFER END----------------------------->
            <!-------------------------------FETURED ST----------------------------->
            <div class="container">
                <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
                    <a href="#">
                        <div class="feturedHeadTop">Fetured Items</div>
                    </a>
                    <a href="#">
                        <div class="feturedHeadBottom">Shop for items based on what we featured in this week</div>
                    </a>
                </div>


                <!-- CATALOG -->
                <catalog />
                

                <div class="container px-0 d-flex justify-content-around">
                    <button type="button" class="btn btn-outline-secondary feturedButton">
                        Browse All Product<i class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>

                <!-------------------------------FETURED END----------------------------->
                <!-------------------------------OFFER FOR WOMEN ST----------------------------->

                <offerforwomen />
            </div>
            <!-------------------------------OFFER FOR WOMEN END----------------------------->

        </main>
        <!-------------------------------FOOTER ST----------------------------->

        <!-------------------------------SUBSCRIBE ST----------------------------->

        <subscribe />


        <!-------------------------------SUBSCRIBE END----------------------------->

        <sitefooter />
        <copyrighst />
        

        
    </div>
</template>

<script>
import siteheader from '../components/header.vue';
import headrnavigtion from '../components/header-navigation.vue';
import topbanner from '../components/topBanner.vue';
import offer from '../components/offer.vue';
import catalog from '../components/catalog.vue';
import offerforwomen from '../components/offerForWomen.vue';
import subscribe from '../components/subscribe.vue';
import sitefooter from '../components/footer.vue';
import copyrighst from '../components/copyrights.vue';

export default {
    components: { siteheader, headrnavigtion, topbanner, offer, catalog, offerforwomen, sitefooter, subscribe, copyrighst }
}
</script>

<style>

</style>
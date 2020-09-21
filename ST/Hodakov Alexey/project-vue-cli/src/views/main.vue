<template>
  <!--  -----------------------------HEADER START--------------------------- -->
  <div>
    <!-- -----------------------------HEADER END--------------------------- -->
    <div class="topBanner">
      <div class="container topBannerContent px-sm-0">
        <div class="bgText">
          <a href="#">
            <div class="topBannerText1">THE BRAND</div>
          </a>
          <a href="#">
            <div class="topBannerText2">
              OF LUXERIOUS
              <span>FASHION</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- ----------------------------OFFER ST--------------------------- -->
    <main>
      <div class="container px-sm-0">
        <div class="offers row mt-5 pt-0 pt-lg-5">
          <div class="col-sm-6 col-10 offset-1 offset-sm-0">
            <div class="offer">
              <a href="#">
                <div>hot deal</div>
                <div>for men</div>
              </a>
              <a href="#">
                <img src="../assets/imgs/offer1.jpg" alt />
              </a>
            </div>

            <div class="offer mt-4">
              <a href="#">
                <div>LUXIROUS&amp;trendy</div>
                <div>ACCESORIES</div>
              </a>
              <a href="#">
                <img src="../assets/imgs/offer2.jpg" alt />
              </a>
            </div>
          </div>

          <div class="col-10 offset-1 offset-sm-0 col-sm-6 d-flex flex-wrap">
            <div class="offer order-2 mt-4 mt-md-0 order-md-1">
              <a href="#">
                <div>30% offer</div>
                <div>women</div>
              </a>
              <a class="one" href="#">
                <img src="../assets/imgs/offer3.jpg" alt />
              </a>
            </div>

            <div class="offer pt-4 pt-sm-0 order-1 order-md-2 mt-0 mt-md-4">
              <a href="#">
                <div>new arrivals</div>
                <div>FOR kids</div>
              </a>
              <a class="one" href="#">
                <img src="../assets/imgs/offer4.jpg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- -----------------------------OFFER END--------------------------- -->
      <!-- -----------------------------FETURED ST--------------------------- -->
      <div class="container">
        <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
          <a href="#">
            <div class="feturedHeadTop">Fetured Items</div>
          </a>
          <a href="#">
            <div class="feturedHeadBottom">Shop for items based on what we featured in this week</div>
          </a>
        </div>

        <catalog />

        <div class="container px-0 d-flex justify-content-around">
          <router-link to="/products"><button type="button" class="btn btn-outline-secondary feturedButton">
            Browse All Product
            <i class="fas fa-long-arrow-alt-right"></i>
          </button></router-link>
        </div>
        <!-- -----------------------------FETURED END--------------------------- -->
        <!-- -----------------------------OFFER FOR WOMEN ST--------------------------- -->
        <div class="container mt-5">
          <div class="row">
            <div
              class="offerWomenLeft px-0 d-flex justify-content-center col-12 col-lg-8 justify-content-lg-start"
            >
              <div class="offerWomenBannerText">
                <div>
                  30%
                  <span>OFFER</span>
                </div>
                <div>FOR WOMEN</div>
              </div>
            </div>
            <div class="offerWomenRight d-flex flex-column px-0 col-12 col-lg-4">
              <div class="d-flex flex-column justify-content-center align-items-center flex-lg-row">
                <div class>
                  <img src="../assets/imgs/Truck.png" alt />
                </div>
                <div class="offerWomenDetail">
                  <div class="offerWomenDetailUp">Free Delivery</div>
                  <div class="offerWomenDetailBottom">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column justify-content-center align-items-center flex-lg-row">
                <div class>
                  <img src="../assets/imgs/percent.png" alt />
                </div>
                <div class="offerWomenDetail">
                  <div class="offerWomenDetailUp">Free Delivery</div>
                  <div class="offerWomenDetailBottom">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column justify-content-center align-items-center flex-lg-row">
                <div class>
                  <img src="../assets/imgs/Crown.png" alt />
                </div>
                <div class="offerWomenDetail">
                  <div class="offerWomenDetailUp">Free Delivery</div>
                  <div class="offerWomenDetailBottom">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- -----------------------------OFFER FOR WOMEN END--------------------------- -->
    </main>
  </div>
</template>

<script>
import catalog from "../components/catalog.vue";

export default {
  components: { catalog },
};
</script>

<style>
</style>
<template>
  <div>
    <Header />

    <div class="headerLine"></div>

    <Nav />

    <div class="newArrivalsBg pb-5 pt-5">
      <div class="px-md-0 container d-flex flex-column flex-sm-row justify-content-between align-items-center ">
        <div class="newArrivals">New Arrivals</div>
        <div class="newArrivalsPath mt-4 mt-sm-0">
          <a href="#">home</a>
          <a href="#">men</a>
          <a href="#">new arrivals</a>
        </div>
      </div>
    </div>

    <div class="topBanner">
      <div class="container topBannerContent px-sm-0">
        <div class="bgText">
          <a href="#">
            <div class="topBannerText1">THE BRAND</div>
          </a>
          <a href="#">
            <div class="topBannerText2">OF LUXERIOUS <span>FASHION</span></div>
          </a>
        </div>
      </div>
    </div>

    <Main />

    <div class="subscribeBg pt-5 pb-5 container-fluid">
      <div class="container px-0">
        <div class="row pb-5">
          <div class="subscribeReview d-flex col-lg-6 px-0 mt-5 mb-5 pr-0 pr-lg-5">
            <div class="col-2 col-md-2 d-flex align-self-start">
              <img src="../assets/imgs/Avatar.png" alt="Avatar" />
            </div>
            <div class="col-10 pl-5 pl-md-2 pl-lg-5">
              <blockquote class="reviewsTextMassage ">
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam
                condimentum mattis neque sed pretium”
              </blockquote>
              <div class="reviewsTextName mt-3">
                Bin Burhan
              </div>
              <div class="reviewsTextFrom">
                Dhaka, Bd
              </div>
              <div
                class="reviewsTextSwitch  mt-5 px-0
                                col-5
                                col-xl-4
                                col-lg-5
                                col-md-3
                                col-sm-4"
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div
            class="subscribeEmail d-flex justify-content-center flex-column align-items-center col-lg-6 border-left "
          >
            <div class="subscribeEmailHead">
              Subscribe
            </div>
            <div class="subscribeEmailText pb-4">
              FOR OUR NEWLETTER AND PROMOTION
            </div>
            <form class="subscribeForm input-group mb-3 pl-1 pl-sm-4">
              <input
                type="email"
                class="form-control pt-4 pb-4
                                                ml-xl-5
                                                col-lg-7 offset-lg-0 ml-lg-4
                                                col-md-6 offset-md-2
                                                col-sm-9 offset-sm-0"
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
  import header from '../components/header.vue';
  import nav from '../components/nav.vue';
  import main from '../components/main.vue';
  import footer from '../components/footer.vue';

  export default {
    components: {
      Header: header,
      Nav: nav,
      Main: main,
      Footer: footer,
    },
  };
</script>

<style></style>

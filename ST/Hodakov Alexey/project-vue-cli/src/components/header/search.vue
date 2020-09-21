<template>
  <div
    class="d-flex align-items-center col-12 pt-3 col-xl-5 pl-xl-4 px-xl-0 col-lg-5 pl-lg-5 pr-lg-0 px-lg-0 pt-lg-0 col-md-7 px-md-0 pt-sm-3"
  >
    <div class="dropdown">
      <button
        class="btn-lg btn btn-secondary dropdown-toggle"
        type="button"
       @click=" show = !show"
      >Browse</button>
      <div class="dropdown-menu"  v-show="show" @mouseleave="show = !show">
        <div class="dropdown-item">woman</div>
        <a href="#" class="dropdown-item" type="button">Dresses</a>
        <a href="#" class="dropdown-item" type="button">Tops</a>
        <a href="#" class="dropdown-item" type="button">Sweaters/Knits</a>
        <a href="#" class="dropdown-item" type="button">Jackets/Coats</a>
        <a href="#" class="dropdown-item" type="button">Blazers</a>
        <a href="#" class="dropdown-item" type="button">Denim</a>
        <a href="#" class="dropdown-item" type="button">Leggings/Pants</a>
        <a href="#" class="dropdown-item" type="button">Skirts/Shorts</a>
        <a href="#" class="dropdown-item" type="button">Accessories</a>

        <div class="dropdown-item">men</div>
        <a href="#" class="dropdown-item" type="button">Tees/Tank tops</a>
        <a href="#" class="dropdown-item" type="button">Shirts/Polos</a>
        <a href="#" class="dropdown-item" type="button">Sweaters</a>
        <a href="#" class="dropdown-item" type="button">Sweatshirts/Hoodies</a>
        <a href="#" class="dropdown-item" type="button">Blazers</a>
        <a href="#" class="dropdown-item" type="button">Jackets/vests</a>
      </div>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Search for Item..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>
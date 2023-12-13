<!-- @format -->


<template>
  <div class="sideContainer">
    <h1 class="headline">My Account</h1>
    <router-link
      v-for="(element, index) in sideElements"
      :key="index"
      class="sideElement"
      :to="element.route"
      active-class="active"
      exact
    >
      <i :class="element.icon"></i>
      <h6 class="text">{{ element.text }}</h6>
    </router-link>
    <hr />
    <router-link class="sideElement logout" to="/" active-class="active" exact>
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      <h6 class="text">Logout</h6>
    </router-link>
  </div>
</template>

<script>
  import * as ROUTES from "@/constants/routes";

  export default {
    data() {
      return {
        sideElements: [
          {
            icon: "far fa-user",
            text: "My Account",
            route: ROUTES.USER_ACCOUNT,
          },
          {
            icon: "fa-solid fa-location-dot",
            text: "Address",
            route: ROUTES.USER_ADDRESS,
          },
          {
            icon: "fa-solid fa-bag-shopping",
            text: "Orders",
            route: ROUTES.ORDERS,
          },
          { icon: "far fa-heart", text: "Wishlist", route: ROUTES.WHISH_LIST },
          { icon: "far fa-chart-bar", text: "Reports", route: ROUTES.REPORTS },
          {
            icon: "fa-solid fa-arrow-down",
            text: "Downloads",
            route: ROUTES.DOWNLOADS,
          },
          {
            icon: "fa-solid fa-headset",
            text: "Support",
            route: ROUTES.SUPPORT,
          },
        ],
      };
    },
  };
</script>

<style>
  .sideContainer {
    padding: 0.7rem 0rem;
    width: 30%;
    height: fit-content;
    background-color: #fbfbfb;
  }
  .headline {
    margin: 1rem;
    font-family: "Afacad", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
  }
  .sideElement {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem 0rem; 
    height: 3rem;
    color: #727272;
  }
  .sideElement > .text {
    margin-left: 1rem;
    font-size: 1rem;
  }
  .sideElement > i {
    margin-left: 1.3rem;
  }

  .logout {
    margin-top: 1rem;
    color: #46a358;
  }

  .active {
    border-left: 5px solid #46a358;
    background-color: white;
    color: #46a358;
  }
  hr {
    margin-top: 1rem;
    color: #46a358;
  }
  @media (max-width: 450px) {
    .sideContainer {
      display: none;
    }
  }
</style>

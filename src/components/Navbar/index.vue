<!-- @format -->

<style>
  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    padding: 0.2rem 0rem;
    margin: 1rem;
  }

  .navbar::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #46a358;
    position: absolute;
    bottom: -15px;
    left: 0;
    opacity: 0.2;
  }

  .logo {
    aspect-ratio: 4.41;
    object-fit: contain;
    object-position: center;
    width: 9.5rem;
    overflow: hidden;
    flex-shrink: 0;
    max-width: 100%;
    cursor: pointer;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    align-items: start;
  }

  .menuItem {
    color: #6b7280;
    font-size: 1rem;
    white-space: nowrap;
  }

  .icons {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1.25rem;
    margin-top: auto;
  }

  .icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 1.25rem;
    fill: #6b7280;
    overflow: hidden;
    flex-shrink: 0;
    max-width: 100%;
    cursor: pointer;
  }
  .cardIcon {
    width: 1.8rem;
  }

  .greenButton {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 0.3125rem;
    padding: 0.3125rem 0.625rem;
    background-color: #46a358;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .greenIcon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 1.25rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    max-width: 100%;
  }

  .loginText {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    align-self: flex-start;
  }
  @media (max-width: 450px) {
    #logo {
      width: 10rem;
    }
    .greenIcon {
      width: 1rem;
    }
    .greenIcon > img {
      width: 0.5rem;
    }
    .icons {
      gap: 0.5rem;
    }
    .menu {
      gap: 0.5rem;
    }
    .loginText {
      font-size: 0.8rem;
    }
    .greenButton {
      padding: 0.5rem 0.5rem;
      width: 8rem;
    }
  }
</style>

<template>
  <div class="navbar">
    <div class="logo">
      <img
        id="logo"
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/217c6540f992d1f03b2bcf5d1553025c89581363bd787774958760c331c006d9?"
      />
    </div>
    <div class="menu">
      <div class="menuItem">
        <router-link :to="ROUTES.LANDING"> Home </router-link>
      </div>
      <div class="menuItem">
        <router-link :to="ROUTES.SHOP"> Shop </router-link>
      </div>
      <div class="menuItem">
        <router-link :to="ROUTES.PLANT_CARES"> Plant Care </router-link>
      </div>
      <div class="menuItem">
        <router-link :to="ROUTES.BLOGS"> Blogs </router-link>
      </div>
    </div>
    <div class="icons">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b4ca5b1f75e0e56e61a164fc62dc9de6de6ff48eba14f391ae5c8b88412e32?"
        class="icon"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91382b9422ad33a0cad0126fd0e3584d09828b74febf5ae6643b30cd76e538d9?"
        class="icon cardIcon"
      />
      <div class="greenButton">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab9f4edc0afc42ff433d24680f3f693ff800c041b44505c4eca0edbe2aabb5a?"
          class="greenIcon"
        />
        <div class="loginText">Login</div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as ROUTES from "@/constants/routes";
  export default {
    data() {
      return {
        ROUTES: ROUTES,
      };
    },
  };
</script>

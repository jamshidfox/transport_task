<!-- @format -->

<template>
  <div class="base-layout">
    <Navbar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";

  export default {
    components: {
      Navbar,
    },
  };
</script>

<style>
  .base-layout {
    display: flex;
    flex-direction: column;
    margin: 0rem 7rem;
    /* width: 100vw; */
    min-height: 100vh; /* Set minimum height to full viewport height */
  }
  @media (max-width: 1000px) {
    .base-layout {
      margin: 0 5rem;
    }
  }
  @media (max-width: 450px) {
    :root {
      font-size: 12px;
    }
    .base-layout {
      margin: 0 1rem;
    }
    main > .home-container {
      height: 120rem;
      width: 40rem;
    }
  }
  main {
    flex-grow: 1;
    padding: 2rem;
  }
</style>

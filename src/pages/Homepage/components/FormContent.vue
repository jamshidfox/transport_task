<!-- @format -->

<template>
  <div class="form-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  @media (max-width: 1000px) {
    :root {
      font-size: 14px;
    }
  }
  .form-container {
    width: 70%;
    height: 70vh;
    margin-left: 2rem;
  }
  @media (max-width: 450px) {
    .form-container {
      height: auto;
      margin-left: 0;
    }
  }
</style>

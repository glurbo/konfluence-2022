<template>
  <div
    v-scroll-to="scrollTo"
    class="navButton"
  >
    <p> {{ name }} </p>
    <span class="dot" />
  </div>
</template>

<script>
export default {
  name: "NavbarButton",
  props: {
    name: String,
    scrollTo: String
  }
}
</script>

<style scoped>

  p {
    z-index: 10;
    margin-left: 1rem;
  }

  .navButton {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 1rem;
  }

  .navButton > .dot{
    -webkit-transition: -webkit-transform .8s ease-in-out;
    -ms-transition: -ms-transform .8s ease-in-out;
    transition: transform .8s ease-in-out;
  }

  .dot {
    height: 1rem;
    width: 1rem;
    background-color: #fed330;
    border-radius: 50%;
    display: inline-block;
    margin-left: 1rem;
  }


  .navButton:hover > .dot {
    -ms-transform:rotate(360deg) scale(20,20);
    -webkit-transform:rotate(360deg) scale(20,20);
    transform:rotate(360deg) scale(20,20);
  }

</style>
<template>
  <div class="wrapper">
    <slot name="content">
      <div class="text-padding">
        <h1 class="title">
          {{ title }}
        </h1>
        <p>{{ text }}</p>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Wrapper",
  components: {

  },
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped>
    .wrapper {
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: 25px;
      border-image-slice: 2;
      
      background-color: rgba(255, 255, 255, 0.1);
    
      border-radius: 1.5rem;
      overflow: hidden;
      padding: 0;
      margin: 10rem 0;
      text-align: justify;
      z-index: 10;
      position: relative;
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
      background: linear-gradient(320DEG,  rgba(255,255,255,0.1),  rgba(255,255,255,0.4) 150%);
    }

   .text-padding {
     padding: 2rem;
   }

  @media (max-width: 900px) {
    .wrapper {
      margin: 3.5rem 0.8rem 0 0.8rem;
    }
  }
</style>

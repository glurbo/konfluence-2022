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
      border: 2px solid;
      border-radius: 25px;
      border-color: #6AAED9;
      /* border-image: linear-gradient(to right, red, blue) 1; */
      border-image-slice: 2;
      
      background: linear-gradient(to right, #6AAED9, #966BF2);
    
      /* background-color: #6AAED9; */
      border-radius: 1.5rem;
      overflow: hidden;
      padding: 0;
      margin: 10rem 0;
      text-align: justify;
      z-index: 10;
      position: relative;
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

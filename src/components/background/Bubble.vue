<template>
  <div 
    class="bubble"
    :class="[getRandomSize(), getRandomColor()]"
    :style="{ top: top + 'px', left: left + 'px' }"
  />
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    top: Number,
    left: Number,
    maxSize: Number
  },
  methods: {
    getRandomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    getRandomSize: function () {
      let maxSize = this.maxSize == null ? 4 : this.maxSize;
      let sizeNumber = this.getRandomInteger(1, maxSize);
      return 'size' + sizeNumber;
    },
    getRandomColor: function () {
      let colorNumber = this.getRandomInteger(1, 6);
      return 'color' + colorNumber;
    }
  }
}
</script>

<style scoped>
  .bubble {
    border-radius: 100%;
    position: absolute;
    opacity: 0.7;
  }

  .size1 {
    width: 100px;
    height: 100px;
  }

  .size2 {
    width: 200px;
    height: 200px;
  }

  .size3 {
    width: 300px;
    height: 300px;
  }

  .size4 {
    width: 400px;
    height: 400px;
  }

  /*red*/
  .color1 {
    background-color: #fc5c65;
  }

  /*blue*/
  .color2 {
    background-color: #45aaf2;
  }

  /*yellow*/
  .color3 {
    background-color: #fed330;
  }

  /*orange*/
  .color4 {
    background-color: #fd9644;
  }

  /*purple*/
  .color5 {
    background-color: #a55eea;
  }

  /*green*/
  .color6 {
    background-color: #26de81;
  }
</style>
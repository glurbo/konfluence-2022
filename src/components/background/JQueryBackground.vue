<template>
  <div id="wrapper">
    <div id="parallax-lvl-0">
      <Bubble
        v-for="n in 10"
        :key="n"
        :top="getRandomTop()"
        :left="getRandomLeft()"
      />
    </div>

    <div id="parallax-lvl-1">
      <Bubble
        v-for="n in 7"
        :key="n"
        :top="getRandomTop()"
        :left="getRandomLeft()"
      />
    </div>

    <div id="parallax-lvl-2">
      <Bubble
        v-for="n in 6"
        :key="n"
        :top="getRandomTop()"
        :left="getRandomLeft()"
        :max-size="2"
      />
    </div>

    <div id="parallax-lvl-3">
      <Bubble
        v-for="n in 3"
        :key="n"
        :top="getRandomTop()"
        :left="getRandomLeft()"
        :max-size="1"
      />
    </div>
  </div>
</template>

<script>
import Bubble from './Bubble';

export default {
  name: 'JQueryBackground',
  components: {Bubble},
  mounted: function () {
    this.$forceUpdate()
  },
  methods: {
    getRandomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomLeft: function () {
      let clientWidth = document.documentElement.clientWidth;
      if (this.isMobile()) clientWidth -= 200;
      return this.getRandomInteger(0, clientWidth)
    },
    getRandomTop: function () {
      let scrollHeight = Math.max(document.getElementById('app').scrollHeight);
      return this.getRandomInteger(0, scrollHeight + 400)
    },
    isMobile: function () {
      return screen.width < 900;
    }
  }
}

import 'expose-loader?$!expose-loader?jQuery!jquery'


$(window).bind('scroll', function () {
  parallaxScroll();
});

function parallaxScroll() {
  const scrolled = $(window).scrollTop();
  $('#parallax-lvl-0').css('top', (0 - (scrolled * .25)) + 'px');
  $('#parallax-lvl-1').css('top', (0 - (scrolled * .5)) + 'px');
  $('#parallax-lvl-2').css('top', (0 - (scrolled * .75)) + 'px');
  $('#parallax-lvl-3').css('top', (0 - (scrolled * .9)) + 'px');
}
</script>

<style scoped>
  /* CSS Bubbles */
  #parallax-lvl-0, #parallax-lvl-1, #parallax-lvl-2, #parallax-lvl-3 {
    position: absolute;
    top: 0;
  }

  #parallax-lvl-1 {
    z-index: 1;
  }

  #parallax-lvl-2 {
    z-index: 5;
  }

  #parallax-lvl-3 {
    z-index: 15;
  }

  @media (max-width: 900px) {
    #parallax-lvl-0, #parallax-lvl-1 {
      display: none;
    }
  }
</style>
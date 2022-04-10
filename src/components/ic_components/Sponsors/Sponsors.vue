<template>
  <wrapper class="sponsors-wrapper">
    <template slot="content">
      <h1 class="title">
        Sponsors
      </h1>
      <div class="columns is-multiline is-centered">
        <div v-for="sponsor in sponsors" class="column is-one-third" v-bind:key="sponsor" >
          <div class="sponsor-container">
            <a
              :href="sponsor.link"
              target="new"
            >
              <img class="image2 is-align-self-center" src="../../../assets/img/background_bubble.png">
              <img
                class="image is-align-self-center"
                :src="sponsor.imgUrl"
                :alt="sponsor.company"
              >
            </a>
          </div>
        </div>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from '../Card/Wrapper'
import { sponsors } from './Sponsors'

export default {
  name: 'SponsorWrapper',
  components: {
    Wrapper
  },
  props: {
    title: String,
  },
  data() {
    return {
      sponsors: sponsors
    }
  }
}
</script>

<style scoped>
  .sponsor-container {
    position: relative;
	margin: 30px;
  }

  .title {
    text-align: center;
    color: white;
  }

  .image {
    position: relative;
    transition: transform .4s;
    width: 200px;
    height: 200px;
    object-fit: scale-down;
    display: block;
    margin: auto;
  }

  .image2 {
    position: absolute;
    transition: transform .4s;
    width: 230px;
    height: 230px;
    object-fit: scale-down;
    display: block;
    margin: auto;
	top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .sponsor-container:hover .image {
    transform: scale(1.1);
  }

  .sponsor-container:hover .image2 {
    transform: scale(1.1);
  }

  .sponsors-wrapper {
	border: none;
    background: transparent;
	box-shadow: none;
  }
</style>
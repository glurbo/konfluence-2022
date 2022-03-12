<template>
  <wrapper class="sponsors-wrapper">
    <template slot="content">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="columns is-multiline is-centered">
        <div v-for="sponsor in sponsors" class="column is-one-quarter" v-bind:key="sponsor" >
          <div class="container">
            <a
              :href="sponsor.link"
              target="new"
            >
			<img class="image2" src="../../../assets/img/background_bubble.png">
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
  .container {
    position: relative;
  }

  .title {
    text-align: center;
    font-size: 3rem;
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
  }

  .image:hover {
    transform: scale(1.1);
  }

  .sponsors-wrapper {
	border: none;
    background: transparent;
  }
</style>
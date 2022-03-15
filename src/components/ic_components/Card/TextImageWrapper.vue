<template>
  <wrapper>
    <template slot="content">
      <div
        :class="imageAlign"
        class="cardbox"
      >
        <div class="text-wrapper">
          <h1 class="title">
            {{ title }}
          </h1>
          <component :is="textComponent" />
        </div>

        <figure>
          <img
            :src="imagePath"
            alt="Organizers"
          >
          <!--TODO: add alt prop-->
        </figure>
      </div>
    </template>
  </wrapper>
</template>

<script>
import Wrapper from './Wrapper'
import AboutText from '../Text/AboutText'
import VenueText from '../Text/VenueText'
import OrganizerText from '../Text/OrganizerText'

export default {
  name: 'WrapperWithImage',
  components: {
    Wrapper,
    AboutText,
    VenueText,
    OrganizerText
  },
  props: {
    title: String,
    textComponent: String,
    imagePath: {
      type: String,
      required: true
    },
    imageAlign: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

  .title {
    text-shadow: 0px 1px 1px black;
	color: white;
  }

  .cardbox {
    display: flex;
    justify-content: space-between;
  }

  .text-wrapper {
    padding: 2rem;
  }

  .list-wrapper {
    margin: 1rem 0 1rem 2rem;
    list-style-type: square;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .right {
    flex-direction: row;
  }
  .left {
    flex-direction: row-reverse;
  }

  @media (min-width: 1000px) {
    .text-wrapper {
      max-width: 38%;
    }
  }

  @media (max-width: 1000px) {
    .cardbox {
      flex-wrap: wrap-reverse;
    }

    img {
      max-height: 20rem;
    }
  }
</style>

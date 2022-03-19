<template>
  <div class="columns">
    <div class="time column is-2">
      <span class="subtitle is-size-4">
        {{ time }}
      </span>
    </div>
    <div class="column">
      <wrapper v-if="!subItem" :class="disabled ? 'agenda-disabled' : ''">
        <template slot="content">
          <div v-if="!disabled" class="agenda-item" >
            <h1 class="title is-size-4 is-size-5-mobile">
              {{ title }}
            </h1>
            <h2 class="speaker subtitle is-size-4 is-size-5-mobile">
              {{ speaker }}
            </h2>
            <img
              class="image"
              :src="imageSrc"
              :alt="company"
            >
          </div>
          <div v-if="disabled" class="agenda-item">
            <h1>To be announced!</h1>
          </div>
        </template>
      </wrapper>
      <wrapper v-if="subItem" class="sub-agenda">
        <template slot="content">
          <div class="agenda-item" >
            <h1 class="title is-size-4 is-size-5-mobile">
              {{ title }}
            </h1>
          </div>
        </template>
      </wrapper>
    </div>
  </div>
</template>

<script>
import Wrapper from "../Card/Wrapper";

export default {
  name: "AgendaItem",
  components: {Wrapper},
  props: {
    title: String,
    speaker: String,
    time: String,
    imageSrc: String,
    company: String,
    language: String,
    disabled: Boolean,
    subItem: Boolean
  }
}
</script>

<style>

</style>

<style scoped>
  h1, h2 {
    padding: 1.5rem;
  }

  .title {
    margin-bottom: 0 !important;
    padding-right: 1.6rem;
    font-weight: 500;
    font-family: "Keep Calm", sans-serif;
    color: white;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .subtitle {
    color: white;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .speaker {
    font-style: italic;
    font-weight: 400;
    padding-top: 1rem;
    margin-bottom: 0 !important;
    color: white;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .wrapper {
    margin: 0;
    min-height: 10rem;
  }

  .sub-agenda {
    min-height: 1rem;
    text-align: center;
    /*background-color: transparent;*/
  }

  .agenda-item {
    text-align: left;
  }

  .agenda-disabled {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .time {
    padding-top: 2rem;
    padding-right: 0rem;
  }

  .image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 9rem;
    padding: 0 1.5rem 1.5rem 0;
  }

  @media (max-width: 900px) {
    .wrapper {
      margin: 0 0.8rem 0 0.8rem;
    }

    .image {
      width: 7rem;
      padding: 0 1rem 1rem 0;
    }
  }

</style>
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
            <h1 class="title is-4 is-size-5-mobile">
              {{ title }}
            </h1>
            <div class="name-company-container">
              <h2 class="speaker is-size-4 is-size-5-mobile">
                {{ speaker }}
              </h2>
              <img
                class="image"
                :src="imageSrc"
                :alt="company"
              >
            </div>
            
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

  .name-company-container {
	display: flex;
	flex-direction: row;
	/* flex-flow: column wrap; */
	justify-content: space-between;
	align-items: center;
  }

  .title {
    margin-bottom: 0 !important;
    padding-right: 1.6rem;
    font-family: "Keep Calm", sans-serif;
    color: white;
  }

  .subtitle {
    color: white;
  }

  .speaker {
    font-weight: 400;
    padding-top: 1rem;
    margin-bottom: 0 !important;
    color: white;
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
    /* position: absolute;
    bottom: 0;
    right: 0; */
    width: 9rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 900px) {
    .wrapper {
      margin: 0 0.8rem 0 0.8rem;
    }

    .image {
      width: 7rem;
      padding-right: 1rem;
    }
  }

</style>
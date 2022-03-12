<template>
  <div class="z-index">
    <h1 class="title">
      Speakers
    </h1>
    <div class="speakers">
      <template v-for="speaker in speakers" >
        <div class="card speaker-card" v-bind:key="speaker">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="speaker.image"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ speaker.name }}
                </p>
                <p class="subtitle is-6">
                  {{ speaker.company }}
                </p>
              </div>
            </div>

            <div class="content">
              <div class="overflow-scroll-gradient">
                <div class="overflow-scroll-gradient__scroller">
                  <span class="speaker-text">{{ speaker.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { speakers } from './Speakers';

export default {
  name: "Speakers",
  data() {
    return {
      speakers: speakers
    }
  },
}
</script>

<style scoped>
  .speakers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 4rem;
    justify-content: center;
  }

  .speaker-card {
    max-width: 20rem;
    margin: 2rem;
    border-radius: 1.5rem;
    border: 2px solid;
    border-color: #6AAED9;
    overflow: hidden;
  }

  img {
    object-fit: cover;
  }

  .content {
    text-align: justify;
    white-space: pre-line;
  }

  .z-index {
    z-index: 10;
    position: relative;
  }
  
  .speaker-text {
    padding-bottom: 1rem; 
  }

  .overflow-scroll-gradient {
    position: relative;
  }

  .overflow-scroll-gradient::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25px;
    background: linear-gradient(
            rgba(255, 255, 255, 0.001),
            white
    ); /* transparent keyword is broken in Safari */
    pointer-events: none;
  }
  .overflow-scroll-gradient__scroller {
    overflow-y: scroll;
    background: white;
    width: 100%;
    height: 150px;
    line-height: 1.2;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .overflow-scroll-gradient__scroller::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
  
  @media (max-width: 1000px) {
    .speakers {
      margin: 0;
    }

    .speaker-card {
      margin: 1rem 0;
    }
  }
</style>

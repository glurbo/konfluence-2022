<template>
  <div class="z-index">
    <h1 class="title">
      Speakers
    </h1>
    <div v-if="!hasSpeakers">
      <div class="subtitle">To be announced soon!</div>
    </div>
    <div v-else class="speakers">
      <template v-for="speaker in speakers" >
        <div v-bind:key="speaker">
          <figure class="">
            <img
              :src="speaker.image"
              alt="Placeholder image"
              class="is-rounded"
            >
          </figure>
          <div class="card speaker-card">
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
  computed: {
    hasSpeakers() {
      return speakers.length > 0;
    }
  }
}
</script>

<style scoped>
  .title, .subtitle {
    color: white;
	text-shadow: 0px 1px 1px black;
  }

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
    border: 2px solid rgba(255,255,255,0.1);
    overflow: hidden;
	background-color: rgba(255,255,255,0.1);
	background: linear-gradient(320DEG,  rgba(255,255,255,0.1),  rgba(255,255,255,0.4) 99%);
	color: white;
	text-shadow: 0px 1px 1px black;
  }

  img {
	width: 273px;
	height: 273px;
    object-fit: cover;
	border-radius: 100%;
	border: 2px solid rgba(255,255,255,0.1);
	box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
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

  @media (max-width: 1000px) {
    .speakers {
      margin: 0;
    }

    .speaker-card {
      margin: 1rem 0;
    }
  }
</style>

<template>
  <div class="z-index">
    <h1 class="title">Speakers</h1>
    <div>
      <div class="subtitle tba">More to be announced soon!</div>
    </div>
    <div class="speakers">
      <template>
        <div v-for="speaker in speakers" v-bind:key="speaker">
          <figure class="">
            <div v-if="speaker.image2 != null" class="image-container">
              <img
                :src="speaker.image"
                alt="Placeholder image"
                class="is-rounded speaker-image-first"
              />
              <img
                :src="speaker.image2"
                alt="Placeholder image"
                class="is-rounded speaker-image-second"
              />
              <img
                src="../../../assets/img/svg/bubble/Ellipse 18.svg"
                class="speaker-image-bubble-second speaker-image"
              />
            </div>
            <div v-else class="image-container">
              <img
                :src="speaker.image"
                alt="Placeholder image"
                class="is-rounded speaker-image"
              />
              <img
                src="../../../assets/img/svg/bubble/Ellipse 18.svg"
                class="speaker-image-bubble speaker-image"
              />
            </div>
          </figure>
          <div class="card speaker-card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    {{ speaker.name }}
                  </p>
                  <p class="subtitle has-text-weight-medium">
                    {{ speaker.company }}
                  </p>
                  <p v-if="speaker.name2 != null" class="subtitle" style="margin-bottom:2.5rem;">
                    &
                  </p>
                  <p v-if="speaker.name2 != null" class="title is-4">
                    {{ speaker.name2 }}
                  </p>
                  <p v-if="speaker.company2 != null" class="subtitle has-text-weight-medium">
                    {{ speaker.company2 }}
                  </p>
                  
                  <p class="is-size-5 has-text-weight-medium">
                    {{ speaker.title }}
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
import { speakers } from "./Speakers";

export default {
  name: "Speakers",
  data() {
    return {
      speakers: speakers,
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      }
    };
  },
  computed: {
    hasSpeakers() {
      return speakers.length > 0;
    },
  },
};
</script>

<style scoped>
.title,
.subtitle {
  color: white;
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
  /* height: 30rem; */
  margin: 2rem;
  border-radius: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    320deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3) 150%
  );
  color: white;
  text-shadow: 1px 1px 3px rgb(107, 127, 242, 0.2);
}

.speaker-image {
  width: 273px;
  height: 273px;
  object-fit: cover;
  border-radius: 100%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}

.image-container {
  position: relative;
  height: 280px;
}
.speaker-image-bubble {
  position: absolute;
  width: 75px;
  height: 75px;
  right: 10%;
  bottom: 12%;
}

.speaker-image-first {
  position: relative;
  top: 25%;
  left: -20%;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}

.speaker-image-second {
  position: absolute;
  right: 1%;
  top: 1%;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}

.speaker-image-bubble-second {
  position: absolute;
  width: 75px;
  height: 75px;
  right: 39%;
  bottom: 0;
}

.speaker-text {
  font-size: 1.1rem;
}

.content {
  text-align: justify;
  white-space: pre-line;
}

.overflow-scroll-gradient {
  position: relative;
}

.z-index {
  z-index: 20;
  position: relative;
}

.tba {
  margin-bottom: 20px;
}

/* .overflow-scroll-gradient {
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
    ); 
    pointer-events: none;
  }
  .overflow-scroll-gradient__scroller {
    overflow-y: scroll;
    width: 100%;
    height: 200px;
    line-height: 1.2;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .overflow-scroll-gradient__scroller::-webkit-scrollbar {
    width: 0;
    height: 0;
  } */

@media (max-width: 1000px) {
  .speakers {
    margin: 0;
  }

  .speaker-card {
    margin: 1rem 0;
  }

  .speaker-image-bubble {
    right: 1%;
  }

  .speaker-image-first {
    width: 180px;
    height: 180px;
  }

  .speaker-image-second {
    width: 180px;
    height: 180px;
  }
}
</style>

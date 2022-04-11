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
            <div class="image-container">
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
}
.speaker-image-bubble {
  position: absolute;
  width: 75px;
  height: 75px;
  right: 10%;
  bottom: 12%;
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
}
</style>

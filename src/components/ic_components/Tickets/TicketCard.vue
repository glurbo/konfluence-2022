<template>
  <div class="card ticket-card">
    <div class="card-content">
      <p class="title is-size-3">
        {{ title }}
      </p>
      <p class="price is-size-1">
        <sup class="is-size-4"> € </sup>
        {{ studentPrice }}
        <sup class="is-size-5"> / student </sup>
      </p>
      <p class="price is-size-1">
        <sup class="is-size-4"> € </sup>
        {{ regularPrice }}
        <sup class="is-size-5"> / regular </sup>
      </p>
      <p
        class="subheading has-text-grey is-size-6 is-uppercase"
        v-if="footerText != null"
      >
        {{ footerText }} <strong>{{ footerDate }}</strong>
      </p>
    </div>
    <footer class="card-footer">
      <a
        class="button card-footer-item is-size-4"
        :class="buttonColor"
        :disabled="disabled"
        href="https://fienta.com/konfluence-2022?0c11e2ff3e1679003747392bb2af3c1f="
      >
        <!-- TODO: fienta link -->
        BUY
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: {
    title: String,
    studentPrice: String,
    regularPrice: String,
    disabled: Boolean,
    buttonColor: String,
    footerText: String,
    footerDate: String,
  },
};
</script>

<style scoped>
.ticket-card {
  border: 2px solid;
  border-color: #6AAED9;
  max-width: 22rem;
  margin: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;
}

.z-index-above-bubbles {
  position: relative;
  z-index: 10;
}

.price {
  font-family: sans-serif;
  margin-bottom: 2rem !important;
}

.title {
  margin-top: 1rem;
  margin-bottom: 4rem !important;
}

sup {
  color: gray;
}

/* @font-face {
    font-family: "Keep Calm";
    src: url(../../../assets/fonts/KeepCalm-Medium.ttf) format('truetype')
  } */

/*red*/
.color-red {
  background-color: #fc5c65;
  color: white;
  border: transparent;
}

/*blue*/
.color-blue {
  background-color: #45aaf2;
  color: white;
  border: transparent;
}

/*green*/
.color-green {
  background-color: #26de81;
  color: white;
  border: transparent;
}

/*red*/
.color-red[disabled] {
  background-color: #fc5c65;
  color: white;
  border: transparent;
  pointer-events: none;
  cursor: not-allowed;
}

/*blue*/
.color-blue[disabled] {
  background-color: #45aaf2;
  color: white;
  border: transparent;
  pointer-events: none;
  cursor: not-allowed;
}

/*green*/
.color-green[disabled] {
  background-color: #26de81;
  color: white;
  border: transparent;
  pointer-events: none;
  cursor: not-allowed;
}
</style>

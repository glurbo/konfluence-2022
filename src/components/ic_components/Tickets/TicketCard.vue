<template>
  <div class="z-index-above-bubbles">
    <div class="ticket-card">
      <div class="card-content">
        <p class="title is-size-3">
          {{ title }}
        </p>
        <p class="price is-size-1">
          {{ taltechStudentPrice }}
          <sup class="is-size-5"> / TalTech student </sup>
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
          v-if="footerText != null"
          class="subheading has-text-white is-size-6 is-uppercase"
        >
          {{ footerText }} <strong>{{ footerDate }}</strong>
        </p>
      </div>
      <footer class="card-footer">
        <a
          class="button card-footer-item is-size-4"
          :disabled="disabled"
          href="https://fienta.com/konfluence-2022"
        >
          BUY
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: {
    title: String,
    taltechStudentPrice: String,
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
  width: 100%;
  border: 2px solid;
  max-width: 22rem;
  margin: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(320DEG,  rgba(255,255,255,0.1),  rgba(255,255,255,0.4) 150%);
  color: white;
  border: 2px solid rgba(255,255,255,0.1);
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  z-index: 5;
}

.card-footer-item {
  background-color: hsla(152, 96%, 48%, 0.8);
  border: 0px;
  color: white;
  text-shadow: 1px 1px 3px rgb(107, 127, 242, 0.2);
}

.card-footer-item:hover {
  color: white;
}

.card-footer-item[disabled] {
  background-color: hsla(152, 96%, 48%, 0.8);
  border: 0px;
  color: white;
  pointer-events: none;
  cursor: not-allowed;
}

.card-footer {
	border:  0px solid rgba(255,255,255,0.1);
}

.z-index-above-bubbles {
  position: relative;
  z-index: 10;
}

.price {
  font-family: sans-serif;
  margin-bottom: 2rem !important;
  color: white;
}

.title {
  margin-top: 1rem;
  margin-bottom: 4rem !important;
  color: white;
  z-index: 10;
}

sup {
  color: white;
}

p {
  text-shadow: 1px 1px 3px rgb(107, 127, 242, 0.2);
}
</style>

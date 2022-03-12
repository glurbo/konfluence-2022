<template>
  <div class="footer">
    <div class="columns is-centered">
      <div class="column">
        <img src="../assets/img/TalTech_logo.png" alt="" />
      </div>
      <div class="column is-align-self-center">
        <p>© Konfluence {{ getYear() }}</p>
      </div>
      <div class="column level-left">
        <img src="../assets/img/ityk_logo.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  methods: {
    getYear: function () {
      return new Date().getFullYear().toString();
    },
  },
};
</script>

<style scoped>
.footer {
  border-top: 2px solid;
  border-color: #6AAED9;
  background: linear-gradient(to right, #6AAED9, #966BF2);
  height: 10rem;
  background-color: #d0d0d0;
  text-align: center;
  color: white;
  /* font-size: 6rem; */
}

p {
  /* font-size: 2rem; */
}

img {
  max-height: 100px;
  margin: auto;
  display: block;
}

@media (max-width: 770px) {
	.column {
		/* width: 100% */
		break-inside: avoid-column;
		object-fit: contain;
	}
}
</style>

<template>
  <div class="page-footer">
    <div class="content columns is-centered ordered-mobile">
      <div class="column taltech-logo is-one-fifth fl-1">
        <img src="../assets/img/svg/ituk.horisontal.long.white.taltech.svg" alt="" />
      </div>
      <div class="column copyright is-align-self-center is-one-fifth fl-2">
        <p>© Konfluence {{ getYear() }}</p>
      </div>
      <div class="column logos columns is-mobile is-one-fifth fl-3">
        <div class="column logo">
          <a href="https://www.facebook.com/ituk.taltech" target="new">
            <img src="../assets/img/svg/facebook.svg" width="40px" alt="facebook">
          </a>
        </div>
        <div class="column logo">
          <a href="https://www.instagram.com/ituk.taltech/" target="new">
            <img src="../assets/img/svg/instagram.svg" width="40px" alt="instagram">
          </a>
        </div>
        <div class="column logo">
          <a href="https://ituk.ee/" target="new">
            <img src="../assets/img/svg/ituk.svg" width="40px" alt="instagram">
          </a>
        </div>
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
.logo {
  display: block;
  margin: auto;
}

.page-footer {
  margin: 0 auto;
  padding: 2rem;
  border-top: 2px solid;
  border-color: rgba(255, 255, 255, 0.1);
  background: #966BF2;
  text-align: center;
  color: white;
  bottom: 0;
}

img {
  max-height: 100px;
  margin: auto;
  display: block;
  /* filter: drop-shadow(0px 1px 1px rgb(0 0 0 / 0.3)); */
}

p {
  text-shadow: 1px 1px 3px rgb(107, 127, 242, 0.2);
  font-size: 1.1rem;
}

@media (max-width: 770px) {
    .ordered-mobile {
      display: flex;
      flex-flow: column;
    }

	.fl-1 {
      order: 1;
	}

	.fl-2 {
      order: 3;
	}

	.fl-3 {
      order: 2;
	}

	.copyright {
		width: 100%;
		order: 3;
	}

	.logos {
		order: 2;
	}
}
</style>

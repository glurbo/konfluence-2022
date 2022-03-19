<template>
  <div>
    <p class="subtitle is-size-4-desktop has-text-white">
      Student Council of TalTech's School of IT (ITÜK)
    </p>
    <p class="is-size-5-desktop is-size-6-mobile">
      We are IT-students organising a variety of events ranging from conferences to LAN-parties. All of us are passionate about code and software development as a whole.
    </p>
    <div class="contact">
      <div class="has-text-centered">
        <span class="has-text-weight-bold subtitle is-size-4">
          GET IN TOUCH
        </span>
      </div>
      <div class="contact-logos columns is-mobile has-text-centered is-size-3 has-text-dark">
        <div class="column">
          <a href="https://www.facebook.com/ituk.taltech" target="new">
            <img src="../../../assets/img/svg/facebook.svg" width="50px" alt="facebook">
          </a>
        </div>
        <div class="column">
          <a href="https://www.instagram.com/ituk.taltech/" target="new">
            <img src="../../../assets/img/svg/instagram.svg" width="50px" alt="instagram">
          </a>
        </div>
        <div class="column">
          <a href="https://ituk.ee/" target="new">
            <img src="../../../assets/img/svg/ituk.svg" width="50px" alt="instagram">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizerText"
}
</script>

<style scoped>
  
  p {
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  img {
    filter: drop-shadow(0px 1px 1px rgb(0 0 0 / 0.3));
  }

  .subtitle {
    color: white;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .contact-logos {
    margin-top: 1em;
  }

  .contact {
    margin-top: 4em;
  }

  @media (max-width: 900px) {
    .contact {
      margin-top: 3em;
    }
  }
</style>
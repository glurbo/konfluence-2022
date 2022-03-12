<template>
  <div>
    <p class="subtitle is-size-4-desktop">
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
          <a
            href="https://www.facebook.com/ituk.ttu/"
            target="new"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              size="lg"
            />
          </a>
        </div>
        <div class="column">
          <a href="mailto:konfluence@ituk.ee">
            <font-awesome-icon
              icon="envelope"
              size="lg"
            />
          </a>
        </div>
        <div class="column">
          <a href="tel:+37253057474">
            <font-awesome-icon
              icon="phone"
              size="lg"
            />
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
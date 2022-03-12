<template>
  <div>
    <h1 class="title">
      Tickets
    </h1>
    <div class="columns is-multiline is-centered">
      <div class="column">
        <ticket-card
          title="Early bird"
          student-price="4"
          regular-price="10"
          button-color="color-blue"
          footer-date="07/04/2019"
          footer-text="Available until"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Late bird"
          student-price="15"
          regular-price="20"
          button-color="color-green"
          footer-text="Event day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TicketCard from "./TicketCard";

export default {
  name: "Tickets",
  components: {TicketCard}
}
</script>

<style scoped>

</style>

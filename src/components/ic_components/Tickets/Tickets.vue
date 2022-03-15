<template>
  <div class="tickets">
    <h1 class="title has-text-white">
      Tickets
    </h1>
    <div class="columns is-multiline is-centered">
      <div class="column">
        <ticket-card
          title="Regular bird"
          taltech-student-price="FREE"
          student-price="5"
          regular-price="10"
          footer-date="30/04/2022"
          footer-text="Available until"
        />
      </div>
      <div class="column">
        <ticket-card
          title="Late bird"
          taltech-student-price="FREE"
          student-price="10"
          regular-price="15"
          footer-date="31/04/2022"
          footer-text="Available from"
          disabled="true"
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

.tickets {
  z-index: 20;
  position: relative;
}

.title {
  text-shadow: 0px 1px 1px black;
}

.column {
   display: flex;
   align-items: center;
   justify-content: center;
}

.columns {
  width: 100%;
}
</style>

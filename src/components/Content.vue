<template>
  <div id="content" class="container">
    <tickets id="tickets" class="page-section" />

    <text-image-wrapper
      id="about"
      class="page-section"
      title="About"
      text-component="AboutText"
      image-align="left"
      image-path="https://i.imgur.com/TDdcYdA.jpg"
    />

    <Speakers id="speakers" />

    <text-image-wrapper
      id="venue"
      class="page-section"
      title="Venue"
      text-component="VenueText"
      image-align="right"
      image-path="https://i.imgur.com/B0ZX9tD.png"
    />

    <agenda 
      id="agenda" 
      class="page-section" 
    />

    <text-image-wrapper
      id="organizers"
      class="page-section"
      title="Organizer"
      text-component="OrganizerText"
      image-align="left"
      image-path="https://i.imgur.com/SUslQpK.png"
    />

    <sponsor-wrapper id="sponsors" class="page-section" title="Sponsors" />
  </div>
</template>

<script>
import TextImageWrapper from "./ic_components/Card/TextImageWrapper.vue";
import Speakers from "./ic_components/Speakers/Speakers.vue";
import SponsorWrapper from "./ic_components/Sponsors/Sponsors.vue";
import Tickets from "./ic_components/Tickets/Tickets.vue";
import Agenda from "./ic_components/Agenda/Agenda.vue";

export default {
  name: "Content",
  components: {
    Tickets,
    Speakers,
    TextImageWrapper,
    SponsorWrapper,
    Agenda,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
}

.right-align {
  align-self: flex-end;
}

.page-section {
  margin-bottom: 10rem;
}
</style>

<style scoped>
   @import "../../node_modules/bulma/css/bulma.css";
   h1 {
     margin: 0;
     font-size: 2rem;
     color: #333333;
   }
   p {
     margin: 0;
     font-size: 1rem;
     color: #333333;
   }
</style>

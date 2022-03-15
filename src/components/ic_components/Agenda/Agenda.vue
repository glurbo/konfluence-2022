<template>
  <div class="z-index">
    <h1 class="title">
      Agenda
    </h1>
    <div v-if="!hasAgendaItems">
      <div class="subtitle">To be announced soon!</div>
    </div>
    <div v-else class="columns is-multiline">
      <div class="column is-half">
        <div v-for="agendaItem in agendaItems" :key="agendaItem.index">
          <agenda-item
            v-if="agendaItem.index <= 6"
            :key="agendaItem.index"
            :title="agendaItem.title"
            :speaker="agendaItem.speaker"
            :time="agendaItem.time"
            :image-src="agendaItem.imageSrc"
            :company="agendaItem.company"
            :language="agendaItem.language"
            :disabled="agendaItem.disabled"
            :sub-item="agendaItem.subItem"
          />
        </div>
        
      </div>
      <div class="column is-half">
        <div v-for="agendaItem in agendaItems" :key="agendaItem.index">
          <agenda-item
            v-if="agendaItem.index >= 7"
            :key="agendaItem.index"
            :title="agendaItem.title"
            :speaker="agendaItem.speaker"
            :time="agendaItem.time"
            :image-src="agendaItem.imageSrc"
            :company="agendaItem.company"
            :language="agendaItem.language"
            :disabled="agendaItem.disabled"
            :sub-item="agendaItem.subItem"
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { agendaItems } from './AgendaItems';

import AgendaItem from "./AgendaItem.vue";

export default {
  name: "Agenda",
  components: {AgendaItem},
  data() {
    return {
      agendaItems: agendaItems
    }
  },
  computed: {
    hasAgendaItems() {
      return agendaItems.length > 0;
    }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 50px !important;
    color: white;
    text-shadow: 0px 1px 1px black;
  }

  .subtitle {
    color: white;
    text-shadow: 0px 1px 1px black;
  }

  .z-index {
    z-index: 20;
    position: relative;
  }
</style>
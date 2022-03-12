<template>
  <div>
    <h2 class="subtitle is-size-4">
      TalTech Mektory
    </h2>
    <p class="description is-size-5-desktop is-size-6-mobile">
      Bringing together scientists, students and entrepreneurs to generate future facing ideas. Mektory inspires the growths of startups started by students
      both in universities and secondary schools.
    </p>
    <p class="is-size-4">
      <font-awesome-icon
        icon="map-marker-alt"
        size="lg"
      />
      <span>
        <a
          href="https://www.google.com/maps/place/TalTechi+innovatsiooni-+ja+ettev%C3%B5tluskeskus+MEKTORY/@59.3948705,24.6613989,15z/data=!4m2!3m1!1s0x0:0x8d2a6830f66a1a0d?ved=2ahUKEwiJoYffm_XgAhXrqIsKHU92CmcQ_BIwDXoECAYQCA"
          target="new"
        >
          Raja 15, Tallinn
        </a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'VenueText'
}
</script>

<style scoped>
  svg {
   margin-right: 1rem;
  }

  .description {
    margin-bottom: 2rem;
  }
</style>
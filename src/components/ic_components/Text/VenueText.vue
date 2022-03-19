<template>
  <div>
    <h2 class="subtitle is-size-4 has-text-white">
      TalTech Assembly Hall
    </h2>
    <p class="description is-size-5-desktop is-size-6-mobile">
    </p>
    <p class="is-size-4">
      <font-awesome-icon
        icon="map-marker-alt"
        size="lg"
      />
      <span>
        <a
          href="https://www.google.com/maps/place/TalTech+%E2%80%93+Tallinn+University+of+Technology/@59.3959465,24.6699653,18z/data=!3m1!4b1!4m5!3m4!1s0x469295a9df77d59b:0xf00b36df26c7020!8m2!3d59.3959451!4d24.6710596"
          target="new"
        >
          <img src="../../../assets/img/svg/geo-alt-fill.svg" width="35px" alt="location">
          Ehitajate tee 5, Tallinn
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

  h2, p {
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  img {
    filter: drop-shadow(0px 1px 1px rgb(0 0 0 / 0.2));
  }

  span > a {
	color: white;
  }
</style>
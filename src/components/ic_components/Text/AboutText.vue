<template>
  <div class="is-size-5-desktop is-size-6-mobile">
    <p class="is-size-5-desktop is-size-6-mobile">
      Konfluence is a conference that is entirely organized by the students of TalTech student council of the school of IT and brings together many experts from well-known 
      Estonian start-ups and established IT-companies.
      Acquire or improve your knowledge from the best developers, engineers and designers who specialize in front-end development with emphasis on quality user interface 
      design and experience, web development and the latest front-end technologies, broaching the subject on:
    </p>

    <div>
      <ul
        class="list-wrapper"
      >
        <li>
          User interface design processes.
        </li>
        <li>
          Clean, simple and user-friendly design
        </li>
        <li>
          Safe and effective development processes
        </li>
        <li>
          Technologies used by Estonian and international companies
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutText"
}
</script>

<style scoped>
  p, li {
	text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .list-wrapper {
    margin: 1rem 0 1rem 2rem;
    list-style-type: square;
  }
</style>

<template>
  <div class="navbar">
    <template v-for="subPage in subPages">
      <navbar-button
        :name="subPage.text"
        :scroll-to="subPage.page"
      />
    </template>
  </div>
</template>

<script>
import NavbarButton from './NavbarButton'
import { subPages } from './subPages'

export default {
  name: "NavBar",
  components: {
    NavbarButton
  },
  data() {
    return {
      subPages: subPages
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    flex-direction: column;
    transform: translate(0, -50%);
    position: fixed;
    right: 2rem;
    top: 50%;
    background-color: transparent;
  }
</style>
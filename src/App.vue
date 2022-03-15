<template>
  <div id="app">
    <j-query-background />
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import JQueryBackground from './components/background/JQueryBackground'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    JQueryBackground
  },
  mounted() {
    let fientaScript = document.createElement('script');
    fientaScript.async = true;
    fientaScript.setAttribute('src', 'https://fienta.com/embed.js');
    window.fientaSettings = {
      border_radius: '25px'
    }
    document.head.appendChild(fientaScript)
  }
}
</script>

<style scoped>
@import "~bulma/css/bulma.css";	
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
#app {
  font-family: DM Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: linear-gradient(55deg, #6BF2F2 0%, #6AAED9 51%, #966BF2 85%); */
  background: linear-gradient(to left, #6AAED9, hsla(277, 100%, 65%, 0) 70%),
  linear-gradient(24deg,#6B7FF2, hsla(208, 100%, 50%, 0) 70%), 
  linear-gradient(178deg,#966BF2, hsla(167, 100%, 50%, 0) 70%);
  color: white;	
}
</style>

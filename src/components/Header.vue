<template>
  <div>
    <section class="is-fullheight">
      <div class="hero-body">
        <div
          id="title-and-buttons-container"
          class="container"
        >
          <div class="columns">
            <div class="column">
              <div>
                <img src="../assets/img/Header2.png" class="header-img">
              </div>
              <h2 class="subtitle is-size-4-desktop is-size-5-mobile">
                Student-organized front-end conference |
                <span >
                  May 7th
                </span>
              </h2>
            </div>
          </div>
          <div
            class="button-row row"
            :class="this.isMobile() ? 'increased-top-margin' : ''"
          >
            <div class="columns">
              <div class="column">
                <a
                  v-scroll-to="'#tickets'"
                  class="button glass-button"
                  :class="this.isMobile() ? 'is-fullwidth' : ''"
                >
                  TICKETS
                </a>
              </div>
              <div class="column">
                <a
                  v-scroll-to="'#speakers'"
                  title="Speakers"
                  class="button glass-button glowing-border"
                  :class="this.isMobile() ? 'is-fullwidth' : ''"
                >
                  SPEAKERS
                </a>
              </div>
              <div class="column">
                <a
                  v-scroll-to="'#agenda'"
                  title="Agenda"
                  class="button glass-button"
                  :class="this.isMobile() ? 'is-fullwidth' : ''"
                >
                  AGENDA
                </a>
              </div>
              <div class="column">
                <a
                  v-scroll-to="'#organizers'"
                  class="button glass-button"
                  :class="this.isMobile() ? 'is-fullwidth' : ''"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium gradient">
      <div class="hero-body" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Launch",
  mounted() {
    const ticketScript = document.createElement('script');
    ticketScript.setAttribute('src', 'https://fienta.com/embed.js');
    document.head.appendChild(ticketScript);
  },
  methods: {
    isMobile: function () {
      return screen.width < 900;
    }
  }
}
</script>

<style scoped>

  .subtitle {
    text-align: center;
	color: white;
	text-shadow: 0px 1px 1px black;
  }

  .hero {
    text-align: left;
    z-index: 10;
  }

  .gradient {
    /* background-image: linear-gradient(white, #f7f7f7) */
  }

  .button-row {
    margin-top: 30px;
  }

  @media (max-width: 900px) {
    .button-row {

    }
  }

  #maintitle {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 60pt;
    /*white-space: nowrap;*/
  }

  #yearnumber {
    color: #3498db;
  }

  #title-and-buttons-container {
    z-index: 30;
  }

  .increased-top-margin {
    margin-top: 80px;
  }

  .date {
    /*padding-bottom: 1rem;*/
    color: #1ed385;
    font-weight: 700;
  }

  .header-img {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .glass-button {
  background: linear-gradient(320DEG,  rgba(255,255,255,0.3),  rgba(255,255,255,0.1) 99%);
   --size: 6rem;
   display: inline-block;
   padding: 24px 32px;
   text-decoration: none;
   border-radius: 15px;
   background-color: rgba(255,255,255,0.1);
   border: 2px solid rgba(255,255,255,0.2);
   /* doesn't work? */
   backdrop-filter: blur(30px);
   
   color: rgba(255,255,255,1);
   text-shadow: 0px 1px 1px black;
   font-size: 16px;
   font-weight: 700;
   letter-spacing: 2px;
   cursor: pointer;
   text-transform: uppercase;
   text-align: center;

   display: flex;
   align-items: center;
   justify-content: center;

    -o-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;

    background-size:1px 300px;  
    overflow: hidden;
	box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
 }

 .glass-button:hover {
   color: white;
   border: 2px solid rgba(255,255,255,0.5);
   background-position:100px;  
 }

</style>
<template>
    <Navbar/>
    <Hero/>

    <Planetatooin  />
     
    <!-- New components -->
    <Infototal />

</template>

<script>
import Hero from '../components/Hero.vue'
import Infototal from '../components/Infototal.vue'
import Navbar from '../components/Navbar.vue'
import Planetatooin from '../components/Planetatooin.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
    Hero,
    Planetatooin,
    Infototal,
   
  }

}
</script>

<style lang="scss">

</style>



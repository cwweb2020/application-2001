<template>
    <Navbar/>
    <Hero/>

    <Planetatooin  />
     
    <!-- New components -->
    <Infototal />

     <Films/>

    <Residents/>

   
   <Footer/>

</template>

<script>
import Films from '../components/Films.vue'
import Footer from '../components/Footer.vue'
import Hero from '../components/Hero.vue'
import Infototal from '../components/Infototal.vue'
import Navbar from '../components/Navbar.vue'
import Planetatooin from '../components/Planetatooin.vue'
import Residents from '../components/Residents.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
    Hero,
    Planetatooin,
    Infototal,
    Residents,
     Footer,
    Films,
   
  }

}
   
</script>

<style lang="scss">

</style>


